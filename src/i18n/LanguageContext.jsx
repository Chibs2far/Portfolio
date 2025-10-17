import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { dictionaries } from './dictionaries'

const LanguageContext = createContext(null)

const FALLBACK_LANG = 'tr'

const getNestedValue = (obj, path) => {
  if (!path) return obj
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj)
}

const getInitialLanguage = (defaultLang) => {
  if (typeof window === 'undefined') return defaultLang
  return localStorage.getItem('lang') ?? defaultLang
}

export function LanguageProvider({ children, defaultLang = FALLBACK_LANG }) {
  const [lang, setLang] = useState(() => getInitialLanguage(defaultLang))

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', lang)
    }
  }, [lang])

  const setLanguage = useCallback((nextLang) => {
    setLang(nextLang in dictionaries ? nextLang : FALLBACK_LANG)
  }, [])

  const value = useMemo(() => {
    const translate = (path) => {
      const activeDict = dictionaries[lang] ?? dictionaries[FALLBACK_LANG]
      const fallbackDict = dictionaries[FALLBACK_LANG]
      const result = getNestedValue(activeDict, path)
      if (result !== undefined) return result
      return getNestedValue(fallbackDict, path)
    }

    return {
      lang,
      setLanguage,
      t: translate,
    }
  }, [lang, setLanguage])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
