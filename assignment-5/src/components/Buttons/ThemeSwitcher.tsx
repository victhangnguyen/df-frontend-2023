'use client'

import { useTheme } from 'next-themes'
//! imp Comps
import { useState, useEffect } from 'react'
import ToggleButton from './ToggleButton'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ToggleButton
      onClick={(toggle) => {
        console.log('toggle:', toggle)
        setTheme(toggle ? 'dark' : 'light')
      }}
      toggled={theme !== 'light'}
    />
  )
}

export default ThemeSwitcher
