import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { scrollToTop } from '../hooks/useLenis'

/**
 * Fixed quick-contact dock: a burger button expands into Telegram, WhatsApp
 * and Call. A scroll-to-top button appears separately after scrolling down.
 */
export default function FloatingDock() {
  const [showTop, setShowTop] = useState(false)
  const [open, setOpen] = useState(false)

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
              <a className="dock__btn dock__btn--tg" href="https://t.me/The_Wall_Building" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <svg className="dock__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5 3.5 2.6 10.9c-1.2.5-1.2 1.2-.2 1.5l4.8 1.5 1.8 5.6c.2.6.4.9.9.9.4 0 .6-.2.9-.5l2.1-2 4.4 3.2c.8.5 1.4.2 1.6-.7l3-14c.3-1.2-.4-1.7-1.4-1.4Zm-3.3 3.4-8 7.3-.3 3.4-1.5-4.8 8.6-6.5c.4-.3.8.1.4.4l-6.9 6.3 2.6 8-1.9-1.4Z" fill="currentColor" />
                </svg>
              </a>
              <a className="dock__btn dock__btn--tiktok" href="https://www.tiktok.com/@thewallbuilding" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg className="dock__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 2h-3v13.6a2.7 2.7 0 1 1-2.1-2.6V9.8a5.9 5.9 0 1 0 5.1 5.8V9.1a7 7 0 0 0 4.3 1.5V7.4a4 4 0 0 1-4.3-3.9V2Z" fill="currentColor" />
                </svg>
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
