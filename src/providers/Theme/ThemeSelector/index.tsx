'use client'

import { ChevronLeft, ChevronRight, Moon, Sun } from 'lucide-react'
import React from 'react'

import type { ThemeName } from '../types'
import { useTheme } from '..'

export const ThemeSelector: React.FC = () => {
  const { theme, mode, setTheme, setMode } = useTheme()

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

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="flex items-center gap-2">
      {/* Theme Selector */}
      <div className="flex items-center gap-0.5 bg-background/60 backdrop-blur-sm rounded-full px-0.5 py-[2px] text-[9px] shadow-sm">
        <button onClick={handlePrevTheme} className="p-0.5 hover:opacity-70 transition-opacity">
          <ChevronLeft className="w-1.5 h-1.5 text-inherit" />
        </button>

        <span className="px-1 text-muted-foreground min-w-[48px] text-center">
          {theme}
        </span>

        <button onClick={handleNextTheme} className="p-0.5 hover:opacity-70 transition-opacity">
          <ChevronRight className="w-1.5 h-1.5 text-inherit" />
        </button>
      </div>

      {/* Light/Dark Toggle */}
      <button
        onClick={toggleMode}
        className="p-1 bg-background/60 backdrop-blur-sm rounded-full hover:opacity-70 transition-opacity shadow-sm"
        aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      >
        {mode === 'dark' ? (
          <Moon className="w-3 h-3" />
        ) : (
          <Sun className="w-3 h-3" />
        )}
      </button>
    </div>
  )
}