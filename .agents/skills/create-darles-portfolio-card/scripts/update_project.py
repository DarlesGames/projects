#!/usr/bin/env python3
"""Atomically add or replace one or more projects.js objects from JSON."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path
from typing import Any
from urllib.parse import urlparse

ID_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
MODES = {"add", "replace", "auto"}
REQUIRED = {
    "id", "title", "category", "type", "status", "statusLabel", "featured",
    "accent", "cover", "short", "details", "solutions", "stack", "links",
}
LOCALIZED = {"title", "type", "statusLabel", "short", "details"}
CATEGORIES = {"html5", "web-product", "mechanic", "desktop", "case"}
STATUSES = {"released", "development", "internal"}
ACCENTS = {"violet", "green", "cyan", "blue", "orange", "gold", "magic", "space"}


def object_spans(text: str, array_start: int) -> tuple[list[tuple[int, int]], int]:
    spans: list[tuple[int, int]] = []
    depth = 0
    start = None
    quote = None
    escaped = False
    line_comment = False
    block_comment = False
    i = array_start + 1
    while i < len(text):
        char = text[i]
        nxt = text[i + 1] if i + 1 < len(text) else ""
        if line_comment:
            if char == "\n":
                line_comment = False
        elif block_comment:
            if char == "*" and nxt == "/":
                block_comment = False
                i += 1
        elif quote:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == quote:
                quote = None
        elif char in "'\"`":
            quote = char
        elif char == "/" and nxt == "/":
            line_comment = True
            i += 1
        elif char == "/" and nxt == "*":
            block_comment = True
            i += 1
        elif char == "{":
            if depth == 0:
                start = i
            depth += 1
        elif char == "}":
            depth -= 1
            if depth < 0:
                raise ValueError("unbalanced object braces")
            if depth == 0 and start is not None:
                spans.append((start, i + 1))
                start = None
        elif char == "]" and depth == 0:
            return spans, i
        i += 1
    raise ValueError("projects array is not closed")


def object_id(source: str) -> str | None:
    match = re.search(r"(?:^|[{,]\s*)[\"']?id[\"']?\s*:\s*[\"']([^\"']+)[\"']", source)
    return match.group(1) if match else None


def format_card(card: dict[str, Any]) -> str:
    rendered = json.dumps(card, ensure_ascii=False, indent=2)
    rendered = re.sub(r'^(\s*)"([A-Za-z_$][A-Za-z0-9_$]*)":', r"\1\2:", rendered, flags=re.MULTILINE)
    return "\n".join("  " + line for line in rendered.splitlines())


def is_text(value: Any) -> bool:
    return isinstance(value, str) and bool(value.strip())


def validate_localized(value: Any, field: str, index: int) -> None:
    if not isinstance(value, dict) or not is_text(value.get("ru")) or not is_text(value.get("en")):
        raise ValueError(f"batch item {index} field {field} must contain non-empty ru and en strings")


def validate_card(card: dict[str, Any], index: int) -> None:
    project_id = str(card.get("id", ""))
    if not ID_RE.fullmatch(project_id):
        raise ValueError(f"batch item {index} must contain a card with a kebab-case id")
    missing = REQUIRED - set(card)
    extra = set(card) - REQUIRED
    if missing:
        raise ValueError(f"batch item {index} is missing fields: {', '.join(sorted(missing))}")
    if extra:
        raise ValueError(f"batch item {index} has unexpected fields: {', '.join(sorted(extra))}")
    for field in LOCALIZED:
        validate_localized(card[field], field, index)
    if card["category"] not in CATEGORIES:
        raise ValueError(f"batch item {index} has unsupported category: {card['category']}")
    if card["status"] not in STATUSES:
        raise ValueError(f"batch item {index} has unsupported status: {card['status']}")
    if card["accent"] not in ACCENTS:
        raise ValueError(f"batch item {index} has unsupported accent: {card['accent']}")
    if not isinstance(card["featured"], bool):
        raise ValueError(f"batch item {index} featured must be boolean")
    if not isinstance(card["cover"], str):
        raise ValueError(f"batch item {index} cover must be a string")

    solutions = card["solutions"]
    ru = solutions.get("ru") if isinstance(solutions, dict) else None
    en = solutions.get("en") if isinstance(solutions, dict) else None
    if not (isinstance(ru, list) and isinstance(en, list) and 2 <= len(ru) <= 4 and len(en) == len(ru)):
        raise ValueError(f"batch item {index} solutions must contain 2-4 aligned RU/EN items")
    if not all(is_text(item) for item in [*ru, *en]):
        raise ValueError(f"batch item {index} solutions must contain non-empty strings")

    stack = card["stack"]
    if not isinstance(stack, list) or not 3 <= len(stack) <= 6 or not all(is_text(item) for item in stack):
        raise ValueError(f"batch item {index} stack must contain 3-6 non-empty labels")
    normalized_stack = [item.strip().casefold() for item in stack]
    if len(set(normalized_stack)) != len(normalized_stack):
        raise ValueError(f"batch item {index} stack contains duplicate labels")

    links = card["links"]
    if not isinstance(links, list):
        raise ValueError(f"batch item {index} links must be an array")
    for link_index, link in enumerate(links, start=1):
        if not isinstance(link, dict):
            raise ValueError(f"batch item {index} link {link_index} must be an object")
        validate_localized(link.get("label"), f"links[{link_index}].label", index)
        parsed = urlparse(str(link.get("url", "")))
        if parsed.scheme not in {"http", "https"} or not parsed.netloc:
            raise ValueError(f"batch item {index} link {link_index} must use an HTTP(S) URL")


def normalize_jobs(payload: Any, default_mode: str) -> list[tuple[str, dict[str, Any]]]:
    if isinstance(payload, dict) and isinstance(payload.get("cards"), list):
        items = payload["cards"]
    elif isinstance(payload, list):
        items = payload
    else:
        items = [payload]

    jobs: list[tuple[str, dict[str, Any]]] = []
    seen: set[str] = set()
    for index, item in enumerate(items, start=1):
        if not isinstance(item, dict):
            raise ValueError(f"batch item {index} must be an object")
        if "card" in item:
            card = item.get("card")
            mode = item.get("mode", default_mode)
        else:
            card = item
            mode = default_mode
        if mode not in MODES:
            raise ValueError(f"batch item {index} has unsupported mode: {mode}")
        if not isinstance(card, dict):
            raise ValueError(f"batch item {index} card must be an object")
        validate_card(card, index)
        project_id = str(card["id"])
        if project_id in seen:
            raise ValueError(f"duplicate id in input payload: {project_id}")
        seen.add(project_id)
        jobs.append((mode, card))
    if not jobs:
        raise ValueError("input payload contains no cards")
    return jobs


def apply_card(text: str, card: dict[str, Any], requested_mode: str) -> tuple[str, str]:
    marker_at = text.find("window.DARLES_PROJECTS")
    array_start = text.find("[", marker_at)
    if marker_at < 0 or array_start < 0:
        raise ValueError("window.DARLES_PROJECTS array not found")
    spans, array_end = object_spans(text, array_start)
    matches = [(start, end) for start, end in spans if object_id(text[start:end]) == card["id"]]
    if len(matches) > 1:
        raise ValueError(f"duplicate existing id: {card['id']}")

    mode = ("replace" if matches else "add") if requested_mode == "auto" else requested_mode
    rendered = format_card(card)
    if mode == "add":
        if matches:
            raise ValueError(f"id already exists; use replace or auto: {card['id']}")
        prefix = "\n" if not spans else ",\n"
        return text[:array_end].rstrip() + prefix + rendered + "\n" + text[array_end:], mode

    if not matches:
        raise ValueError(f"id does not exist; use add or auto: {card['id']}")
    start, end = matches[0]
    line_start = text.rfind("\n", 0, start) + 1
    replace_start = line_start if text[line_start:start].isspace() else start
    return text[:replace_start] + rendered + text[end:], mode


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("projects", type=Path)
    parser.add_argument("cards", type=Path, help="UTF-8 JSON card, array, or {cards: [...]} envelope")
    parser.add_argument("--mode", choices=sorted(MODES), default="auto")
    args = parser.parse_args()

    original = args.projects.read_text(encoding="utf-8")
    payload = json.loads(args.cards.read_text(encoding="utf-8"))
    try:
        jobs = normalize_jobs(payload, args.mode)
        updated = original
        results: list[tuple[str, str]] = []
        for requested_mode, card in jobs:
            updated, applied_mode = apply_card(updated, card, requested_mode)
            results.append((applied_mode, str(card["id"])))
    except ValueError as exc:
        parser.error(str(exc))

    args.projects.write_text(updated, encoding="utf-8", newline="\n")
    for mode, project_id in results:
        print(f"{mode.upper()} {project_id} in {args.projects}")
    print(f"Applied {len(results)} project update(s) atomically")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
