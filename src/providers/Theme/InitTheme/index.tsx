import Script from 'next/script'
import React from 'react'

import { themeLocalStorageKey } from '../types'

export const InitTheme: React.FC = () => {
  return (
    <Script
      dangerouslySetInnerHTML={{
        __html: `
  (function () {
    var themeToSet = 'default'
    
    var savedTheme = window.localStorage.getItem('${themeLocalStorageKey}')

    if (savedTheme) {
      themeToSet = savedTheme
    }

    document.documentElement.setAttribute('data-theme', themeToSet)
    
  })();
  `,
      }}
      id="theme-script"
      strategy="beforeInteractive"
    />
  )
}