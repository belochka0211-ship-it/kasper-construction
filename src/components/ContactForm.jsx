import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { trackEvent } from '../lib/analytics'

// Telegram bot that receives every form submission from the site.
const TG_TOKEN = '8766125313:AAFNpM6R2Kj90j-SCw5IDdF27hjc29uzvs4'
const TG_CHAT_ID = '331136814'

export default function ContactForm() {
  const { t } = useTranslation()
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errors, setErrors] = useState({})

  const validate = (data) => {
    const e = {}
    if (!data.name || data.name.trim().length < 2) e.name = t('form.errName')
    if (!data.phone || data.phone.replace(/\D/g, '').length < 9) e.phone = t('form.errPhone')
    return e
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    const form = ev.currentTarget
    const data = Object.fromEntries(new FormData(form))

    // Honeypot: bots fill hidden fields; humans don't.
    if (data.company) return setStatus('sent')

    const errs = validate(data)
    setErrors(errs)
    if (Object.keys(errs).length) return

    setStatus('sending')
    try {
      const lines = [
        '🆕 Нова заявка з сайту',
        `👤 Імʼя: ${data.name}`,
        `📞 Телефон: ${data.phone}`,
        data.type ? `🏗 Тип проєкту: ${data.type}` : null,
        data.message ? `💬 Повідомлення: ${data.message}` : null,
        `🌐 Сторінка: ${window.location.href}`,
      ].filter(Boolean)

      const res = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TG_CHAT_ID, text: lines.join('\n') }),
      })
      if (!res.ok) throw new Error('Bad response')

      setStatus('sent')
      trackEvent('lead_submit', { type: data.type || 'unknown' })
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="contact-form__success">
        <span className="contact-form__success-mark" aria-hidden="true">✓</span>
        <h3 className="contact-form__success-title">{t('form.success')}</h3>
        <p className="contact-form__success-text">{t('form.successText')}</p>
      </div>
    )
  }

  return (
    <form className="contact-form form" onSubmit={onSubmit} noValidate>
      {/* Honeypot — visually hidden, off-screen, not announced */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="form__honeypot" aria-hidden="true" />

      <div className="form__row">
        <label className="form__field">
          <span className="form__label">{t('form.name')}</span>
          <input className={`form__input${errors.name ? ' form__input--error' : ''}`} type="text" name="name" placeholder={t('form.namePh')} />
          {errors.name && <span className="form__err">{errors.name}</span>}
        </label>
        <label className="form__field">
          <span className="form__label">{t('form.phone')}</span>
          <input className={`form__input${errors.phone ? ' form__input--error' : ''}`} type="tel" name="phone" placeholder="+380…" />
          {errors.phone && <span className="form__err">{errors.phone}</span>}
        </label>
      </div>
      <label className="form__field">
        <span className="form__label">{t('form.type')}</span>
        <select className="form__input form__input--select" name="type" defaultValue="">
          <option value="" disabled>{t('form.choose')}</option>
          <option>{t('form.t1')}</option>
          <option>{t('form.t2')}</option>
          <option>{t('form.t3')}</option>
          <option>{t('form.t4')}</option>
        </select>
      </label>
      <label className="form__field">
        <span className="form__label">{t('form.message')}</span>
        <textarea className="form__input form__input--area" name="message" rows="4" placeholder={t('form.msgPh')} />
      </label>

      {status === 'error' && <p className="form__alert" role="alert">{t('form.error')}</p>}

      <button className="btn btn--accent btn--block" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? t('form.sending') : t('cta.submit')}
      </button>
      <p className="form__note">{t('form.note')}</p>
    </form>
  )
}
