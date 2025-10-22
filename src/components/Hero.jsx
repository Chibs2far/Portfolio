import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import CardSwap, { Card } from './CardSwap'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Hero() {
  const { t } = useLanguage()
  const heroContent = t('hero')
  const heroLines = heroContent?.lines ?? []
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-line',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'power3.out',
          stagger: 0.18,
        },
      )
      gsap.fromTo(
        '.hero-cta',
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 0.6,
          duration: 0.9,
          ease: 'power2.out',
        },
      )
    }, heroRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between"
    >
      <div className="flex max-w-xl flex-1 flex-col gap-10">
        <p className="text-sm uppercase tracking-[0.4em] text-violet-200/80 [text-shadow:0_0_15px_rgba(76,29,149,0.6)]">
          {heroContent?.badge}
        </p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {heroLines.map((line, index) => {
              const baseStyles = [
                'text-slate-100 [text-shadow:0_0_25px_rgba(15,23,42,0.7)]',
                'text-violet-200 [text-shadow:0_0_30px_rgba(91,33,182,0.65)]',
                'text-fuchsia-300 [text-shadow:0_0_35px_rgba(217,70,239,0.55)]',
              ]
              const style = baseStyles[index] ?? baseStyles[baseStyles.length - 1]
              return (
                <span key={`${line}-${index}`} className={`hero-line block ${style}`}>
                  {line}
                </span>
              )
            })}
          </h1>
          <p className="hero-line max-w-xl text-base text-slate-100/80 [text-shadow:0_0_20px_rgba(15,23,42,0.65)] sm:text-lg">
            {heroContent?.description}
          </p>
        </div>
        <div className="hero-cta flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400"
          >
            {heroContent?.primaryCta}
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold text-violet-200 transition hover:text-violet-100 focus-visible:text-violet-100"
          >
            {heroContent?.secondaryCta}
          </a>
        </div>
      </div>
      <div className="hidden w-full flex-1 items-start justify-end lg:mt-0 lg:flex">
        <div style={{ height: '520px', position: 'relative' }}>
          <CardSwap
            width={500}
            height={420}
            cardDistance={38}
            verticalDistance={46}
            delay={5200}
            pauseOnHover={false}
            containerClassName="absolute right-0 top-0 translate-x-[12%] translate-y-[22%] origin-top-right perspective-[1200px] overflow-visible xl:translate-x-[10%] xl:translate-y-[36%]"
          >
            <Card customClass="bg-slate-950/90 text-slate-100">
              <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl">
                <div className="relative z-20 flex items-center gap-3 border-b border-violet-500/20 bg-slate-950/70 px-6 py-4 backdrop-blur">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-100/90">
                    Etkileşimli
                  </p>
                </div>
                <div className="relative z-20 flex flex-1 flex-col justify-center px-6">
                  <p className="text-sm text-slate-200/80">
                    GSAP destekli mikro etkileşimlerle kullanıcıyı içine çeken deneyimler tasarlıyorum.
                  </p>
                </div>
                <div className="absolute inset-0">
                  <span className="absolute inset-x-[-20%] bottom-[-20%] h-[220px] rounded-full bg-gradient-to-r from-violet-500/40 via-fuchsia-500/30 to-transparent blur-3xl" />
                  <span className="absolute left-1/2 top-[35%] h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-2xl" />
                </div>
              </div>
            </Card>
            <Card customClass="bg-slate-950/90 text-slate-100">
              <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl">
                <div className="relative z-20 flex items-center gap-3 border-b border-fuchsia-500/20 bg-slate-950/70 px-6 py-4 backdrop-blur">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-fuchsia-100/90">
                    Performanslı
                  </p>
                </div>
                <div className="relative z-20 flex flex-1 flex-col justify-center px-6">
                  <p className="text-sm text-slate-200/80">
                    React projelerini 60fps hedefiyle optimize ederek akıcı bir deneyim sunuyorum.
                  </p>
                </div>
                <div className="absolute inset-0">
                  <span className="absolute inset-x-[-20%] bottom-[-20%] h-[220px] rounded-full bg-gradient-to-r from-fuchsia-500/35 via-purple-500/20 to-transparent blur-3xl" />
                  <span className="absolute left-1/2 top-[35%] h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-2xl" />
                </div>
              </div>
            </Card>
            <Card customClass="bg-slate-950/90 text-slate-100">
              <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl">
                <div className="relative z-20 flex items-center gap-3 border-b border-sky-400/25 bg-slate-950/70 px-6 py-4 backdrop-blur">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-100/90">
                    Duyarlı
                  </p>
                </div>
                <div className="relative z-20 flex flex-1 flex-col justify-center px-6">
                  <p className="text-sm text-slate-200/80">
                    Tailwind ile her ekran boyutuna hızla uyum sağlayan arayüzler geliştiriyorum.
                  </p>
                </div>
                <div className="absolute inset-0">
                  <span className="absolute inset-x-[-20%] bottom-[-20%] h-[220px] rounded-full bg-gradient-to-r from-sky-400/35 via-cyan-400/20 to-transparent blur-3xl" />
                  <span className="absolute left-1/2 top-[35%] h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-sky-400/20 blur-2xl" />
                </div>
              </div>
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  )
}
