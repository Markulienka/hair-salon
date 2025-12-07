export type ThemeName = 'default' | 'clean-slate' | 'amber-minimal' | 'kodama-grove' | 'soft-pop' | 'sunset-horizon'

export interface Theme {
  name: ThemeName
}

export const themeLocalStorageKey = 'payload-theme'

export const defaultTheme: Theme = {
  name: 'default',
}

export interface ThemeContextType {
  setTheme: (name: ThemeName) => void
  theme: ThemeName
}
