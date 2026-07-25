import { useEffect, useRef, useState } from 'react'

/**
 * Custom cursor: a small dot + a lagging ring that grows over interactive
 * elements. Disabled on touch devices and for reduced-motion users.
 */
export default function Cursor() {
  const dot = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return
    setEnabled(true)
    document.body.classList.add('has-cursor')

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let hover = false
    let raf

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      const over = e.target.closest('a, button, [data-cursor]')
      hover = !!over
      dot.current?.classList.toggle('cursor__arrow--hover', hover)
    }
    const loop = () => {
      if (dot.current) {
        dot.current.style.transform = `translate(${mx}px, ${my}px) scale(${hover ? 1.6 : 1})`
      }
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      document.body.classList.remove('has-cursor')
    }
  }, [])

  if (!enabled) return null
  return (
    <div className="cursor__arrow" ref={dot} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 2.5L19.5 10.6c.7.37.6 1.4-.16 1.63l-6.34 1.93a1 1 0 0 0-.65.65l-1.93 6.34c-.23.76-1.26.86-1.63.16L2.5 4c-.32-.6.28-1.2.88-.88L4 2.5z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}
