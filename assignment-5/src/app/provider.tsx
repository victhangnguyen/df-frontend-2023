'use client'

import { useState, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import { generateData } from '../fakeDatabase'

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

  generateData()

  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      {children}
    </ThemeProvider>
  )
}

export default Provider
