// Simple, recognizable brand glyphs (single-color, inherits currentColor) —
// enough to be identifiable at small sizes without pulling in a full icon set.
const ICONS = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  ),
  Telegram: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.5 3.5 2.6 10.9c-1.2.5-1.2 1.2-.2 1.5l4.8 1.5 1.8 5.6c.2.6.4.9.9.9.4 0 .6-.2.9-.5l2.1-2 4.4 3.2c.8.5 1.4.2 1.6-.7l3-14c.3-1.2-.4-1.7-1.4-1.4Zm-3.3 3.4-8 7.3-.3 3.4-1.5-4.8 8.6-6.5c.4-.3.8.1.4.4l-6.9 6.3 2.6 8-1.9-1.4Z" fill="currentColor" />
    </svg>
  ),
  Pinterest: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.5c-5.2 0-9 3.6-9 8.3 0 3 1.6 5.2 4 6.1.3.1.5 0 .6-.3l.3-1.1c.1-.3 0-.4-.2-.6-.7-.8-1.1-1.9-1.1-3.4 0-3.5 2.6-6.6 6.9-6.6 3.7 0 5.8 2.3 5.8 5.3 0 4-1.8 7.4-4.4 7.4-1.5 0-2.6-1.2-2.2-2.7.4-1.8 1.2-3.7 1.2-5 0-1.1-.6-2.1-1.9-2.1-1.5 0-2.7 1.6-2.7 3.6 0 1.3.4 2.2.4 2.2s-1.5 6.2-1.7 7.3c-.4 1.7-.1 3.8 0 4 0 .1.2.2.3.1.1-.2 1.7-2.1 2.2-4 .2-.6.9-3.5.9-3.5.4.8 1.7 1.5 3.1 1.5 4.1 0 7-3.8 7-8.8 0-3.9-3.2-7.7-8.4-7.7Z" fill="currentColor" />
    </svg>
  ),
  TikTok: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 2h-3v13.6a2.7 2.7 0 1 1-2.1-2.6V9.8a5.9 5.9 0 1 0 5.1 5.8V9.1a7 7 0 0 0 4.3 1.5V7.4a4 4 0 0 1-4.3-3.9V2Z" fill="currentColor" />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10.3 9.3v5.4l4.7-2.7-4.7-2.7Z" fill="currentColor" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5 21v-7.5H17l.4-3H14.5V8.4c0-.9.2-1.5 1.5-1.5H17.5V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H9v3h2.3V21h3.2Z" fill="currentColor" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.7" />
      <path d="M7.5 10v6.5M7.5 7.5v.01M11.5 16.5V13c0-1.4.8-2.2 2-2.2s1.8.8 1.8 2.2v3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
}

export default function SocialIcon({ label }) {
  return ICONS[label] || null
}
