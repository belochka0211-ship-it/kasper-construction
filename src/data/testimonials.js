const ph = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=200&q=80`

export const testimonials = [
  {
    quote: {
      uk: 'Будували нам будинок під Києвом майже рік. Пару разів зміщували строки через погоду, але попереджали заздалегідь — і в кошторис уклались, що для мене було головним.',
      en: 'They built our house near Málaga for almost a year. Twice the timeline shifted because of weather, but they warned us in advance — and they stayed within budget, which mattered most to me.',
      ru: 'Строили нам дом под Киевом почти год. Пару раз сдвигали сроки из-за погоды, но предупреждали заранее — и в смету уложились, что для меня было главным.',
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
]
