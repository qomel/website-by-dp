'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { t } from '@/lib/translations'

const LangContext = createContext({ lang: 'en', setLang: () => {}, tr: t['en'] })

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')

  // Wczytaj zapisany język przy starcie
  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'pl' || saved === 'en') setLang(saved)
  }, [])

  // Zapisz przy każdej zmianie
  const handleSetLang = (l) => {
    setLang(l)
    localStorage.setItem('lang', l)
  }

  return (
    <LangContext.Provider value={{ lang, setLang: handleSetLang, tr: t[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
