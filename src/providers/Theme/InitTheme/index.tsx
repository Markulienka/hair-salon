import Script from 'next/script'
import React from 'react'

import { themeLocalStorageKey, themeModeLocalStorageKey } from '../types'

export const InitTheme: React.FC = () => {
  return (
    <Script
      dangerouslySetInnerHTML={{
        __html: `
  (function () {
    function getImplicitPreference() {
      var mediaQuery = '(prefers-color-scheme: dark)'
      var mql = window.matchMedia(mediaQuery)
      var hasImplicitPreference = typeof mql.matches === 'boolean'

      if (hasImplicitPreference) {
        return mql.matches ? 'dark' : 'light'
      }

      return 'light'
    }

    var themeToSet = 'default'
    var modeToSet = 'light'
    
    var savedTheme = window.localStorage.getItem('${themeLocalStorageKey}')
    var savedMode = window.localStorage.getItem('${themeModeLocalStorageKey}')

    if (savedTheme) {
      themeToSet = savedTheme
    }

    if (savedMode) {
      modeToSet = savedMode
    } else {
      modeToSet = getImplicitPreference()
    }

    document.documentElement.setAttribute('data-theme', themeToSet)
    
    if (modeToSet === 'dark') {
      document.documentElement.classList.add('dark')
    }
  })();
  `,
      }}
      id="theme-script"
      strategy="beforeInteractive"
    />
  )
}