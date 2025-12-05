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
    <div className="flex items-center gap-0.5 bg-background/60 backdrop-blur-sm rounded-full px-0.5 py-[2px] text-[9px] shadow-sm">
      <button onClick={handlePrev} className="p-0.5 hover:opacity-70 transition-opacity">
        <ChevronLeft className="w-1.5 h-1.5 text-inherit" />
      </button>

      <span className="px-1 text-muted-foreground min-w-[48px] text-center">
        {value}
      </span>

      <button onClick={handleNext} className="p-0.5 hover:opacity-70 transition-opacity">
        <ChevronRight className="w-1.5 h-1.5 text-inherit" />
      </button>
    </div>
  )
}