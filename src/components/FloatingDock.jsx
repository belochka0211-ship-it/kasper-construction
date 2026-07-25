import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { scrollToTop } from '../hooks/useLenis'
import { contact } from '../data/site'

/**
 * Fixed quick-contact dock: a burger button expands into Telegram, WhatsApp
 * and Call. A scroll-to-top button appears separately after scrolling down.
 */
export default function FloatingDock() {
  const [showTop, setShowTop] = useState(false)
  const [open, setOpen] = useState(false)
  const tel = contact.phone.replace(/\s/g, '')

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="dock" aria-label="Швидкий звʼязок">
      <AnimatePresence>
        {showTop && (
          <motion.button
            className="dock__btn dock__btn--top"
            onClick={() => scrollToTop(false)}
            aria-label="Догори"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>

      <div className="dock__menu">
        <AnimatePresence>
          {open && (
            <motion.div
              className="dock__menu-items"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.18 }}
            >
              <a className="dock__btn dock__btn--tg" href="https://t.me/" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <span className="dock__icon">✈</span>
              </a>
              <a className="dock__btn dock__btn--wa" href={`https://wa.me/${tel.replace('+', '')}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <span className="dock__icon">☎</span>
              </a>
              <a className="dock__btn dock__btn--call" href={`tel:${tel}`} aria-label="Зателефонувати">
                <span className="dock__icon">☏</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className={`dock__btn dock__btn--burger${open ? ' dock__btn--burger-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Закрити меню звʼязку' : 'Відкрити меню звʼязку'}
          aria-expanded={open}
        >
          <span className="dock__burger-line" />
          <span className="dock__burger-line" />
          <span className="dock__burger-line" />
          <span className="dock__pulse" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
