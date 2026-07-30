import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageWrap from '../components/PageWrap'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import Stats from '../components/Stats'
import CTA from '../components/CTA'
import Seo from '../components/Seo'
import SectionHead from '../components/SectionHead'
import useLocale from '../hooks/useLocale'
import { projects, projectFilters } from '../data/projects'

const STEP = 6

export default function Projects() {
  const { loc } = useLocale()
  const [filter, setFilter] = useState('all')
  const [count, setCount] = useState(STEP)
  const filtered = projects.filter((p) => filter === 'all' || p.cat === filter)
  const visible = loc(filtered.slice(0, count))

  const changeFilter = (id) => { setFilter(id); setCount(STEP) }

  return (
    <PageWrap>
      <Seo title={loc({ uk: 'Проєкти', en: 'Projects', ru: 'Проекты' })} description={loc({ uk: 'Приватні резиденції та комерційні обʼєкти в Іспанії та Європі — портфоліо студії The Wall Building.', en: 'Private residences and commercial spaces in Spain and across Europe — the The Wall Building portfolio.', ru: 'Частные резиденции и коммерческие объекты в Испании и Европе — портфолио студии The Wall Building.' })} path="/projects" />
      <PageHero
        kicker={loc({ uk: 'Портфоліо', en: 'Portfolio', ru: 'Портфолио' })}
        title={loc({ uk: 'Проєкти, якими пишаємось', en: 'Projects we’re proud of', ru: 'Проекты, которыми гордимся' })}
        text={loc({ uk: 'Приватні резиденції та комерційні обʼєкти в Іспанії та Європі.', en: 'Private residences and commercial spaces in Spain and across Europe.', ru: 'Частные резиденции и коммерческие объекты в Испании и Европе.' })}
        image="/img/hero-construction.jpg"
        crumbs={[{ label: loc({ uk: 'Проєкти', en: 'Projects', ru: 'Проекты' }) }]}
      />

      <section className="section">
        <div className="container">
          <div className="section__top">
            <SectionHead
              kicker={loc({ uk: '700+ обʼєктів', en: '700+ projects', ru: '700+ объектов' })}
              title={loc({ uk: 'Кожен проєкт — окрема історія', en: 'Every project is its own story', ru: 'Каждый проект — отдельная история' })}
              lead={loc({ uk: 'Від приватних резиденцій до штаб-квартир: ми відповідаємо за результат на кожному метрі.', en: 'From private residences to headquarters: we’re accountable for every metre.', ru: 'От частных резиденций до штаб-квартир: мы отвечаем за результат на каждом метре.' })}
            />
          </div>

          <div className="projects-bar">
            {loc(projectFilters).map((f) => (
              <button
                key={f.id}
                className={`projects-bar__filter${filter === f.id ? ' projects-bar__filter--active' : ''}`}
                onClick={() => changeFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <motion.ul className="projects-grid" layout>
            <AnimatePresence mode="popLayout">
              {visible.map((p) => <ProjectCard key={p.slug} project={p} />)}
            </AnimatePresence>
          </motion.ul>

          {count < filtered.length && (
            <div className="load-more">
              <button className="btn btn--outline btn--lg" onClick={() => setCount((c) => c + STEP)}>
                {loc({ uk: 'Показати ще', en: 'Show more', ru: 'Показать ещё' })}
              </button>
            </div>
          )}
        </div>
      </section>

      <Stats />
      <CTA />
    </PageWrap>
  )
}
