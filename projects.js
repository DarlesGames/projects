/*
  ОСНОВНОЙ ФАЙЛ ДЛЯ ДОБАВЛЕНИЯ И РЕДАКТИРОВАНИЯ ПРОЕКТОВ.

  categories:
  html5       — HTML5-игры
  web-product — интерактивные веб-продукты
  mechanic    — игровые механики и прототипы
  desktop     — игры для ПК
  case        — кейсы и разборы решений

  Все публичные тексты задаются на двух языках:
  { ru: "Русский текст", en: "English text" }

  Обложка необязательна. Укажите путь в поле cover, например:
  cover: "assets/projects/tavern-below.webp"

  Если cover: "", карточка использует стандартную фирменную CSS-обложку.
  Для ссылки укажите реальный URL. Если links: [], будет показано сообщение о подготовке ссылок.
*/

window.DARLES_PROJECTS = [
  {
    id: "tavern-below",
    title: { ru: "Таверна: Этажом ниже", en: "Tavern: The Floor Below" },
    category: "html5",
    type: { ru: "Нарративная игра · крафт", en: "Narrative crafting game" },
    status: "released",
    statusLabel: { ru: "Опубликовано", en: "Released" },
    featured: true,
    accent: "violet",
    cover: "",
    short: {
      ru: "Мрачная фэнтезийная HTML5-игра об алхимике, который варит потусторонние зелья для проклятых душ.",
      en: "A dark fantasy HTML5 game about an alchemist who brews otherworldly potions for cursed souls."
    },
    details: {
      ru: "Авторский проект Darles Games с последовательным созданием зелий, системой кармы, персонажами, книгой рецептов, прогрессией и несколькими вариантами финала.",
      en: "An original Darles Games project featuring step-by-step potion crafting, a karma system, characters, a recipe book, progression and several ending variations."
    },
    solutions: {
      ru: [
        "Небанальная тема изготовления потусторонних зелий вместо обычной еды",
        "Сочетание нарратива, рецептов и системной прогрессии",
        "Адаптация полного игрового цикла под браузерный формат"
      ],
      en: [
        "An unusual focus on otherworldly potions instead of conventional food crafting",
        "A combination of narrative, recipes and systemic progression",
        "A complete gameplay loop adapted to the browser format"
      ]
    },
    stack: ["Construct 3", "HTML5", "Game Design", "Platform SDK", "Monetization"],
    links: []
  },
  {
  id: "quadropuzzle",
  title: { ru: "КвадроПаззл", en: "QuadroPuzzle" },
  category: "html5",
  type: { ru: "Казуальная головоломка", en: "Casual puzzle" },
  status: "released",
  statusLabel: { ru: "Опубликовано", en: "Released" },
  featured: true,
  accent: "green",
  cover: "assets/projects/quadropuzzle.webp",
  short: {
    ru: "Казуальная HTML5-головоломка, где игрок собирает яркие изображения из прямоугольных фрагментов на полях от 2×2 до 6×6.",
    en: "A casual HTML5 puzzle where players assemble colorful pictures from rectangular fragments on grids ranging from 2×2 to 6×6."
  },
  details: {
    ru: "Новые изображения и более сложные раскладки открываются по мере прохождения, а минимальное число перемещений приносит больше очков в таблице лидеров. Проект включает сезонные темы, внутриигровой магазин, рекламу, GamePush и SDK-интеграции для браузерных площадок.",
    en: "New pictures and more challenging layouts unlock through progression, while completing puzzles in fewer moves earns more leaderboard points. The project includes seasonal themes, an in-game store, advertising, GamePush and SDK integrations for browser platforms."
  },
  solutions: {
    ru: [
      "Сетки сложности от 2×2 до 6×6 и последовательное открытие изображений",
      "Перетаскивание фрагментов мышью и на сенсорных экранах",
      "Сезонные темы, внутриигровой магазин и таблица лидеров",
      "GamePush, реклама и SDK-интеграции для браузерных площадок"
    ],
    en: [
      "Difficulty grids from 2×2 to 6×6 with progressive picture unlocking",
      "Fragment dragging with mouse and touch-screen controls",
      "Seasonal themes, an in-game store and leaderboards",
      "GamePush, advertising and SDK integrations for browser platforms"
    ]
  },
  stack: ["Construct 3", "HTML5", "GamePush", "SDK Adapters", "In-Game Store", "Ads"],
  links: [
    {
      label: { ru: "Статья о создании игры", en: "Game development article" },
      url: "https://vk.ru/@-224400042-nikogda-ne-lubil-pazly-a-potom-sam-sdelal-igru-pro-nih"
    },
    {
      label: { ru: "Играть на Пикабу Игры", en: "Play on Pikabu Games" },
      url: "https://games.pikabu.ru/game/kvadropazl"
    },
    {
      label: { ru: "Играть на Woman.ru", en: "Play on Woman.ru" },
      url: "https://games.woman.ru/game/kvadropazl/"
    },
    {
      label: { ru: "Играть на Играмбе", en: "Play on Igramba" },
      url: "https://www.igramba.ru/kazualnye/kvadropazl/"
    }
  ]
},
  {
    "id": "neon-plus",
    "title": {
      "ru": "Неон Плюс",
      "en": "Neon Plus"
    },
    "category": "html5",
    "type": {
      "ru": "Неоновый аркадный шутер",
      "en": "Neon arcade shooter"
    },
    "status": "released",
    "statusLabel": {
      "ru": "Опубликовано",
      "en": "Released"
    },
    "featured": true,
    "accent": "cyan",
    "cover": "assets/projects/neon-plus.webp",
    "short": {
      "ru": "Неоновый HTML5-шутер в духе аркад 80-х: игрок управляет звездолётом с автоматической стрельбой, переключает цветовые режимы и проходит 20 уровней с боссами.",
      "en": "A neon HTML5 shooter inspired by 1980s arcades: players pilot an auto-firing spaceship, switch between color modes and clear 20 levels with bosses."
    },
    "details": {
      "ru": "Игра создана за три дня для GP Profit Jam #2 feat Pikabu. Игрок уклоняется от врагов, снарядов и препятствий, открывает корабли с разным оружием, собирает временные усиления и восстановление, а результаты сравнивает в таблице лидеров.",
      "en": "The game was created in three days for GP Profit Jam #2 feat Pikabu. Players dodge enemies, projectiles and obstacles, unlock ships with different weapons, collect temporary boosts and recovery items, and compare results on the leaderboard."
    },
    "solutions": {
      "ru": [
        "Простое перемещение звездолёта при автоматической стрельбе",
        "Три цветовых режима для опыта, рекордных очков и бонусов",
        "Прогрессия через 20 уровней, волны врагов, боссов и новые корабли",
        "Временные усиления, восстановление, увеличение урона и таблица лидеров"
      ],
      "en": [
        "Simple spaceship movement paired with automatic firing",
        "Three color modes for experience, high-score points and bonuses",
        "Progression across 20 levels, enemy waves, bosses and new ships",
        "Temporary boosts, recovery, increased damage and a leaderboard"
      ]
    },
    "stack": [
      "Construct 3",
      "HTML5",
      "Rapid Prototyping",
      "Arcade Balance",
      "Leaderboards"
    ],
    "links": [
      {
        "label": {
          "ru": "Играть на Пикабу Игры",
          "en": "Play on Pikabu Games"
        },
        "url": "https://games.pikabu.ru/game/neon-plyus"
      },
      {
        "label": {
          "ru": "Страница игры на itch.io",
          "en": "Game page on itch.io"
        },
        "url": "https://darlesgames.itch.io/neonplus"
      }
    ]
  },
  {
    id: "winter-puzzle",
    title: { ru: "WinterPuzzle", en: "WinterPuzzle" },
    category: "html5",
    type: { ru: "Казуальная головоломка", en: "Casual puzzle" },
    status: "released",
    statusLabel: { ru: "Опубликовано", en: "Released" },
    featured: false,
    accent: "blue",
    cover: "",
    short: {
      ru: "Казуальная браузерная головоломка с зимней тематикой и короткими игровыми сессиями.",
      en: "A casual winter-themed browser puzzle designed for short play sessions."
    },
    details: {
      ru: "Компактная игра, рассчитанная на быстрый вход и понятную цель без длительного обучения.",
      en: "A compact game designed around immediate onboarding and a clear objective without lengthy tutorials."
    },
    solutions: {
      ru: ["Короткая сессия", "Понятные правила", "Браузерная адаптация"],
      en: ["Short sessions", "Clear rules", "Browser adaptation"]
    },
    stack: ["Construct 3", "HTML5", "Casual UX"],
    links: []
  },
  {
    id: "skok-otskok",
    title: { ru: "Скок-Отскок", en: "Skok-Otskok" },
    category: "html5",
    type: { ru: "Гиперказуальная аркада", en: "Hypercasual arcade" },
    status: "released",
    statusLabel: { ru: "Опубликовано", en: "Released" },
    featured: false,
    accent: "orange",
    cover: "assets/projects/skok-otskok.webp",
    short: {
      ru: "Гиперказуальная HTML5-аркада на реакцию: игрок отбивает котошар треугольной платформой, собирает золото и сражается с мемными боссами.",
      en: "A reaction-based hypercasual HTML5 arcade game where players bounce a cat-ball with a triangular platform, collect gold and fight meme bosses."
    },
    details: {
      ru: "Игра создана как проверка подростковых трендов и использует образы Italian Brainrot — от Тралалеро Тралала до Чёрного Короля. В проекте реализованы таблицы лидеров, реклама, встроенные покупки, GamePush и SDK-адаптеры для разных браузерных площадок.",
      en: "Created as a test of teen trends, the game uses Italian Brainrot characters ranging from Tralalero Tralala to the Black King. It includes leaderboards, advertising, in-app purchases, GamePush and SDK adapters for different browser platforms."
    },
    solutions: {
      ru: [
        "Реактивная механика отскока котошара от треугольной платформы",
        "Трендовые боссы и сбор золота внутри короткого игрового цикла",
        "Таблицы лидеров, реклама и встроенные покупки",
        "SDK-адаптеры для публикации на разных браузерных площадках"
      ],
      en: [
        "A reaction mechanic built around bouncing a cat-ball from a triangular platform",
        "Trending bosses and gold collection within a short gameplay loop",
        "Leaderboards, advertising and in-app purchases",
        "SDK adapters for publishing across different browser platforms"
      ]
    },
    stack: ["Construct 3", "HTML5", "GamePush", "SDK Adapters", "Leaderboards", "In-App Purchases"],
    links: [
      {
        label: { ru: "Играть во ВКонтакте", en: "Play on VK" },
        url: "https://vk.ru/app54316028"
      },
      {
        label: { ru: "Играть на Играмбе", en: "Play on Igramba" },
        url: "https://www.igramba.ru/kazualnye/skok-otskok/"
      },
      {
        label: { ru: "Играть на АиФ Игры", en: "Play on AIF Games" },
        url: "https://games.aif.ru/kazualnye/skok-otskok/"
      },
      {
        label: { ru: "Играть на Пикабу Игры", en: "Play on Pikabu Games" },
        url: "https://games.pikabu.ru/game/skokotskok"
      },
      {
        label: { ru: "Играть на Woman.ru", en: "Play on Woman.ru" },
        url: "https://games.woman.ru/game/skok-otskok/"
      },
      {
        label: { ru: "Играть в Одноклассниках", en: "Play on Odnoklassniki" },
        url: "https://ok.ru/game/vk_app54316028"
      }
    ]
  },
  {
    id: "skylink",
    title: { ru: "СкайЛинк", en: "SkyLink" },
    category: "html5",
    type: { ru: "Веб-игра", en: "Web game" },
    status: "released",
    statusLabel: { ru: "Опубликовано", en: "Released" },
    featured: false,
    accent: "violet",
    cover: "",
    short: {
      ru: "Опубликованная веб-игра Darles Games с адаптацией под браузерные игровые платформы.",
      en: "A released Darles Games web game adapted for browser gaming platforms."
    },
    details: {
      ru: "Проект входит в линейку самостоятельных HTML5-релизов студии и показывает полный цикл разработки и публикации.",
      en: "Part of the studio's independent HTML5 release line, demonstrating the full development and publishing cycle."
    },
    solutions: {
      ru: ["Полный цикл соло-разработки", "Платформенная публикация", "Поддержка браузерного формата"],
      en: ["Complete solo development cycle", "Platform publishing", "Browser format support"]
    },
    stack: ["Construct 3", "HTML5", "Platform Publishing"],
    links: []
  },
  {
  id: "snitch-catchers",
  title: {
    ru: "Ловцы снитчей",
    en: "Snitch Catchers"
  },
  category: "html5",
  type: {
    ru: "Аркадный раннер",
    en: "Arcade runner"
  },
  status: "released",
  statusLabel: {
    ru: "Опубликовано",
    en: "Released"
  },
  featured: false,
  accent: "gold",
  cover: "assets/projects/snitch-catchers.webp",
  short: {
    ru: "Динамичный HTML5-раннер о ночной погоне: игрок пролетает через кольца, ускоряется, избегает препятствий и ловит ускользающие снитчи.",
    en: "A fast-paced HTML5 runner built around a night-time chase: players fly through rings, gain speed, dodge obstacles and catch escaping snitches."
  },
  details: {
    ru: "Точные попадания в кольца сокращают дистанцию до цели, а промахи позволяют ей уйти. После сближения начинается финальный этап удержания контакта. Новые персонажи, магазин, очки и лидерборды поддерживают повторные погони, а GamePush и SDK-интеграции обеспечивают платформенные сервисы и рекламную монетизацию.",
    en: "Accurate ring passes close the distance to the target, while misses allow it to escape. Catching up starts a final contact-hold phase. Unlockable characters, a store, scores and leaderboards support repeated chases, while GamePush and platform SDK integrations provide platform services and advertising monetization."
  },
  solutions: {
    ru: [
      "Кольца как система ускорения и управления дистанцией до цели",
      "Финальная фаза удержания контакта после успешной погони",
      "Управление мышью и касанием при нарастающей скорости",
      "Персонажи, магазин, лидерборды, реклама и SDK-интеграции"
    ],
    en: [
      "Rings used as a speed and target-distance system",
      "A final contact-hold phase after a successful chase",
      "Mouse and touch controls under steadily increasing speed",
      "Characters, a store, leaderboards, advertising and SDK integrations"
    ]
  },
  stack: [
    "Construct 3",
    "HTML5",
    "GamePush",
    "Platform SDKs",
    "In-Game Store",
    "Ads"
  ],
  links: [
    {
      label: {
        ru: "Играть на Пикабу Игры",
        en: "Play on Pikabu Games"
      },
      url: "https://games.pikabu.ru/game/lovtsyi-snitchey"
    },
    {
      label: {
        ru: "Играть на Играмбе",
        en: "Play on Igramba"
      },
      url: "https://www.igramba.ru/kazualnye/lovtsy-snitchej/"
    },
    {
      label: {
        ru: "Играть на Woman.ru",
        en: "Play on Woman.ru"
      },
      url: "https://games.woman.ru/game/lovtsy-snitchej/"
    }
  ]
},
  {
    id: "astro",
    title: { ru: "Astro", en: "Astro" },
    category: "html5",
    type: { ru: "Аркадный шутер", en: "Arcade shooter" },
    status: "development",
    statusLabel: { ru: "В разработке", en: "In development" },
    featured: true,
    accent: "space",
    cover: "",
    short: {
      ru: "Космический HTML5-шутер с бесконечной прогрессией, боссами, кораблями, валютой и платформенными сервисами.",
      en: "A space HTML5 shooter with endless progression, bosses, ships, currency and platform services."
    },
    details: {
      ru: "Аркадная игра, вдохновлённая Galaxian и Galaga. Система включает прочность корабля, девять типов боссов, разные виды оружия, выбор кораблей и адаптацию под игровые платформы.",
      en: "An arcade game inspired by Galaxian and Galaga. Its systems include ship durability, nine boss types, multiple weapons, ship selection and adaptation for gaming platforms."
    },
    solutions: {
      ru: [
        "Управляемая сложность первых уровней и рост динамики",
        "Корректная пауза до, во время и после рекламы",
        "Адаптивный интерфейс и тестирование разных устройств"
      ],
      en: [
        "Controlled early-level difficulty with increasing intensity",
        "Reliable pause behavior before, during and after advertising",
        "Adaptive interface and testing across different devices"
      ]
    },
    stack: ["HTML5", "CSS", "JavaScript", "Yandex SDK", "Ads", "Leaderboards"],
    links: []
  },
  {
    id: "yandex-template",
    title: { ru: "Шаблон HTML5-игры для платформ", en: "HTML5 Game Platform Template" },
    category: "case",
    type: { ru: "Техническое решение", en: "Technical solution" },
    status: "internal",
    statusLabel: { ru: "Внутреннее решение", en: "Internal solution" },
    featured: true,
    accent: "green",
    cover: "",
    short: {
      ru: "Переиспользуемая основа для портретных браузерных игр с SDK, рекламой, сохранениями и локальным fallback-режимом.",
      en: "A reusable foundation for portrait browser games with platform SDK, advertising, saves and a local fallback mode."
    },
    details: {
      ru: "Шаблон сокращает повторную техническую работу при выпуске новых игр. В него вынесены инициализация платформы, пауза, звук, реклама, облачные и локальные сохранения, лидерборды и адаптивный UI.",
      en: "The template reduces repeated technical work when releasing new games. It centralizes platform initialization, pause behavior, audio, advertising, cloud and local saves, leaderboards and adaptive UI."
    },
    solutions: {
      ru: [
        "Единый SDK-адаптер и работа без платформы",
        "Предсказуемые сценарии паузы и рекламы",
        "Повторное использование между новыми HTML5-проектами"
      ],
      en: [
        "A unified SDK adapter with an offline/local mode",
        "Predictable pause and advertising scenarios",
        "Reuse across new HTML5 projects"
      ]
    },
    stack: ["HTML5", "CSS", "JavaScript", "Vite", "SDK Adapter", "Git"],
    links: []
  }
];
