export type ThemeName = 'default' | 'clean-slate' | 'amber-minimal' | 'kodama-grove' | 'soft-pop' | 'sunset-horizon'
export type ThemeMode = 'light' | 'dark'

export interface Theme {
  name: ThemeName
  mode: ThemeMode
}

export const themeLocalStorageKey = 'payload-theme'
export const themeModeLocalStorageKey = 'payload-theme-mode'

export const defaultTheme: Theme = {
  name: 'default',
  mode: 'light'
}

export interface ThemeContextType {
  setTheme: (name: ThemeName) => void
  setMode: (mode: ThemeMode) => void
  theme: ThemeName
  mode: ThemeMode
}
