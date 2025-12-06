'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { ThemeContextType, ThemeName, ThemeMode, themeLocalStorageKey, themeModeLocalStorageKey } from './types'

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeName>('default')
  const [mode, setModeState] = useState<ThemeMode>('light')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(themeLocalStorageKey) as ThemeName | null
    const savedMode = window.localStorage.getItem(themeModeLocalStorageKey) as ThemeMode | null

    if (savedTheme && ['default', 'clean-slate', 'amber-minimal', 'kodama-grove', 'soft-pop', 'sunset-horizon'].includes(savedTheme)) {
      setThemeState(savedTheme)
    }
    if (savedMode && ['light', 'dark'].includes(savedMode)) {
      setModeState(savedMode)
    }
  }, [])

  const setTheme = (name: ThemeName) => {
    setThemeState(name)
    window.localStorage.setItem(themeLocalStorageKey, name)
    document.documentElement.setAttribute('data-theme', name)
  }

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode)
    window.localStorage.setItem(themeModeLocalStorageKey, newMode)

    if (newMode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}