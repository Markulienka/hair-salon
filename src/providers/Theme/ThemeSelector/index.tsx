'use client'

import React from 'react'
import type { ThemeName } from '../types'
import { useTheme } from '..'

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const themes: ThemeName[] = ['default', 'clean-slate', 'amber-minimal', 'kodama-grove', 'soft-pop', 'sunset-horizon']

  const handlePrevTheme = () => {
    const currentIndex = themes.indexOf(theme)
    const prevIndex = currentIndex === 0 ? themes.length - 1 : currentIndex - 1
    setTheme(themes[prevIndex])
  }

  const handleNextTheme = () => {
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  const themeName = theme.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center gap-1 bg-background/60 backdrop-blur-sm rounded-full px-1.5 py-1 text-xs shadow-sm">
        <button
          onClick={handlePrevTheme}
          className="w-4 h-4 flex items-center justify-center hover:opacity-70 transition-opacity text-muted-foreground"
          aria-label="Previous theme"
        >
          -
        </button>
        <button
          onClick={handleNextTheme}
          className="w-4 h-4 flex items-center justify-center hover:opacity-70 transition-opacity text-muted-foreground"
          aria-label="Next theme"
        >
          +
        </button>
        <span className="text-xs font-medium">{themeName}</span>
      </div>
    </div>
  )
}