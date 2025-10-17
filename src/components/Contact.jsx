import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Contact() {
  const { t } = useLanguage()
  const contact = t('contact')

  return (
    <section
      id="contact"
      className="rounded-3xl border border-violet-500/20 bg-slate-900/40 p-10"
    >
      <div className="space-y-4">
        <p className="text-base font-semibold uppercase tracking-[0.28em] text-violet-300/80 sm:text-lg">
          {contact?.sectionLabel}
        </p>
        <h2 className="text-3xl font-semibold text-slate-100 md:text-4xl">
          {contact?.heading}
        </h2>
        <p className="max-w-2xl text-sm text-slate-200/80">
          {contact?.body}
        </p>
      </div>
      <div className="mt-8 grid gap-6 text-sm text-slate-200 sm:grid-cols-2">
        <div className="space-y-2">
          <p className="font-semibold text-slate-100">{contact?.emailLabel}</p>
          <a
            href={`mailto:${contact?.emailValue}`}
            className="text-violet-300 transition hover:text-violet-200"
          >
            {contact?.emailValue}
          </a>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-slate-100">{contact?.phoneLabel}</p>
          <a
            href={`tel:${contact?.phoneValue?.replace(/[^+\d]/g, '')}`}
            className="text-violet-300 transition hover:text-violet-200"
          >
            {contact?.phoneValue}
          </a>
        </div>
      </div>
    </section>
  )
}
