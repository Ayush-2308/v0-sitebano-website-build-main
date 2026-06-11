"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"
import { SITEBANO_ASSETS } from "@/lib/sitebano-assets"

export function FaviconSwitcher() {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const href =
      resolvedTheme === "dark"
        ? SITEBANO_ASSETS.favicon.dark
        : SITEBANO_ASSETS.favicon.light

    const existing = document.querySelector<HTMLLinkElement>(
      'link[rel="icon"][data-sitebano-theme]'
    )

    if (existing) {
      existing.href = href
      return
    }

    const link = document.createElement("link")
    link.rel = "icon"
    link.type = "image/png"
    link.href = href
    link.setAttribute("data-sitebano-theme", "true")
    document.head.appendChild(link)
  }, [resolvedTheme])

  return null
}
