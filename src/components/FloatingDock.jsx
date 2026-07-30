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
              <a className="dock__btn dock__btn--tg" href="https://t.me/The_Wall_Building" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <svg className="dock__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5 3.5 2.6 10.9c-1.2.5-1.2 1.2-.2 1.5l4.8 1.5 1.8 5.6c.2.6.4.9.9.9.4 0 .6-.2.9-.5l2.1-2 4.4 3.2c.8.5 1.4.2 1.6-.7l3-14c.3-1.2-.4-1.7-1.4-1.4Zm-3.3 3.4-8 7.3-.3 3.4-1.5-4.8 8.6-6.5c.4-.3.8.1.4.4l-6.9 6.3 2.6 8-1.9-1.4Z" fill="currentColor" />
                </svg>
              </a>
              <a className="dock__btn dock__btn--wa" href={`https://wa.me/${tel.replace('+', '')}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg className="dock__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.5a9.4 9.4 0 0 0-8.1 14.1L2.5 21.5l5.1-1.3A9.4 9.4 0 1 0 12 2.5Zm0 1.9a7.5 7.5 0 0 1 6.5 11.2 7.5 7.5 0 0 1-11 2.7l-.3-.2-3 .8.8-2.9-.2-.3A7.5 7.5 0 0 1 12 4.4Z" fill="currentColor" />
                  <path d="M9 7.4c-.2-.5-.4-.5-.7-.5h-.5c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.3 3.2.2.2 2.1 3.3 5.2 4.5 2.6 1 3.1.8 3.7.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4-.3-.2-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5C9.9 9.5 9.3 8 9 7.4Z" fill="currentColor" />
                </svg>
              </a>
              <a className="dock__btn dock__btn--call" href={`tel:${tel}`} aria-label="Зателефонувати">
                <svg className="dock__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .7-.2 1L6.6 10.8Z" fill="currentColor" />
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
