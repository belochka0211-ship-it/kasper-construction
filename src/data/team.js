const ph = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const team = [
  { name: { uk: 'Valerii Sazonov', en: 'Valerii Sazonov', ru: 'Valerii Sazonov' }, role: { uk: 'Засновник, CEO', en: 'Founder, CEO', ru: 'Основатель, CEO' }, photo: '/img/team-ceo.jpg' },
  { name: { uk: 'Ірина Левченко', en: 'Iryna Levchenko', ru: 'Ирина Левченко' }, role: { uk: 'Головна архітекторка', en: 'Lead architect', ru: 'Главный архитектор' }, photo: ph('1494790108377-be9c29b29330') },
  { name: { uk: 'Олег Дорош', en: 'Oleh Dorosh', ru: 'Олег Дорош' }, role: { uk: 'Керівник будівництва', en: 'Head of construction', ru: 'Руководитель строительства' }, photo: ph('1500648767791-00dcc994a43e') },
  { name: { uk: 'Марія Гнатюк', en: 'Mariia Hnatiuk', ru: 'Мария Гнатюк' }, role: { uk: 'Дизайнерка інтерʼєру', en: 'Interior designer', ru: 'Дизайнер интерьера' }, photo: ph('1438761681033-6461ffad8d80') },
  { name: { uk: 'Дмитро Савчук', en: 'Dmytro Savchuk', ru: 'Дмитрий Савчук' }, role: { uk: 'Інженер ОВК', en: 'HVAC engineer', ru: 'Инженер ОВК' }, photo: ph('1472099645785-5658abf4ff4e') },
  { name: { uk: 'Софія Бондар', en: 'Sofiia Bondar', ru: 'София Бондарь' }, role: { uk: 'Менеджерка проєктів', en: 'Project manager', ru: 'Менеджер проектов' }, photo: ph('1544005313-94ddf0286df2') },
]
