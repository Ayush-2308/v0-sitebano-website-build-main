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

    const links = document.querySelectorAll<HTMLLinkElement>(
      'link[rel="icon"], link[rel="shortcut icon"]'
    )

    links.forEach((link) => {
      link.type = "image/png"
      link.href = href
    })

    if (links.length === 0) {
      const link = document.createElement("link")
      link.rel = "icon"
      link.type = "image/png"
      link.href = href
      document.head.appendChild(link)
    }
  }, [resolvedTheme])

  return null
}
