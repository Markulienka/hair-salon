'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

import type { Theme } from './types'

import { useTheme } from '..'
import { themeLocalStorageKey } from './types'

export const ThemeSelector: React.FC = () => {
  const { setTheme } = useTheme()
  const [value, setValue] = useState<Theme>('light')

  const onThemeChange = (themeToSet: Theme) => {
    setTheme(themeToSet)
    setValue(themeToSet)
  }

  React.useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey) as Theme
    setValue(preference ?? 'light')
  }, [])

  const handlePrev = () => {
    const newTheme = value === 'dark' ? 'light' : 'dark'
    onThemeChange(newTheme as Theme)
  }

  const handleNext = () => {
    const newTheme = value === 'light' ? 'dark' : 'light'
    onThemeChange(newTheme as Theme)
  }

  return (
    <div className="flex items-center gap-0.5 bg-muted/30 backdrop-blur-sm border border-border/30 rounded-full p-1 shadow-sm">
      <button onClick={handlePrev} className="p-0.5 hover:opacity-70 transition-opacity">
        <ChevronLeft className="w-3 h-3 text-inherit" />
      </button>
      <button onClick={handleNext} className="p-0.5 hover:opacity-70 transition-opacity">
        <ChevronRight className="w-3 h-3 text-inherit" />
      </button>
    </div>
  )
}
