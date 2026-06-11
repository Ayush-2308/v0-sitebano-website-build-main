"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { SITEBANO_ASSETS } from "@/lib/sitebano-assets"

const LOGO_SIZES = {
  nav: "h-11 sm:h-12 lg:h-14",
  footer: "h-12 sm:h-14 lg:h-16",
  hero: "h-32 sm:h-36 md:h-40 lg:h-48",
} as const

type LogoVariant = keyof typeof LOGO_SIZES

type ThemeAwareLogoProps = {
  variant?: LogoVariant
  className?: string
  priority?: boolean
}

/** Logo: fixed slot, only opacity swaps on theme — no layout shift */
export function ThemeAwareLogo({
  variant = "nav",
  className,
  priority = false,
}: ThemeAwareLogoProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"
  const sizeClass = LOGO_SIZES[variant]

  const layerClass = cn(
    "h-full w-auto max-w-none object-contain object-left",
    "transition-opacity duration-300 ease-in-out"
  )

  return (
    <span
      className={cn(
        "relative inline-flex items-center align-middle shrink-0",
        sizeClass,
        className
      )}
      aria-label="SiteBano"
    >
      {/* Spacer sets stable width/height from logo artwork */}
      <Image
        src={SITEBANO_ASSETS.logo.light}
        alt=""
        width={400}
        height={120}
        priority={priority}
        aria-hidden
        className={cn("h-full w-auto opacity-0 pointer-events-none select-none", sizeClass)}
      />
      {mounted ? (
        <>
          <Image
            src={SITEBANO_ASSETS.logo.light}
            alt="SiteBano"
            width={400}
            height={120}
            priority={priority}
            className={cn(
              "absolute left-0 top-0",
              layerClass,
              isDark ? "opacity-0" : "opacity-100"
            )}
          />
          <Image
            src={SITEBANO_ASSETS.logo.dark}
            alt="SiteBano"
            width={400}
            height={120}
            priority={priority}
            className={cn(
              "absolute left-0 top-0",
              layerClass,
              isDark ? "opacity-100" : "opacity-0"
            )}
          />
        </>
      ) : null}
    </span>
  )
}

type ThemeAwareProfileProps = {
  className?: string
  priority?: boolean
}

/** Profile: full image visible, no crop */
export function ThemeAwareProfile({
  className,
  priority = false,
}: ThemeAwareProfileProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  const layerClass = cn(
    "w-full h-auto max-w-full object-contain object-center",
    "transition-opacity duration-300 ease-in-out",
    className
  )

  return (
    <div className="relative w-full">
      {!mounted ? (
        <div className="w-full aspect-video animate-pulse bg-muted/20 rounded-2xl" />
      ) : (
        <>
          <Image
            src={SITEBANO_ASSETS.profile.light}
            alt="Ayush Gupta - Founder & Developer at SiteBano"
            width={1600}
            height={900}
            priority={priority}
            className={cn(layerClass, isDark ? "opacity-0" : "opacity-100")}
          />
          <Image
            src={SITEBANO_ASSETS.profile.dark}
            alt="Ayush Gupta - Founder & Developer at SiteBano"
            width={1600}
            height={900}
            priority={priority}
            className={cn(
              "absolute left-0 top-0 w-full",
              layerClass,
              isDark ? "opacity-100" : "opacity-0"
            )}
          />
        </>
      )}
    </div>
  )
}
