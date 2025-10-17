import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
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
    <section ref={heroRef} id="hero" className="flex flex-col gap-10">
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
    </section>
  )
}
