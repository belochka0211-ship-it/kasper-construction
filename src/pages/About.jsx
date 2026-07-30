import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import SectionHead from '../components/SectionHead'
import Stats from '../components/Stats'
import Clients from '../components/Clients'
import CTA from '../components/CTA'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import { asset } from '../lib/asset'
import useLocale from '../hooks/useLocale'

const values = [
  { title: { uk: 'Прозорість', en: 'Transparency', ru: 'Прозрачность' }, text: { uk: 'Бюджет фіксуємо в договорі, щотижня шлемо звіт із фото. Ніяких «дорахуємо потім».', en: 'We fix the budget in the contract and send a weekly report with photos. No “we’ll add it later”.', ru: 'Бюджет фиксируем в договоре, каждую неделю отправляем отчёт с фото. Никаких «дорасчитаем потом».' } },
  { title: { uk: 'Якість', en: 'Quality', ru: 'Качество' }, text: { uk: 'Перевіряємо не лише те, що видно. Прихована інженерія й вузли — теж під контролем.', en: 'We check more than what’s visible. Hidden engineering and joints are controlled too.', ru: 'Проверяем не только то, что видно. Скрытая инженерия и узлы — тоже под контролем.' } },
  { title: { uk: 'Строки', en: 'Timelines', ru: 'Сроки' }, text: { uk: 'Графік складаємо чесний, а не «щоб підписали». І тримаємось його.', en: 'We make an honest schedule, not one “just to get a signature”. And we keep to it.', ru: 'График составляем честный, а не «чтобы подписали». И держимся его.' } },
  { title: { uk: 'Відповідальність', en: 'Ownership', ru: 'Ответственность' }, text: { uk: 'За весь обʼєкт відповідаємо ми. Не доведеться зʼясовувати, хто винен серед пʼяти бригад.', en: 'We’re responsible for the whole site. No figuring out who’s to blame among five crews.', ru: 'За весь объект отвечаем мы. Не придётся выяснять, кто виноват среди пяти бригад.' } },
]

const process = [
  { step: '01', title: { uk: 'Знайомство', en: 'Getting to know you', ru: 'Знакомство' }, text: { uk: 'Зустрічаємось, дивимось ділянку чи квартиру, розбираємось, чого ви хочете.', en: 'We meet, look at the site or flat, and work out what you actually want.', ru: 'Встречаемся, смотрим участок или квартиру, разбираемся, чего вы хотите.' } },
  { step: '02', title: { uk: 'Проєкт і кошторис', en: 'Design & estimate', ru: 'Проект и смета' }, text: { uk: 'Готуємо документацію й рахуємо вартість, яку потім не «перерахуємо по ходу».', en: 'We prepare the documentation and a cost we won’t “recalculate as we go”.', ru: 'Готовим документацию и считаем стоимость, которую потом не «пересчитаем по ходу».' } },
  { step: '03', title: { uk: 'Будівництво', en: 'Construction', ru: 'Строительство' }, text: { uk: 'Будуємо поетапно, з технаглядом і звітами, щоб ви були в курсі.', en: 'We build stage by stage, with supervision and reports, so you stay in the loop.', ru: 'Строим поэтапно, с технадзором и отчётами, чтобы вы были в курсе.' } },
  { step: '04', title: { uk: 'Здача під ключ', en: 'Turnkey handover', ru: 'Сдача под ключ' }, text: { uk: 'Передаємо обʼєкт з документами й лишаємось на звʼязку по гарантії.', en: 'We hand over the site with documents and stay in touch for the warranty.', ru: 'Передаём объект с документами и остаёмся на связи по гарантии.' } },
]

const timeline = [
  { y: '2012', t: { uk: 'Заснування', en: 'Founded', ru: 'Основание' }, d: { uk: 'The Wall Building починає з ремонтів квартир у Малазі.', en: 'The Wall Building starts out doing apartment renovations in Málaga.', ru: 'The Wall Building начинает с ремонтов квартир в Малаге.' } },
  { y: '2015', t: { uk: 'Перші обʼєкти під ключ', en: 'First turnkey projects', ru: 'Первые объекты под ключ' }, d: { uk: 'Переходимо до повного циклу будівництва.', en: 'We move to full-cycle construction.', ru: 'Переходим к полному циклу строительства.' } },
  { y: '2018', t: { uk: 'Власне виробництво', en: 'Own workshop', ru: 'Собственное производство' }, d: { uk: 'Запускаємо цех корпусних і мʼяких меблів.', en: 'We open a workshop for cabinetry and upholstery.', ru: 'Запускаем цех корпусной и мягкой мебели.' } },
  { y: '2021', t: { uk: 'Комерційні простори', en: 'Commercial spaces', ru: 'Коммерческие пространства' }, d: { uk: 'Офіси, готелі та шоуруми у портфоліо.', en: 'Offices, hotels and showrooms join the portfolio.', ru: 'Офисы, отели и шоурумы в портфолио.' } },
  { y: '2024', t: { uk: '700+ проєктів', en: '700+ projects', ru: '700+ проектов' }, d: { uk: 'Працюємо в Іспанії та Європі, команда 64 людини.', en: 'Working across Spain and Europe, a team of 64.', ru: 'Работаем в Испании и Европе, команда 64 человека.' } },
]

