export type Theme = 'dark' | 'light' | 'clean-slate' | 'amber-minimal'

export interface ThemeContextType {
  setTheme: (theme: Theme | null) => void
  theme?: Theme | null
}

export function themeIsValid(string: null | string): string is Theme {
  return string ? ['dark', 'light', 'clean-slate', 'amber-minimal'].includes(string) : false
}
