const ph = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=200&q=80`

export const testimonials = [
  {
    quote: {
      uk: 'Будували нам будинок під Малагою майже рік. Пару разів зміщували строки через погоду, але попереджали заздалегідь — і в кошторис уклались, що для мене було головним.',
      en: 'They built our house near Málaga for almost a year. Twice the timeline shifted because of weather, but they warned us in advance — and they stayed within budget, which mattered most to me.',
      ru: 'Строили нам дом под Малагой почти год. Пару раз сдвигали сроки из-за погоды, но предупреждали заранее — и в смету уложились, что для меня было главным.',
    },
    name: { uk: 'Олена Кравець', en: 'Olena Kravets', ru: 'Елена Кравец' },
    role: { uk: 'Будинок, Марбелья', en: 'House, Marbella', ru: 'Дом, Марбелья' },
    photo: ph('1544005313-94ddf0286df2'),
  },
  {
    quote: {
      uk: 'Найбільше зайшло, що щопонеділка приходив звіт із фото з обʼєкта. Я бачив, на що йдуть гроші, і не мусив дзвонити прорабу щодня.',
      en: 'What I liked most was the Monday report with photos from the site. I could see where the money went and didn’t have to call the foreman every day.',
      ru: 'Больше всего понравилось, что каждый понедельник приходил отчёт с фото с объекта. Я видел, на что идут деньги, и не должен был звонить прорабу каждый день.',
    },
    name: { uk: 'Андрій Мельник', en: 'Andrii Melnyk', ru: 'Андрей Мельник' },
    role: { uk: 'Офіс компанії, Мадрид', en: 'Company office, Madrid', ru: 'Офис компании, Мадрид' },
    photo: ph('1507003211169-0a1dd7228f2d'),
  },
  {
    quote: {
      uk: 'З підрядниками працюю давно, є з чим порівняти. Тут хоча б не довелось нічого переробляти за ними, а дрібні питання вирішували на місці.',
      en: 'I’ve worked with contractors for years, so I have something to compare to. At least here I didn’t have to redo anything after them, and small issues were solved on the spot.',
      ru: 'С подрядчиками работаю давно, есть с чем сравнить. Тут хотя бы не пришлось ничего переделывать за ними, а мелкие вопросы решали на месте.',
    },
    name: { uk: 'Ірина Гордієнко', en: 'Iryna Hordiienko', ru: 'Ирина Гордиенко' },
    role: { uk: 'Девелопер', en: 'Developer', ru: 'Девелопер' },
    photo: ph('1438761681033-6461ffad8d80'),
  },
  {
    quote: {
      uk: 'Ми з чоловіком живемо в Британії, обʼєкт вели віддалено. Спершу нервувала через відстань, але відеодзвінки з обʼєкта раз на два тижні зняли це питання.',
      en: 'My husband and I live in the UK and managed the project remotely. I was nervous about the distance at first, but biweekly video calls from the site sorted that out.',
      ru: 'Мы с мужем живём в Британии, вели объект удалённо. Сначала переживала из-за расстояния, но видеозвонки с объекта раз в две недели сняли этот вопрос.',
    },
    name: { uk: 'Кетрін Мур', en: 'Kathryn Moore', ru: 'Кэтрин Мур' },
    role: { uk: 'Вілла, Коста-дель-Соль', en: 'Villa, Costa del Sol', ru: 'Вилла, Коста-дель-Соль' },
    photo: ph('1499996860823-5214fcc65f8f'),
  },
  {
    quote: {
      uk: 'Ремонт квартири зайняв три місяці, як і планували спочатку. Єдине — дизайнер наполягала на дорожчій плитці у ванній, і вона таки мала рацію.',
      en: 'The flat renovation took three months, exactly as planned from the start. The one thing: the designer pushed for pricier bathroom tile, and she was right to.',
      ru: 'Ремонт квартиры занял три месяца, как и планировали изначально. Единственное — дизайнер настаивала на более дорогой плитке в ванной, и оказалась права.',
    },
    name: { uk: 'Марко Россі', en: 'Marco Rossi', ru: 'Марко Росси' },
    role: { uk: 'Квартира, Малага', en: 'Apartment, Málaga', ru: 'Квартира, Малага' },
    photo: ph('1500648767791-00dcc994a43e'),
  },
  {
    quote: {
      uk: 'Комплектацію меблів робили самі — привезли й розставили все за графіком, нічого не переплутали з розмірами. Для орендованого шоуруму це було критично.',
      en: 'They handled the furniture procurement themselves — delivered and placed everything on schedule, no size mix-ups. For a leased showroom, that timing mattered a lot.',
      ru: 'Комплектацию мебели делали сами — привезли и расставили всё по графику, ни разу не ошиблись с размерами. Для арендованного шоурума это было критично.',
    },
    name: { uk: 'Наталія Орлова', en: 'Nataliia Orlova', ru: 'Наталья Орлова' },
    role: { uk: 'Шоурум, Мадрид', en: 'Showroom, Madrid', ru: 'Шоурум, Мадрид' },
    photo: ph('1489424731084-a5d8b219a5bb'),
  },
  {
    quote: {
      uk: 'Технагляд найняла окремо, бо будівельників уже мала своїх. Хлопці приїжджали раз на тиждень, знайшли проблему з гідроізоляцією ще до того, як залили стяжку.',
      en: 'I hired supervision separately since I already had my own builders. They came weekly and caught a waterproofing issue before the screed was even poured.',
      ru: 'Технадзор наняла отдельно, строители у меня были уже свои. Ребята приезжали раз в неделю, нашли проблему с гидроизоляцией ещё до заливки стяжки.',
    },
    name: { uk: 'Софі Беннет', en: 'Sophie Bennett', ru: 'Софи Беннетт' },
    role: { uk: 'Будинок, Марбелья', en: 'House, Marbella', ru: 'Дом, Марбелья' },
    photo: ph('1487412720507-e7ab37603c6f'),
  },
  {
    quote: {
      uk: 'Ресторан відкрили за пів року до туристичного сезону, як і хотіли. Світло робили за окремим сценарієм, і це справді відчутно на вечірніх фото гостей.',
      en: 'We opened the restaurant six months ahead of the tourist season, as planned. The lighting was done as its own scenario, and it really shows in guests’ evening photos.',
      ru: 'Ресторан открыли за полгода до туристического сезона, как и хотели. Свет делали по отдельному сценарию, и это правда заметно на вечерних фото гостей.',
    },
    name: { uk: 'Хав\u2019єр Муньйос', en: 'Javier Muñoz', ru: 'Хавьер Муньос' },
    role: { uk: 'Ресторан, Малага', en: 'Restaurant, Málaga', ru: 'Ресторан, Малага' },
    photo: ph('1472099645785-5658abf4ff4e'),
  },
  {
    quote: {
      uk: 'Клініку здавали двома чергами, щоб перша половина вже приймала пацієнтів, поки добудовували другу. Незручно для будівельників, зате ми не втратили жодного місяця роботи.',
      en: 'We handed the clinic over in two phases so the first half was already seeing patients while the second was finished. Awkward for the crew, but we didn’t lose a single month of work.',
      ru: 'Клинику сдавали двумя очередями, чтобы первая половина уже принимала пациентов, пока достраивали вторую. Неудобно для строителей, зато мы не потеряли ни месяца работы.',
    },
    name: { uk: 'Олег Приходько', en: 'Oleh Prykhodko', ru: 'Олег Приходько' },
    role: { uk: 'Клініка, Валенсія', en: 'Clinic, Valencia', ru: 'Клиника, Валенсия' },
    photo: ph('1472099645785-5658abf4ff4e'),
  },
  {
    quote: {
      uk: 'Найбільше боялась доплат «по факту» — начиталась історій знайомих. Кошторис жодного разу не зʼїхав, окрім однієї моєї власної забаганки з підлоговим опаленням.',
      en: 'What I feared most was “surprise” add-on charges — I’d heard stories from friends. The estimate never moved, except for one whim of mine: underfloor heating.',
      ru: 'Больше всего боялась доплат «по факту» — начиталась историй от знакомых. Смета ни разу не съехала, кроме одной моей собственной прихоти с тёплым полом.',
    },
    name: { uk: 'Даяна Кларк', en: 'Diana Clarke', ru: 'Диана Кларк' },
    role: { uk: 'Апартаменти, Малага', en: 'Apartment, Málaga', ru: 'Апартаменты, Малага' },
    photo: ph('1524504388940-b1c1722653e1'),
  },
  {
    quote: {
      uk: 'Офіс на 40 людей робили за три місяці, поки ми ще сиділи в старому приміщенні. Переїхали за вихідні, у понеділок команда вже працювала на новому місці.',
      en: 'They built our 40-seat office in three months while we were still in the old space. We moved over a weekend, and the team was working from the new office by Monday.',
      ru: 'Офис на 40 человек делали за три месяца, пока мы ещё сидели в старом помещении. Переехали за выходные, в понедельник команда уже работала на новом месте.',
    },
    name: { uk: 'Раян Фостер', en: 'Ryan Foster', ru: 'Райан Фостер' },
    role: { uk: 'Офіс, Барселона', en: 'Office, Barcelona', ru: 'Офис, Барселона' },
    photo: ph('1519085360753-af0119f7cbe7'),
  },
  {
    quote: {
      uk: 'Оновлювали фасад і покрівлю на старому будинку в центрі — з такими обʼєктами завжди ризик знайти щось несподіване всередині стін. Знайшли, попередили, порахували окремо, а не мовчки включили в рахунок.',
      en: 'We redid the facade and roof on an old building downtown — with buildings like that there’s always a risk of finding something unexpected inside the walls. They found it, told us, and quoted it separately instead of quietly folding it into the bill.',
      ru: 'Обновляли фасад и кровлю на старом доме в центре — с такими объектами всегда риск найти что-то неожиданное внутри стен. Нашли, предупредили, посчитали отдельно, а не молча включили в счёт.',
    },
    name: { uk: 'Всеволод Іщенко', en: 'Vsevolod Ishchenko', ru: 'Всеволод Ищенко' },
    role: { uk: 'Реконструкція, Севілья', en: 'Renovation, Seville', ru: 'Реконструкция, Севилья' },
    photo: ph('1502685104226-ee32379fefbe'),
  },
]
