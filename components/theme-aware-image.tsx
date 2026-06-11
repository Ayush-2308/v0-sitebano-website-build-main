"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { SITEBANO_ASSETS } from "@/lib/sitebano-assets"

const LOGO_SIZES = {
  nav: "h-16 sm:h-20 lg:h-24",
  footer: "h-12 sm:h-14 lg:h-16",
  hero: "h-32 sm:h-36 md:h-40 lg:h-48",
} as const

type LogoVariant = keyof typeof LOGO_SIZES

type ThemeAwareLogoProps = {
  variant?: LogoVariant
  className?: string
  imageClassName?: string
  priority?: boolean
}

/** Logo: fixed slot, only opacity swaps on theme — no layout shift */
export function ThemeAwareLogo({
  variant = "nav",
  className,
  imageClassName,
  priority = false,
}: ThemeAwareLogoProps) {
  const sizeClass = LOGO_SIZES[variant]

  const layerClass = cn(
    "h-full w-auto max-w-none object-contain object-left",
    "transition-[opacity,transform] duration-300 ease-in-out",
    imageClassName
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
      <Image
        src={SITEBANO_ASSETS.logo.light}
        alt="SiteBano"
        width={400}
        height={120}
        priority={priority}
        className={cn(layerClass, "opacity-100 dark:opacity-0")}
      />
      <Image
        src={SITEBANO_ASSETS.logo.dark}
        alt="SiteBano"
        width={400}
        height={120}
        priority={priority}
        className={cn("absolute left-0 top-0 opacity-0 dark:opacity-100", layerClass)}
      />
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
  const layerClass = cn(
    "w-full h-auto max-w-full object-contain object-center",
    "transition-opacity duration-300 ease-in-out",
    className
  )

  return (
    <div className="relative w-full">
      <Image
        src={SITEBANO_ASSETS.profile.light}
        alt="Ayush Gupta - Founder & Developer at SiteBano"
        width={1600}
        height={900}
        priority={priority}
        className={cn(layerClass, "opacity-100 dark:opacity-0")}
      />
      <Image
        src={SITEBANO_ASSETS.profile.dark}
        alt="Ayush Gupta - Founder & Developer at SiteBano"
        width={1600}
        height={900}
        priority={priority}
        className={cn("absolute left-0 top-0 w-full opacity-0 dark:opacity-100", layerClass)}
      />
    </div>
  )
}
