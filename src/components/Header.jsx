import { useEffect, useRef, useState } from 'react'
import GooeyNav from './GooeyNav'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const languages = [
  { code: 'tr', label: 'TR' },
  { code: 'en', label: 'EN' },
]

export default function Header() {
  const [isSolid, setIsSolid] = useState(false)
  const headerRef = useRef(null)
  const { t, lang, setLanguage } = useLanguage()
  const navItems = t('header.nav') ?? []
  const siteTitle = t('header.title')

  useEffect(() => {
    const updateHeaderState = () => {
      const aboutSection = document.getElementById('about')
      const heroSection = document.getElementById('hero')
      const headerHeight = headerRef.current?.offsetHeight ?? 72
      const topOffset =
        headerRef.current && typeof window !== 'undefined'
          ? parseFloat(window.getComputedStyle(headerRef.current).top || '0')
          : 0
      const overlapThreshold = headerHeight + topOffset + 8

      let shouldBeSolid = false
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect()
        shouldBeSolid = heroRect.top <= overlapThreshold
      } else {
        shouldBeSolid = window.scrollY > overlapThreshold
      }

      if (!shouldBeSolid && aboutSection) {
        const aboutRect = aboutSection.getBoundingClientRect()
        if (aboutRect.top <= overlapThreshold) {
          shouldBeSolid = true
        }
      }

      setIsSolid((prev) => (prev === shouldBeSolid ? prev : shouldBeSolid))
    }

    updateHeaderState()
    window.addEventListener('scroll', updateHeaderState, { passive: true })
    window.addEventListener('resize', updateHeaderState)

    return () => {
      window.removeEventListener('scroll', updateHeaderState)
      window.removeEventListener('resize', updateHeaderState)
    }
  }, [])

  const headerOffsetClasses = isSolid ? 'top-0' : 'top-3 sm:top-4'
  const headerClasses = `sticky ${headerOffsetClasses} z-40 transition-all duration-200 ${
    isSolid
      ? 'border-b border-violet-500/20 bg-slate-950/70 backdrop-blur-sm'
      : 'border-b border-transparent bg-transparent backdrop-blur-0'
  }`

  return (
    <header ref={headerRef} className={headerClasses}>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-4 text-sm font-medium text-slate-200 sm:flex-row sm:items-center sm:gap-6">
        <a
          href="#top"
          className="w-full text-center text-lg font-semibold tracking-tight text-violet-300 sm:w-auto sm:text-left"
        >
          {siteTitle}
        </a>
        <div className="flex w-full justify-center sm:flex-1">
          <GooeyNav
            items={navItems}
            particleCount={8}
            particleDistances={[60, 6]}
            particleR={50}
            animationTime={500}
            timeVariance={150}
          />
        </div>
        <div className="inline-flex items-center justify-center rounded-full border border-violet-500/30 bg-slate-950/60 p-1 text-xs font-semibold text-slate-200 shadow-[0_0_12px_rgba(76,29,149,0.25)]">
          {languages.map(({ code, label }) => (
            <button
              key={code}
              type="button"
              onClick={() => setLanguage(code)}
              className={`rounded-full px-2.5 py-1 transition ${
                lang === code
                  ? 'bg-violet-500 text-slate-950 shadow-[0_0_12px_rgba(192,132,252,0.45)]'
                  : 'text-slate-200 hover:text-violet-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
