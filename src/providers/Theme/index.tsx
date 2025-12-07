'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { ThemeContextType, ThemeName, themeLocalStorageKey } from './types'

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeName>('default')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(themeLocalStorageKey) as ThemeName | null

    if (savedTheme && ['default', 'clean-slate', 'amber-minimal', 'kodama-grove', 'soft-pop', 'sunset-horizon'].includes(savedTheme)) {
      setThemeState(savedTheme)
    }
  }, [])

  const setTheme = (name: ThemeName) => {
    setThemeState(name)
    window.localStorage.setItem(themeLocalStorageKey, name)
    document.documentElement.setAttribute('data-theme', name)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}