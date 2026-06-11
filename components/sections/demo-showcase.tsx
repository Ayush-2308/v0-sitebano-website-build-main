"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import {
  ArrowUpRight,
  BedDouble,
  Building2,
  Dumbbell,
  GraduationCap,
  Scissors,
  ShoppingBag,
  Stethoscope,
  Utensils,
} from "lucide-react"
import { useRef } from "react"

const categories = [
  { label: "Grocery Store", caption: "Orders & delivery", icon: ShoppingBag, side: "left", y: 70 },
  { label: "Restaurant", caption: "Menu & reservations", icon: Utensils, side: "right", y: 70 },
  { label: "Salon", caption: "Services & bookings", icon: Scissors, side: "left", y: 210 },
  { label: "Gym", caption: "Plans & enquiries", icon: Dumbbell, side: "right", y: 210 },
  { label: "Clinic", caption: "Care & appointments", icon: Stethoscope, side: "left", y: 350 },
  { label: "Real Estate", caption: "Properties & leads", icon: Building2, side: "right", y: 350 },
  { label: "Coaching Institute", caption: "Courses & admissions", icon: GraduationCap, side: "left", y: 490 },
  { label: "Hotel & Guest House", caption: "Rooms & reservations", icon: BedDouble, side: "right", y: 490 },
] as const

const connectionPaths = categories.map((category) => {
  const endX = category.side === "left" ? 250 : 850
  const controlX = category.side === "left" ? 435 : 665
  const endY = category.y + 55
  return `M550 315 C${controlX} 315 ${controlX} ${endY} ${endX} ${endY}`
})

function MindMapLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center">
      <Image
        src="/images/sitebano-s-mark.png"
        alt=""
        width={512}
        height={512}
        priority
        className={compact ? "h-14 w-14 object-contain" : "h-[74px] w-[74px] object-contain"}
      />
      <div className={compact ? "mt-0.5 text-xl font-semibold" : "mt-0.5 text-[28px] font-semibold leading-none"}>
        <span className="text-foreground">Site</span>
        <span className="text-primary">Bano</span>
      </div>
      <p className={compact ? "mt-1 text-[9px] font-semibold text-muted-foreground" : "mt-1.5 text-[10px] font-semibold text-muted-foreground"}>
        Your Customers Are Online. <span className="text-primary">Are You?</span>
      </p>
    </div>
  )
}

export function DemoShowcaseSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative overflow-hidden bg-secondary/30 py-20 transition-colors duration-500 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--glow),transparent_50%)] opacity-75" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            What We Build
          </span>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Websites for Every{" "}
            <span className="text-primary">Local Business.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            SiteBano builds focused digital experiences for the businesses people
            search for every day.
          </p>
        </motion.div>

        <div className="relative mx-auto hidden h-[630px] max-w-[1100px] lg:block">
          <svg
            aria-hidden="true"
            viewBox="0 0 1100 630"
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="map-line" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--border)" />
                <stop offset="52%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="var(--border)" />
              </linearGradient>
              <filter id="map-dot-glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {connectionPaths.map((path, index) => (
              <g key={path}>
                <motion.path
                  d={path}
                  fill="none"
                  stroke="url(#map-line)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? { pathLength: 1, opacity: 0.75 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.8, delay: 0.12 + index * 0.07 }}
                />
                <motion.circle
                  r="4"
                  fill="var(--primary)"
                  filter="url(#map-dot-glow)"
                  initial={{ opacity: 0 }}
                  animate={
                    isInView
                      ? { opacity: [0, 1, 1, 0], offsetDistance: ["0%", "100%"] }
                      : { opacity: 0 }
                  }
                  style={{ offsetPath: `path("${path}")` }}
                  transition={{
                    duration: 2.7,
                    delay: 0.9 + index * 0.28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </g>
            ))}
          </svg>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1, y: [0, -6, 0] }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute left-1/2 top-[315px] z-20 h-44 w-56 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg border border-primary/40 bg-card shadow-[0_0_70px_var(--glow-strong)]"
          >
            <MindMapLogo />
            <span className="pointer-events-none absolute inset-3 rounded-md border border-dashed border-primary/25" />
          </motion.div>

          {categories.map((category, index) => {
            const Icon = category.icon
            const sideClass = category.side === "left" ? "left-0" : "right-0"

            return (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        scale: 1,
                        y: [0, index % 2 === 0 ? -5 : 5, 0],
                      }
                    : { opacity: 0, scale: 0.88 }
                }
                transition={{
                  opacity: { duration: 0.4, delay: 0.3 + index * 0.07 },
                  scale: { duration: 0.4, delay: 0.3 + index * 0.07 },
                  y: {
                    duration: 4 + index * 0.18,
                    delay: index * 0.12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{ scale: 1.04, y: -4 }}
                className={`absolute z-20 flex h-[110px] w-[250px] items-center gap-4 rounded-lg border border-border bg-card p-4 text-left shadow-lg transition-colors hover:border-primary/60 hover:shadow-[0_14px_35px_var(--glow)] ${sideClass}`}
                style={{ top: category.y }}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold text-foreground">
                    {category.label}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {category.caption}
                  </span>
                </span>
              </motion.div>
            )
          })}
        </div>

        <div className="relative mx-auto mb-10 max-w-2xl lg:hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            className="relative z-10 mx-auto h-32 w-52 overflow-hidden rounded-lg border border-primary/40 bg-card shadow-[0_0_45px_var(--glow)]"
          >
            <MindMapLogo compact />
          </motion.div>

          <div className="absolute left-1/2 top-32 bottom-12 w-px -translate-x-1/2 bg-primary/35" />

          <div className="relative mt-10 grid grid-cols-2 gap-x-6 gap-y-5 sm:gap-x-12">
            {categories.map((category, index) => {
              const Icon = category.icon
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={category.label}
                  initial={{ opacity: 0, x: isLeft ? -14 : 14 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -14 : 14 }}
                  transition={{ delay: 0.18 + index * 0.07 }}
                  className="relative flex min-h-28 flex-col items-center justify-center rounded-lg border border-border bg-card p-3 text-center shadow-md"
                >
                  <span
                    className={`absolute top-1/2 h-px w-3 bg-primary/40 sm:w-6 ${
                      isLeft ? "-right-3 sm:-right-6" : "-left-3 sm:-left-6"
                    }`}
                  />
                  <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">{category.label}</span>
                  <span className="mt-1 text-[11px] text-muted-foreground">{category.caption}</span>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.45, delay: 0.7 }}
          className="flex justify-center"
        >
          <a
            href="#contact-form"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_var(--glow-strong)]"
          >
            Discuss Your Website
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
