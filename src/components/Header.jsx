import { useEffect, useRef, useState } from 'react'
import GooeyNav from './GooeyNav'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const languages = [
  { code: 'tr', label: 'TR' },
  { code: 'en', label: 'EN' },
]

export default function Header() {
  const [isSolid, setIsSolid] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const { t, lang, setLanguage } = useLanguage()
  const navItemsSource = t('header.nav')
  const navItems = Array.isArray(navItemsSource) ? navItemsSource : []
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

  useEffect(() => {
    if (!isMenuOpen || typeof document === 'undefined') return
    const { body } = document
    const previousOverflow = body.style.overflow
    body.style.overflow = 'hidden'
    return () => {
      body.style.overflow = previousOverflow
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    const mediaQuery = window.matchMedia('(min-width: 640px)')
    const handleMediaChange = (event) => {
      if (event.matches) {
        setIsMenuOpen(false)
      }
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange)
      return () => mediaQuery.removeEventListener('change', handleMediaChange)
    }

    mediaQuery.addListener(handleMediaChange)
    return () => mediaQuery.removeListener(handleMediaChange)
  }, [])

  useEffect(() => {
    if (!isMenuOpen || typeof window === 'undefined') return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  // --- 1. Kilit Nokta (Pozisyon) ---
  // Menü açıksa 'top-0' ol, kapalıysa scroll durumuna bak
  const headerOffsetClasses = isMenuOpen ? 'top-0' : (isSolid ? 'top-0' : 'top-3 sm:top-4')

  // --- 2. Kilit Nokta (Header Arkaplanı) ---
  // 'isMenuOpen' ise KOYU arkaplan, 'border-b' YOK
  // 'isMenuOpen' değilse, 'isSolid' ise KOYU arkaplan, 'border-b' VAR
  // İkisi de değilse TRANSPARAN arkaplan
  const headerClasses = `sticky ${headerOffsetClasses} z-40 transition-all duration-200 relative ${
    isMenuOpen
      ? 'bg-slate-950/90 backdrop-blur-sm' // Menü açıkken (koyu, çizgisiz)
      : isSolid
      ? 'border-b border-violet-500/20 bg-slate-950/90 backdrop-blur-sm' // Menü kapalı & Scrolled (koyu, çizgili)
      : 'border-b border-transparent bg-transparent backdrop-blur-0' // Menü kapalı & En Üstte (transparan)
  }`

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleNavSelection = (event, href) => {
    event.preventDefault()
    closeMenu()
    if (typeof window === 'undefined' || !href) return

    if (href.startsWith('#')) {
      requestAnimationFrame(() => {
        const target = document.querySelector(href)
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    } else {
      window.location.href = href
    }
  }

  const renderLanguageSwitcher = (extraClasses = '') => (
    <div
      className={`inline-flex items-center justify-center rounded-full border border-violet-500/30 bg-slate-950/60 p-1 text-xs font-semibold text-slate-200 shadow-[0_0_12px_rgba(76,29,149,0.25)] ${extraClasses}`}
    >
      {languages.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => {
            setLanguage(code)
            closeMenu()
          }}
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
  )

  return (
    <header ref={headerRef} className={headerClasses}>
      {/* Header'ın ana içeriği (Logo, Dil, Hamburger) */}
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-4 text-sm font-medium text-slate-200 sm:gap-6">
        <a href="#top" className="text-lg font-semibold tracking-tight text-violet-300" onClick={closeMenu}>
          {siteTitle}
        </a>
        <div className="flex flex-1 items-center justify-end gap-3 sm:gap-4">
          <div className="hidden flex-1 justify-center sm:flex">
            <GooeyNav
              items={navItems}
              particleCount={8}
              particleDistances={[60, 6]}
              particleR={50}
              animationTime={500}
              timeVariance={150}
            />
          </div>
          {renderLanguageSwitcher('inline-flex shrink-0')}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu-panel"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-violet-500/40 bg-slate-950/70 text-violet-200 shadow-[0_12px_30px_rgba(139,92,246,0.25)] transition hover:text-violet-100 sm:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                  isMenuOpen ? 'top-1/2 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'top-1/2 -translate-y-1/2'
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                  isMenuOpen ? 'bottom-1/2 -rotate-45' : 'bottom-0'
                }`}
              />
            </span>
          </button>
        </div>
      </div>
      
      {/* Mobil Menü Paneli */}
      <div
        id="mobile-menu-panel"
        aria-hidden={!isMenuOpen}
        className={`sm:hidden absolute top-full left-0 right-0 z-30 overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen ? 'max-h-[85vh] pointer-events-auto' : 'max-h-0 pointer-events-none'
        }`}
      >
        {/* --- 3. Kilit Nokta (Panel Arkaplanı) --- */}
        {/* Header'ın arkaplanıyla aynı ('bg-slate-950/90') */}
        <div className="border-b border-violet-500/20 bg-slate-950/90 backdrop-blur-sm shadow-lg px-6 pb-6 pt-2">
          
          <nav className="mt-2 flex items-center justify-center">
            {navItems.length > 0 ? (
              <ul className="w-full space-y-2 py-2 text-center">
                {navItems.map(({ href, label }) => (
                  <li key={href ?? label}>
                    <a
                      href={href ?? '#'}
                      onClick={(event) => handleNavSelection(event, href)}
                      className="inline-block w-full py-3 text-base font-medium text-slate-100 transition hover:text-violet-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <span className="text-sm uppercase tracking-[0.35em] text-slate-400">Menü hazırlanıyor</span>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}