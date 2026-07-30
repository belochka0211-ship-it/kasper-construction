import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PageWrap from '../components/PageWrap'
import HomeHero from '../components/HomeHero'
import SectionHead from '../components/SectionHead'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import Stats from '../components/Stats'
import Clients from '../components/Clients'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Reveal from '../components/Reveal'
import Seo, { orgJsonLd } from '../components/Seo'
import { asset } from '../lib/asset'
import useLocale from '../hooks/useLocale'
import { services } from '../data/services'
import { projects } from '../data/projects'
import { home } from '../data/site'

const PROCESS = [
  { step: '01', title: { uk: 'Знайомство', en: 'Getting to know you', ru: 'Знакомство' }, text: { uk: 'Зустріч, бриф, аналіз ділянки та вхідних умов.', en: 'A meeting, a brief, and a look at the site and constraints.', ru: 'Встреча, бриф, анализ участка и вводных условий.' } },
  { step: '02', title: { uk: 'Проєкт і кошторис', en: 'Design & estimate', ru: 'Проект и смета' }, text: { uk: 'Концепція, документація, фіксована вартість.', en: 'Concept, documentation, a fixed price.', ru: 'Концепция, документация, фиксированная стоимость.' } },
  { step: '03', title: { uk: 'Будівництво', en: 'Construction', ru: 'Строительство' }, text: { uk: 'Поетапна реалізація під технічним наглядом.', en: 'Stage-by-stage work under supervision.', ru: 'Поэтапная реализация под техническим надзором.' } },
  { step: '04', title: { uk: 'Здача під ключ', en: 'Turnkey handover', ru: 'Сдача под ключ' }, text: { uk: 'Передача обʼєкта, документації та гарантійний сервіс.', en: 'Handover of the site, documents and warranty service.', ru: 'Передача объекта, документации и гарантийный сервис.' } },
]

const AWARDS = [
  { y: '2024', t: { uk: 'PinWin — Обʼєкт року', en: 'PinWin — Project of the Year', ru: 'PinWin — Объект года' } },
  { y: '2023', t: { uk: 'Ukrainian Design Awards', en: 'Ukrainian Design Awards', ru: 'Ukrainian Design Awards' } },
  { y: '2022', t: { uk: 'Best Office Interior', en: 'Best Office Interior', ru: 'Best Office Interior' } },
  { y: '2021', t: { uk: 'ISO 9001 — якість', en: 'ISO 9001 — quality', ru: 'ISO 9001 — качество' } },
]

export default function Home() {
  const { t } = useTranslation()
  const { loc } = useLocale()
  return (
    <PageWrap>
      <Seo
        description={loc({ uk: 'The Wall Building — будівельна студія повного циклу. Організація, управління та нагляд за будівництвом житлових і комерційних обʼєктів.', en: 'The Wall Building — a full-cycle construction studio. Planning, management and supervision of residential and commercial builds.', ru: 'The Wall Building — строительная студия полного цикла. Организация, управление и надзор за строительством жилых и коммерческих объектов.' })}
        path="/"
        jsonLd={orgJsonLd}
      />
      <HomeHero />

      {/* Services preview */}
      <section className="section">
        <div className="container">
          <div className="section__top">
            <SectionHead
              kicker={loc({ uk: 'Що ми робимо', en: 'What we do', ru: 'Что мы делаем' })}
              title={loc({ uk: 'Послуги повного циклу', en: 'Full-cycle services', ru: 'Услуги полного цикла' })}
              lead={loc({ uk: 'Сім напрямів, що закривають весь шлях обʼєкта — від ідеї до експлуатації.', en: 'Seven services covering the whole journey — from idea to a working building.', ru: 'Семь направлений, покрывающих весь путь объекта — от идеи до эксплуатации.' })}
            />
            <Reveal className="section__top-link">
              <Link className="link-arrow" to="/services">{t('cta.allServices')} <span aria-hidden="true">→</span></Link>
            </Reveal>
          </div>
          <ul className="services-grid">
            {loc(services).slice(0, 6).map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </ul>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__top">
            <SectionHead kicker={loc({ uk: 'Портфоліо', en: 'Portfolio', ru: 'Портфолио' })} title={loc({ uk: 'Вибрані проєкти', en: 'Selected projects', ru: 'Избранные проекты' })} />
            <Reveal className="section__top-link">
              <Link className="link-arrow" to="/projects">{t('cta.allProjects')} <span aria-hidden="true">→</span></Link>
            </Reveal>
          </div>
          <ul className="projects-grid">
            {loc(projects).slice(0, 6).map((p) => <ProjectCard key={p.slug} project={p} />)}
          </ul>
        </div>
      </section>

      <Stats />

      {/* About teaser */}
      <section className="section">
        <div className="container about-teaser">
          <Reveal className="about-teaser__media">
            <img className="about-teaser__img" src={asset(home.aboutTeaser.image)} alt={loc({ uk: 'Інтерʼєр проєкту The Wall Building', en: 'The Wall Building project interior', ru: 'Интерьер проекта The Wall Building' })} loading="lazy" />
          </Reveal>
          <div className="about-teaser__content">
            <SectionHead kicker={loc(home.aboutTeaser.kicker)} title={loc(home.aboutTeaser.title)} />
            <Reveal as="p" className="about-teaser__text" delay={0.1}>{loc(home.aboutTeaser.text)}</Reveal>
            <Reveal delay={0.15}>
              <Link className="btn btn--outline" to="/about">{t('cta.aboutStudio')}</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--alt">
        <div className="container">
          <SectionHead kicker={loc({ uk: 'Процес', en: 'Process', ru: 'Процесс' })} title={loc({ uk: 'Чотири кроки до результату', en: 'Four steps to the result', ru: 'Четыре шага к результату' })} />
          <ol className="process">
            {PROCESS.map((p, i) => (
              <Reveal as="li" className="process__item" key={p.step} delay={(i % 4) * 0.06}>
                <span className="process__step">{p.step}</span>
                <h3 className="process__title">{loc(p.title)}</h3>
                <p className="process__text">{loc(p.text)}</p>
              </Reveal>
            ))}
          </ol>

          <div className="awards">
            {AWARDS.map((a, i) => (
              <Reveal as="div" className="award" key={a.y} delay={(i % 4) * 0.06}>
                <span className="award__year">{a.y}</span>
                <span className="award__title">{loc(a.t)}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Clients />
      <FAQ />
      <CTA />
    </PageWrap>
  )
}