export default function About() {
  const { loc } = useLocale()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <PageWrap>
      <Seo title={loc({ uk: 'Про нас', en: 'About', ru: 'О нас' })} description={loc({ uk: '13 років досвіду, 700+ завершених обʼєктів. Інженери, архітектори та будівельники The Wall Building.', en: '13 years of experience, 700+ completed projects. The engineers, architects and builders of The Wall Building.', ru: '13 лет опыта, 700+ завершённых объектов. Инженеры, архитекторы и строители The Wall Building.' })} path="/about" />
      <PageHero
        kicker={loc({ uk: 'Про студію', en: 'About the studio', ru: 'О студии' })}
        title={loc({ uk: '13 років, 700+ обʼєктів і жодного «ми за це не відповідаємо»', en: '13 years, 700+ projects and no “that’s not our problem”', ru: '13 лет, 700+ объектов и ни одного «мы за это не отвечаем»' })}
        text={loc({ uk: 'Команда інженерів, архітекторів і будівельників, яка доводить обʼєкт від першого ескізу до ключів.', en: 'A team of engineers, architects and builders who take a project from the first sketch to the keys.', ru: 'Команда инженеров, архитекторов и строителей, которая ведёт объект от первого эскиза до ключей.' })}
        image="/img/hero-wide.jpg"
        crumbs={[{ label: loc({ uk: 'Про нас', en: 'About', ru: 'О нас' }) }]}
      />

      {/* Intro split */}
      <section className="section">
        <div className="container about-intro" ref={ref}>
          <div className="about-intro__media">
            <motion.img className="about-intro__img" style={{ y }} src={asset('/img/int-1.jpg')} alt={loc({ uk: 'Інтерʼєр проєкту The Wall Building', en: 'The Wall Building project interior', ru: 'Интерьер проекта The Wall Building' })} loading="lazy" />
          </div>
          <div className="about-intro__content">
            <SectionHead kicker={loc({ uk: 'Хто ми', en: 'Who we are', ru: 'Кто мы' })} title={loc({ uk: 'Проєктувальники й будівельники під одним дахом', en: 'Designers and builders under one roof', ru: 'Проектировщики и строители под одной крышей' })} />
            <Reveal as="p" className="about-intro__text" delay={0.1}>
              {loc({ uk: 'Почали у 2012-му з ремонтів квартир. Швидко набридло, що проєктувальники кивають на будівельників, а ті — на постачальників, тож зібрали всіх під один дах. Так клієнту лишається один контакт, а нам — нікого звинувачувати, крім себе.', en: 'We started in 2012 with apartment renovations. We quickly got tired of designers blaming builders and builders blaming suppliers, so we put everyone under one roof. That leaves the client with one contact — and us with no one to blame but ourselves.', ru: 'Начали в 2012-м с ремонтов квартир. Быстро надоело, что проектировщики кивают на строителей, а те — на поставщиков, поэтому собрали всех под одной крышей. Так клиенту остаётся один контакт, а нам — некого винить, кроме себя.' })}
            </Reveal>
            <Reveal as="p" className="about-intro__text" delay={0.15}>
              {loc({ uk: 'Зараз будуємо приватні будинки й комерцію в Іспанії та за кордоном. Меблі робимо на власному виробництві, а на обʼєкт регулярно виїжджає той, хто його проєктував, — щоб на папері й у реальності було те саме.', en: 'Today we build private houses and commercial spaces in Spain and abroad. We make furniture in our own workshop, and whoever designed the project visits the site regularly — so paper and reality match.', ru: 'Сейчас строим частные дома и коммерцию в Испании и за рубежом. Мебель делаем на собственном производстве, а на объект регулярно выезжает тот, кто его проектировал, — чтобы на бумаге и в реальности было одно и то же.' })}
            </Reveal>
          </div>
        </div>
      </section>

      <Stats />

      {/* Values */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead kicker={loc({ uk: 'Цінності', en: 'Values', ru: 'Ценности' })} title={loc({ uk: 'Принципи, на яких будуємо', en: 'What we build on', ru: 'Принципы, на которых строим' })} align="center" />
          <ul className="values-grid">
            {values.map((v, i) => (
              <Reveal as="li" className="value-card" key={v.title.uk} delay={(i % 4) * 0.07}>
                <span className="value-card__mark" aria-hidden="true">✦</span>
                <h3 className="value-card__title">{loc(v.title)}</h3>
                <p className="value-card__text">{loc(v.text)}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <SectionHead kicker={loc({ uk: 'Процес', en: 'Process', ru: 'Процесс' })} title={loc({ uk: 'Як ми працюємо', en: 'How we work', ru: 'Как мы работаем' })} />
          <ol className="process">
            {process.map((p, i) => (
              <Reveal as="li" className="process__item" key={p.step} delay={(i % 4) * 0.06}>
                <span className="process__step">{p.step}</span>
                <h3 className="process__title">{loc(p.title)}</h3>
                <p className="process__text">{loc(p.text)}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead kicker={loc({ uk: 'Історія', en: 'History', ru: 'История' })} title={loc({ uk: 'Шлях студії', en: 'The studio’s path', ru: 'Путь студии' })} />
          <ol className="timeline">
            {timeline.map((m, i) => (
              <Reveal as="li" className="timeline__item" key={m.y} delay={(i % 5) * 0.05}>
                <span className="timeline__year">{m.y}</span>
                <div className="timeline__body">
                  <h3 className="timeline__title">{loc(m.t)}</h3>
                  <p className="timeline__text">{loc(m.d)}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Press */}
      <section className="section">
        <div className="container">
          <SectionHead kicker={loc({ uk: 'Преса', en: 'Press', ru: 'Пресса' })} title={loc({ uk: 'Про нас пишуть', en: 'As featured in', ru: 'О нас пишут' })} align="center" />
          <ul className="press">
            {['DOM.RIA', 'Domus', 'AD Magazine', 'Building UA', 'Forbes'].map((p, i) => (
              <Reveal as="li" className="press__item" key={p} delay={(i % 5) * 0.05}>{p}</Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Clients />
      <CTA />
    </PageWrap>
  )
}
