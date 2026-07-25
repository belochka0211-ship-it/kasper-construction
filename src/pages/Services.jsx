import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import SectionHead from '../components/SectionHead'
import ServiceCard from '../components/ServiceCard'
import Stats from '../components/Stats'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import useLocale from '../hooks/useLocale'
import { services } from '../data/services'

const formats = [
  { n: '01', title: { uk: 'Окрема послуга', en: 'A single service', ru: 'Отдельная услуга' }, text: { uk: 'Беремо лише потрібний етап — наприклад, технагляд чи дизайн інтерʼєру.', en: 'We take just the stage you need — say, supervision or interior design.', ru: 'Берём только нужный этап — например, технадзор или дизайн интерьера.' } },
  { n: '02', title: { uk: 'Комплекс під ключ', en: 'Full turnkey', ru: 'Комплекс под ключ' }, text: { uk: 'Повний цикл від проєкту до ключів з одним центром відповідальності.', en: 'The full cycle from project to keys, with one point of responsibility.', ru: 'Полный цикл от проекта до ключей с одним центром ответственности.' } },
  { n: '03', title: { uk: 'Супровід та сервіс', en: 'Support & service', ru: 'Сопровождение и сервис' }, text: { uk: 'Гарантійне обслуговування, доукомплектація та авторський нагляд.', en: 'Warranty service, finishing touches and designer supervision.', ru: 'Гарантийное обслуживание, доукомплектация и авторский надзор.' } },
]

export default function Services() {
  const { loc } = useLocale()
  return (
    <PageWrap>
      <Seo title={loc({ uk: 'Послуги', en: 'Services', ru: 'Услуги' })} description={loc({ uk: 'Повний цикл — від ідеї до ключів: управління, будівництво, дизайн, інженерія, технагляд, меблі.', en: 'The full cycle — from idea to keys: management, construction, design, engineering, supervision, furniture.', ru: 'Полный цикл — от идеи до ключей: управление, строительство, дизайн, инженерия, технадзор, мебель.' })} path="/services" />
      <PageHero
        kicker={loc({ uk: 'Послуги', en: 'Services', ru: 'Услуги' })}
        title={loc({ uk: 'Повний цикл — від ідеї до ключів', en: 'The full cycle — from idea to keys', ru: 'Полный цикл — от идеи до ключей' })}
        text={loc({ uk: 'Сім напрямів, які можна замовити окремо або як комплекс під ключ.', en: 'Seven services you can order on their own or as a full turnkey package.', ru: 'Семь направлений, которые можно заказать отдельно или как комплекс под ключ.' })}
        image="/img/hero-build.jpg"
        crumbs={[{ label: loc({ uk: 'Послуги', en: 'Services', ru: 'Услуги' }) }]}
      />

      <section className="section">
        <div className="container">
          <ul className="services-grid">
            {loc(services).map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </ul>
        </div>
      </section>

      {/* Formats of cooperation */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead kicker={loc({ uk: 'Формати співпраці', en: 'Ways to work with us', ru: 'Форматы сотрудничества' })} title={loc({ uk: 'Як з нами працювати', en: 'How to work with us', ru: 'Как с нами работать' })} />
          <ul className="formats">
            {formats.map((f, i) => (
              <Reveal as="li" className="format-card" key={f.n} delay={(i % 3) * 0.08}>
                <span className="format-card__num">{f.n}</span>
                <h3 className="format-card__title">{loc(f.title)}</h3>
                <p className="format-card__text">{loc(f.text)}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Stats />
      <FAQ />
      <CTA />
    </PageWrap>
  )
}
