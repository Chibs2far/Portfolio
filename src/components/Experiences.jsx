import { useLanguage } from '../i18n/LanguageContext.jsx'
import ExperienceLogo from './ExperienceLogo.jsx'

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
        <p className="text-base font-semibold uppercase tracking-[0.28em] text-violet-300/80 sm:text-lg">
          {experiences?.sectionLabel}
        </p>
        <h2 className="max-w-3xl text-3xl font-semibold text-slate-100 md:text-4xl">
          {experiences?.heading}
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-violet-400 via-violet-500/20 to-violet-500/5 lg:block" />

        <div className="relative grid gap-16">
          {items.map(
            (
              {
                role,
                company,
                timeframe,
                location,
                description,
                achievements = [],
                technologies = [],
                logo,
              },
              index,
            ) => {
            const isEven = index % 2 === 0
            const cardAlignment = isEven
              ? 'lg:col-start-1 lg:justify-self-end lg:pr-16'
              : 'lg:col-start-3 lg:justify-self-start lg:pl-16'

            return (
              <div
                key={`${role}-${company}`}
                className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr),120px,minmax(0,1fr)] lg:items-center"
              >
                <span className="pointer-events-none absolute left-1/2 top-1/2 hidden size-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400 bg-slate-950 shadow-[0_0_18px_rgba(76,29,149,0.35)] lg:block" />
                
                <article
                  className={`relative col-span-3 overflow-hidden rounded-3xl border border-violet-500/20 bg-slate-900/50 px-10 py-10 text-center shadow-lg shadow-slate-950/20 backdrop-blur lg:col-span-1 ${cardAlignment}`}
                >
                  <header className="flex flex-col items-center gap-5">
                    <ExperienceLogo src={logo} alt={`${company} logo`} />
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-300/70">
                        {timeframe}
                      </p>
                      <h3 className="text-xl font-semibold text-slate-100">{role}</h3>
                      <p className="text-sm font-medium text-slate-300">{company}</p>
                      {location ? (
                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
                          {location}
                        </p>
                      ) : null}
                    </div>
                  </header>

                  <p className="mt-4 text-sm leading-relaxed text-slate-300">{description}</p>

                {achievements.length ? (
                  <ul className="mt-6 space-y-3 text-sm text-slate-300">
                    {achievements.map((achievement) => (
                      <li key={achievement} className="mx-auto flex max-w-xl items-start justify-center gap-3 text-left sm:text-center">
                        <span className="mt-2 inline-flex size-1.5 rounded-full bg-violet-400" />
                        <span className="leading-relaxed text-slate-200/90">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {technologies.length ? (
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
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
