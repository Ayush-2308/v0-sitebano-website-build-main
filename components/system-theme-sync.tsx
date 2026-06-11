"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

/** Keep the website permanently synchronized with the operating-system theme. */
export function SystemThemeSync() {
  const { setTheme } = useTheme()

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const syncWithSystem = () => {
      setTheme("system")
      document.documentElement.style.colorScheme = mediaQuery.matches ? "dark" : "light"
    }

    syncWithSystem()
    mediaQuery.addEventListener("change", syncWithSystem)

    return () => mediaQuery.removeEventListener("change", syncWithSystem)
  }, [])

  return null
}
