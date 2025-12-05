'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

import type { Theme } from './types'

import { useTheme } from '..'
import { themeLocalStorageKey } from './types'

export const ThemeSelector: React.FC = () => {
  const { setTheme } = useTheme()
  const [value, setValue] = useState<Theme>('light')

  const themes: Theme[] = ['light', 'dark', 'clean-slate', 'amber-minimal']

  const onThemeChange = (themeToSet: Theme) => {
    setTheme(themeToSet)
    setValue(themeToSet)
  }

  React.useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey) as Theme
    setValue(preference ?? 'light')
  }, [])

  const handlePrev = () => {
    const currentIndex = themes.indexOf(value)
    const prevIndex = currentIndex === 0 ? themes.length - 1 : currentIndex - 1
    onThemeChange(themes[prevIndex])
  }

  const handleNext = () => {
    const currentIndex = themes.indexOf(value)
    const nextIndex = (currentIndex + 1) % themes.length
    onThemeChange(themes[nextIndex])
  }

  return (
    <div className="flex items-center gap-0.5 bg-background/80 backdrop-blur-sm border border-border rounded-full p-1">
      <button onClick={handlePrev} className="p-0.5 hover:opacity-70 transition-opacity">
        <ChevronLeft className="w-3 h-3 text-inherit" />
      </button>

      <span className="text-xs px-2 text-muted-foreground min-w-20 text-center">
        {value}
      </span>

      <button onClick={handleNext} className="p-0.5 hover:opacity-70 transition-opacity">
        <ChevronRight className="w-3 h-3 text-inherit" />
      </button>
    </div>
  )
}