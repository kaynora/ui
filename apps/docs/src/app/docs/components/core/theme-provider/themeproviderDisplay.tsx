'use client'

import { Display } from '@/components/display'
import { ThemeProvider, ThemeContext, Button, T } from '@kaynora/ui'
import { useContext } from 'react'

const ThemeToggle = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) return null

  return (
    <Button onClick={() => ctx.setTheme(ctx.theme === 'dark' ? 'light' : 'dark')}>
      <T>Toggle theme (current: {ctx.theme})</T>
    </Button>
  )
}

const ThemeProviderDisplay = () => {
  return (
    <Display>
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    </Display>
  )
}

export {
  ThemeProviderDisplay,
}
