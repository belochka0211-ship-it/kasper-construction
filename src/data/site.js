// Translatable strings are { uk, en, ru } leaves resolved via useLocale().loc().
// Plain values (slugs, phone, images, numbers) stay as-is.

export const brand = {
  name: 'The Wall Building',
  since: 2012,
}

export const nav = [
  { to: '/about', key: 'about' },
  { to: '/services', key: 'services' },
  { to: '/projects', key: 'projects' },
  { to: '/team', key: 'team' },
  { to: '/journal', key: 'journal' },
  { to: '/estimate', key: 'estimate' },
  { to: '/contacts', key: 'contacts' },
]

export const contact = {
  phone: '+971 58 532 0771',
  email: 'TheWallBuilding@info.com',
  addressUrl: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0xd72f70abd81866b:0x437a0a3b4a61b96d?sa=X&ved=1t:8290&ictx=111',
  address: {
    uk: 'C. Marqués de Larios, 9, 3º izquierda y 4º Planta, Distrito Centro, 29015 Малага',
    en: 'C. Marqués de Larios, 9, 3º izquierda y 4º Planta, Distrito Centro, 29015 Málaga',
    ru: 'C. Marqués de Larios, 9, 3º izquierda y 4º Planta, Distrito Centro, 29015 Малага',
  },
  hours: {
    uk: 'Пн–Пт, 10:00–20:00 · Сб, 10:00–18:00 · Нд — вихідний',
    en: 'Mon–Fri, 10:00–20:00 · Sat, 10:00–18:00 · Sun — closed',
    ru: 'Пн–Пт, 10:00–20:00 · Сб, 10:00–18:00 · Вс — выходной',
  },
  socials: [
    { label: 'Telegram', short: 'TG', href: 'https://t.me/The_Wall_Building' },
    { label: 'TikTok', short: 'TT', href: 'https://www.tiktok.com/@thewallbuilding' },
  ],
}

export const stats = [
  { value: 13, suffix: '', label: { uk: 'років на ринку', en: 'years in business', ru: 'лет на рынке' } },
  { value: 700, suffix: '+', label: { uk: 'завершених обʼєктів', en: 'projects delivered', ru: 'завершённых объектов' } },
  { value: 480, suffix: 'k', label: { uk: 'мІ збудовано', en: 'm² built', ru: 'м² построено' } },
  { value: 64, suffix: '', label: { uk: 'людей у команді', en: 'people on the team', ru: 'человек в команде' } },
]

export const clients = [
  'NOVATEK', 'ARRICANO', 'KOVALSKA', 'DIM GROUP', 'INTERGAL', 'SAGA', 'GREENOL', 'RIVERSIDE',
]

export const home = {
  hero: {
    kicker: { uk: 'Будівельна студія повного циклу · Малага', en: 'Full-cycle construction studio · Málaga', ru: 'Строительная студия полного цикла · Малага' },
    title: {
      uk: ['Організація, управління', 'та нагляд за будівництвом'],
      en: ['Planning, management', 'and supervision of construction'],
      ru: ['Организация, управление', 'и надзор за строительством'],
    },
    text: {
      uk: 'Будуємо житло й комерцію під ключ — і самі контролюємо якість, щоб вам не доводилось перевіряти за нами.',
      en: 'We build homes and commercial spaces turnkey — and check the quality ourselves, so you don’t have to.',
      ru: 'Строим жильё и коммерцию под ключ — и сами контролируем качество, чтобы вам не приходилось перепроверять за нами.',
    },
    image: '/img/hero-construction.jpg',
  },
  aboutTeaser: {
    kicker: { uk: 'Про студію', en: 'About the studio', ru: 'О студии' },
    title: {
      uk: 'Будуємо так, щоб не соромно було повернутись через 10 років',
      en: 'We build so it still holds up ten years later',
      ru: 'Строим так, чтобы не было стыдно вернуться через 10 лет',
    },
    text: {
      uk: 'The Wall Building — це інженери, архітектори й будівельники, які ведуть обʼєкт від першого ескізу до ключів. За бюджет, строки та якість відповідаємо ми, а не «субпідрядник субпідрядника».',
      en: 'The Wall Building is engineers, architects and builders who carry a project from the first sketch to the keys. The budget, the deadlines and the quality are on us — not on “the subcontractor’s subcontractor”.',
      ru: 'The Wall Building — это инженеры, архитекторы и строители, которые ведут объект от первого эскиза до ключей. За бюджет, сроки и качество отвечаем мы, а не «субподрядчик субподрядчика».',
    },
    image: '/img/int-1.jpg',
  },
}

export const cta = {
  kicker: { uk: 'Є проєкт на думці?', en: 'Got a project in mind?', ru: 'Есть проект на примете?' },
  title: { uk: 'Розкажіть, що плануєте', en: 'Tell us what you’re planning', ru: 'Расскажите, что планируете' },
  text: {
    uk: 'Залиште заявку — передзвонимо протягом робочого дня, без довгих анкет і навʼязливих менеджерів.',
    en: 'Leave a request — we’ll call back within a business day. No long forms, no pushy sales.',
    ru: 'Оставьте заявку — перезвоним в течение рабочего дня, без длинных анкет и навязчивых менеджеров.',
  },
}
