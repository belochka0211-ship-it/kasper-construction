export const services = [
  {
    slug: 'project-management',
    priceFrom: { uk: 'від 4% вартості обʼєкта', en: 'from 4% of project cost', ru: 'от 4% стоимости объекта' },
    title: { uk: 'Управління проєктом', en: 'Project management', ru: 'Управление проектом' },
    excerpt: {
      uk: 'Повний контроль строків, бюджету та якості на кожному етапі будівництва.',
      en: 'Full control of timeline, budget and quality at every stage of the build.',
      ru: 'Полный контроль сроков, бюджета и качества на каждом этапе строительства.',
    },
    image: '/img/office-principal.jpg',
    intro: {
      uk: 'Беремо на себе всю координацію обʼєкта: від тендеру підрядників до здачі в експлуатацію. Ви отримуєте один центр відповідальності та прозору звітність.',
      en: 'We take on all the coordination — from tendering contractors to handover. You get one point of responsibility and clear reporting.',
      ru: 'Берём на себя всю координацию объекта: от тендера подрядчиков до сдачи в эксплуатацию. Вы получаете один центр ответственности и прозрачную отчётность.',
    },
    deliverables: [
      { uk: 'Календарно-сітьовий графік робіт', en: 'Detailed work schedule', ru: 'Календарно-сетевой график работ' },
      { uk: 'Бюджет із контролем відхилень', en: 'Budget with variance tracking', ru: 'Бюджет с контролем отклонений' },
      { uk: 'Тендер та відбір підрядників', en: 'Contractor tender and selection', ru: 'Тендер и отбор подрядчиков' },
      { uk: 'Щотижневі звіти зі статусом', en: 'Weekly status reports', ru: 'Еженедельные отчёты о статусе' },
    ],
    process: [
      { step: { uk: 'Аудит', en: 'Audit', ru: 'Аудит' }, text: { uk: 'Аналіз проєкту, ризиків і вхідних умов.', en: 'Review of the project, risks and constraints.', ru: 'Анализ проекта, рисков и исходных условий.' } },
      { step: { uk: 'План', en: 'Plan', ru: 'План' }, text: { uk: 'Бюджет, графік, команда та KPI.', en: 'Budget, schedule, team and KPIs.', ru: 'Бюджет, график, команда и KPI.' } },
      { step: { uk: 'Контроль', en: 'Control', ru: 'Контроль' }, text: { uk: 'Координація підрядників і якості щодня.', en: 'Daily coordination of contractors and quality.', ru: 'Координация подрядчиков и качества ежедневно.' } },
      { step: { uk: 'Здача', en: 'Handover', ru: 'Сдача' }, text: { uk: 'Передача обʼєкта та документації.', en: 'Handover of the site and documentation.', ru: 'Передача объекта и документации.' } },
    ],
  },
  {
    slug: 'turnkey-construction',
    priceFrom: { uk: 'від $600/мІ', en: 'from $600/m²', ru: 'от $600/м²' },
    title: { uk: 'Будівництво під ключ', en: 'Turnkey construction', ru: 'Строительство под ключ' },
    excerpt: {
      uk: 'Комплексні роботи: від нульового циклу до фінішного оздоблення.',
      en: 'The whole job: from groundworks to final finishes.',
      ru: 'Комплексные работы: от нулевого цикла до финишной отделки.',
    },
    image: '/img/hero-build.jpg',
    intro: {
      uk: 'Виконуємо повний цикл будівельних робіт власними бригадами та перевіреними підрядниками — з фіксованою кошторисною вартістю.',
      en: 'We do the full cycle with our own crews and trusted contractors — at a fixed, agreed cost.',
      ru: 'Выполняем полный цикл строительных работ собственными бригадами и проверенными подрядчиками — с фиксированной сметной стоимостью.',
    },
    deliverables: [
      { uk: 'Нульовий цикл і конструктив', en: 'Groundworks and structure', ru: 'Нулевой цикл и конструктив' },
      { uk: 'Фасадні та покрівельні роботи', en: 'Facade and roofing', ru: 'Фасадные и кровельные работы' },
      { uk: 'Чорнове та фінішне оздоблення', en: 'Rough and final finishing', ru: 'Черновая и финишная отделка' },
      { uk: 'Гарантія 5 років', en: '5-year warranty', ru: 'Гарантия 5 лет' },
    ],
    process: [
      { step: { uk: 'Кошторис', en: 'Estimate', ru: 'Смета' }, text: { uk: 'Фіксована вартість і специфікації.', en: 'Fixed price and specifications.', ru: 'Фиксированная стоимость и спецификации.' } },
      { step: { uk: 'Будівництво', en: 'Build', ru: 'Строительство' }, text: { uk: 'Поетапне виконання за графіком.', en: 'Stage-by-stage work on schedule.', ru: 'Поэтапное выполнение по графику.' } },
      { step: { uk: 'Контроль', en: 'Control', ru: 'Контроль' }, text: { uk: 'Технагляд і приймання робіт.', en: 'Supervision and acceptance of works.', ru: 'Технадзор и приёмка работ.' } },
      { step: { uk: 'Гарантія', en: 'Warranty', ru: 'Гарантия' }, text: { uk: 'Сервіс і супровід після здачі.', en: 'Service and support after handover.', ru: 'Сервис и сопровождение после сдачи.' } },
    ],
  },
  {
    slug: 'interior-design',
    priceFrom: { uk: 'від $45/мІ', en: 'from $45/m²', ru: 'от $45/м²' },
    title: { uk: 'Дизайн інтерʼєру', en: 'Interior design', ru: 'Дизайн интерьера' },
    excerpt: {
      uk: 'Авторські інтерʼєри, що поєднують естетику, функцію та інженерію.',
      en: 'Bespoke interiors that balance looks, function and engineering.',
      ru: 'Авторские интерьеры, объединяющие эстетику, функцию и инженерию.',
    },
    image: '/img/int-2.jpg',
    intro: {
      uk: 'Створюємо інтерʼєри, які виглядають бездоганно й залишаються зручними у щоденному житті. Повний пакет робочої документації.',
      en: 'We design interiors that look sharp and stay liveable day to day. Full set of working drawings included.',
      ru: 'Создаём интерьеры, которые выглядят безупречно и остаются удобными в повседневной жизни. Полный пакет рабочей документации.',
    },
    deliverables: [
      { uk: 'Планувальні рішення', en: 'Space planning', ru: 'Планировочные решения' },
      { uk: '3D-візуалізації', en: '3D visualisations', ru: '3D-визуализации' },
      { uk: 'Робоча документація', en: 'Working documentation', ru: 'Рабочая документация' },
      { uk: 'Авторський нагляд', en: 'Designer supervision', ru: 'Авторский надзор' },
    ],
    process: [
      { step: { uk: 'Бриф', en: 'Brief', ru: 'Бриф' }, text: { uk: 'Стиль життя, референси, бюджет.', en: 'Lifestyle, references, budget.', ru: 'Стиль жизни, референсы, бюджет.' } },
      { step: { uk: 'Концепт', en: 'Concept', ru: 'Концепт' }, text: { uk: 'Планування та візуалізації.', en: 'Layouts and visualisations.', ru: 'Планировка и визуализации.' } },
      { step: { uk: 'Документація', en: 'Drawings', ru: 'Документация' }, text: { uk: 'Креслення та специфікації.', en: 'Drawings and specifications.', ru: 'Чертежи и спецификации.' } },
      { step: { uk: 'Реалізація', en: 'Delivery', ru: 'Реализация' }, text: { uk: 'Авторський нагляд на обʼєкті.', en: 'Designer supervision on site.', ru: 'Авторский надзор на объекте.' } },
    ],
  },
  {
    slug: 'engineering',
    priceFrom: { uk: 'за проєктом', en: 'project-based', ru: 'по проекту' },
    title: { uk: 'Інженерні рішення', en: 'Engineering systems', ru: 'Инженерные решения' },
    excerpt: {
      uk: 'Проєктування та монтаж усіх інженерних систем обʼєкта.',
      en: 'Design and installation of all building systems.',
      ru: 'Проектирование и монтаж всех инженерных систем объекта.',
    },
    image: '/img/com-office1.jpg',
    intro: {
      uk: 'Опалення, вентиляція, кондиціювання, електрика та «розумний дім» — проєктуємо й монтуємо системи, що працюють тихо й надійно.',
      en: 'Heating, ventilation, AC, electrics and smart-home — we design and install systems that run quietly and reliably.',
      ru: 'Отопление, вентиляция, кондиционирование, электрика и «умный дом» — проектируем и монтируем системы, которые работают тихо и надёжно.',
    },
    deliverables: [
      { uk: 'Проєкт ОВК та електрики', en: 'HVAC and electrical design', ru: 'Проект ОВК и электрики' },
      { uk: 'Системи водопостачання', en: 'Plumbing systems', ru: 'Системы водоснабжения' },
      { uk: 'Автоматизація та smart-home', en: 'Automation and smart-home', ru: 'Автоматизация и smart-home' },
      { uk: 'Пусконалагодження', en: 'Commissioning', ru: 'Пусконаладка' },
    ],
    process: [
      { step: { uk: 'Розрахунок', en: 'Sizing', ru: 'Расчёт' }, text: { uk: 'Навантаження та підбір обладнання.', en: 'Loads and equipment selection.', ru: 'Нагрузки и подбор оборудования.' } },
      { step: { uk: 'Проєкт', en: 'Design', ru: 'Проект' }, text: { uk: 'Схеми, специфікації, узгодження.', en: 'Schematics, specs, approvals.', ru: 'Схемы, спецификации, согласования.' } },
      { step: { uk: 'Монтаж', en: 'Install', ru: 'Монтаж' }, text: { uk: 'Прокладання та збирання систем.', en: 'Routing and assembly of systems.', ru: 'Прокладка и сборка систем.' } },
      { step: { uk: 'Запуск', en: 'Start-up', ru: 'Запуск' }, text: { uk: 'Налагодження та інструктаж.', en: 'Tuning and handover briefing.', ru: 'Наладка и инструктаж.' } },
    ],
  },
  {
    slug: 'supervision',
    priceFrom: { uk: 'від 3% кошторису', en: 'from 3% of estimate', ru: 'от 3% сметы' },
    title: { uk: 'Технічний нагляд', en: 'Technical supervision', ru: 'Технический надзор' },
    excerpt: {
      uk: 'Незалежний контроль підрядників, матеріалів і відповідності проєкту.',
      en: 'Independent checks on contractors, materials and compliance.',
      ru: 'Независимый контроль подрядчиков, материалов и соответствия проекту.',
    },
    image: '/img/hero-house.jpg',
    intro: {
      uk: 'Захищаємо ваш бюджет: перевіряємо обсяги, якість матеріалів і робіт, фіксуємо порушення та контролюємо їх усунення.',
      en: 'We protect your budget: checking quantities, material and workmanship quality, logging issues and tracking fixes.',
      ru: 'Защищаем ваш бюджет: проверяем объёмы, качество материалов и работ, фиксируем нарушения и контролируем их устранение.',
    },
    deliverables: [
      { uk: 'Перевірка обсягів і актів', en: 'Quantity and invoice checks', ru: 'Проверка объёмов и актов' },
      { uk: 'Контроль якості матеріалів', en: 'Material quality control', ru: 'Контроль качества материалов' },
      { uk: 'Фотофіксація етапів', en: 'Photo records of each stage', ru: 'Фотофиксация этапов' },
      { uk: 'Незалежні висновки', en: 'Independent reports', ru: 'Независимые заключения' },
    ],
    process: [
      { step: { uk: 'Старт', en: 'Start', ru: 'Старт' }, text: { uk: 'Вивчення проєкту та кошторису.', en: 'Reviewing the design and estimate.', ru: 'Изучение проекта и сметы.' } },
      { step: { uk: 'Інспекції', en: 'Inspections', ru: 'Инспекции' }, text: { uk: 'Регулярні виїзди на обʼєкт.', en: 'Regular site visits.', ru: 'Регулярные выезды на объект.' } },
      { step: { uk: 'Звіти', en: 'Reports', ru: 'Отчёты' }, text: { uk: 'Зауваження та статус усунення.', en: 'Issues and status of fixes.', ru: 'Замечания и статус устранения.' } },
      { step: { uk: 'Приймання', en: 'Acceptance', ru: 'Приёмка' }, text: { uk: 'Контроль фінальної здачі.', en: 'Final acceptance control.', ru: 'Контроль финальной сдачи.' } },
    ],
  },
  {
    slug: 'furniture',
    priceFrom: { uk: 'за специфікацією', en: 'by specification', ru: 'по спецификации' },
    title: { uk: 'Виробництво меблів', en: 'Custom furniture', ru: 'Производство мебели' },
    excerpt: {
      uk: 'Власне виробництво корпусних та мʼяких меблів на замовлення.',
      en: 'Our own workshop for cabinetry and upholstered furniture.',
      ru: 'Собственное производство корпусной и мягкой мебели на заказ.',
    },
    image: '/img/int-4.jpg',
    intro: {
      uk: 'Виготовляємо меблі за індивідуальними кресленнями на власному виробництві — точно за дизайн-проєктом і в строк.',
      en: 'We make furniture to custom drawings in our own workshop — exactly to the design and on time.',
      ru: 'Изготавливаем мебель по индивидуальным чертежам на собственном производстве — точно по дизайн-проекту и в срок.',
    },
    deliverables: [
      { uk: 'Корпусні меблі на замовлення', en: 'Bespoke cabinetry', ru: 'Корпусная мебель на заказ' },
      { uk: 'Мʼякі меблі', en: 'Upholstered furniture', ru: 'Мягкая мебель' },
      { uk: 'Столярні вироби та шпон', en: 'Joinery and veneer work', ru: 'Столярные изделия и шпон' },
      { uk: 'Доставка та монтаж', en: 'Delivery and installation', ru: 'Доставка и монтаж' },
    ],
    process: [
      { step: { uk: 'Креслення', en: 'Drawings', ru: 'Чертежи' }, text: { uk: 'Деталювання під обʼєкт.', en: 'Detailing for the specific space.', ru: 'Деталировка под объект.' } },
      { step: { uk: 'Виробництво', en: 'Production', ru: 'Производство' }, text: { uk: 'Власний цех і контроль якості.', en: 'In-house workshop and QC.', ru: 'Собственный цех и контроль качества.' } },
      { step: { uk: 'Збірка', en: 'Assembly', ru: 'Сборка' }, text: { uk: 'Монтаж на обʼєкті.', en: 'On-site installation.', ru: 'Монтаж на объекте.' } },
      { step: { uk: 'Сервіс', en: 'Service', ru: 'Сервис' }, text: { uk: 'Гарантія та обслуговування.', en: 'Warranty and servicing.', ru: 'Гарантия и обслуживание.' } },
    ],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
