import { useTranslation } from 'react-i18next'

const LANGS = [
  { code: 'uk', label: 'UA' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
]

export default function LanguageToggle({ className = '' }) {
  const { i18n } = useTranslation()
  const lang = i18n.language?.startsWith('en') ? 'en' : i18n.language?.startsWith('ru') ? 'ru' : 'uk'

  return (
    <div className={`lang-toggle ${className}`.trim()} role="group" aria-label="Language">
      {LANGS.map((l, i) => (
        <span key={l.code} style={{ display: 'contents' }}>
          {i > 0 && <span className="lang-toggle__sep" aria-hidden="true">/</span>}
          <button
            type="button"
            className={`lang-toggle__opt${lang === l.code ? ' lang-toggle__opt--active' : ''}`}
            onClick={() => i18n.changeLanguage(l.code)}
            aria-label={`Switch language to ${l.label}`}
            aria-current={lang === l.code}
          >
            {l.label}
          </button>
        </span>
      ))}
    </div>
  )
}
