'use client'

import { useState, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'

interface ProviderProps {
  children: React.ReactNode
}
function Provider({ children }: ProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div>{children}</div>
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

export default Provider
