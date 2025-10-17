import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Experiences() {
  const { t } = useLanguage()
  const experiences = t('experiences')
  const items = experiences?.items ?? []

  if (!items.length) {
    return null
  }

  return (
    <section id="experience" className="space-y-10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300/70">
          {experiences?.sectionLabel}
        </p>
        <h2 className="max-w-3xl text-3xl font-semibold text-slate-100">
          {experiences?.heading}
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-violet-400 via-violet-500/20 to-violet-500/5 lg:block" />

        <div className="relative grid gap-16">
          {items.map(({ role, company, timeframe, description, achievements = [], technologies = [] }, index) => {
            const isEven = index % 2 === 0
            const cardAlignment = isEven
              ? 'lg:col-start-1 lg:justify-self-end lg:pr-16'
              : 'lg:col-start-3 lg:justify-self-start lg:pl-16'

            return (
              <div
                key={`${role}-${company}`}
                className="relative grid gap-8 text-left lg:grid-cols-[minmax(0,1fr),120px,minmax(0,1fr)] lg:items-center"
              >
                <span className="pointer-events-none absolute left-1/2 top-1/2 hidden size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400 bg-slate-950 shadow-[0_0_18px_rgba(76,29,149,0.35)] lg:block" />
                
                <article
                  className={`relative col-span-3 overflow-hidden rounded-3xl border border-violet-500/20 bg-slate-900/50 p-6 shadow-lg shadow-slate-950/20 backdrop-blur lg:col-span-1 ${cardAlignment}text-left`}
                >
                  <header className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-300/70">
                      {timeframe}
                    </p>
                    <h3 className="text-xl font-semibold text-slate-100">
                      {role}
                      <span className="text-slate-400"> · {company}</span>
                    </h3>
                  </header>

                  <p className="mt-3 text-sm text-slate-300">{description}</p>

                {achievements.length ? (
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2">
                        <span className="mt-1 inline-flex size-1.5 rounded-full bg-violet-400" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {technologies.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={`${role}-${tech}`}
                        className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-medium uppercase tracking-wide text-violet-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : null}
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
