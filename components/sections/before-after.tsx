"use client"

import { motion, useInView } from "framer-motion"
import { ArrowRight, CheckCircle2, TrendingUp, XCircle } from "lucide-react"
import { useRef } from "react"

const withoutWebsite = [
  "Customers cannot find you online",
  "No online inquiries",
  "No digital presence",
  "Lost opportunities",
]

const withSiteBano = [
  "Professional Website",
  "WhatsApp Orders",
  "Google Visibility",
  "More Customers",
]

const stats = [
  { value: "3x", label: "better trust signal" },
  { value: "50+", label: "business launches" },
  { value: "72h", label: "premium delivery" },
]

export function BeforeAfterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="bg-background py-20 text-foreground dark:bg-black dark:text-white lg:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Before vs After
          </span>
          <h2 className="text-3xl font-black tracking-tight text-foreground dark:text-white sm:text-4xl lg:text-5xl">
            From Offline Reputation to Online Growth
          </h2>
          <p className="mt-4 text-lg text-muted-foreground dark:text-white/60">
            Your business may already be trusted locally. SiteBano helps that trust convert online.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-2xl border border-border bg-card/80 p-6 dark:border-white/10 dark:bg-white/[0.035]"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-black text-foreground dark:text-white">Without Website</h3>
              <span className="rounded-full border border-border px-3 py-1 text-xs font-bold text-muted-foreground dark:border-white/10 dark:text-white/55">
                Offline only
              </span>
            </div>
            <div className="space-y-4">
              {withoutWebsite.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-border bg-background/60 p-4 dark:border-white/8 dark:bg-black/40">
                  <XCircle className="h-5 w-5 shrink-0 text-muted-foreground dark:text-white/35" />
                  <span className="text-sm font-medium text-muted-foreground dark:text-white/65">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="flex items-center justify-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/35 bg-primary text-primary-foreground shadow-2xl shadow-primary/30">
              <ArrowRight className="h-6 w-6" />
            </div>
          </motion.div>

          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-primary/35 bg-primary/10 p-6 shadow-2xl shadow-emerald-500/15"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-black text-foreground dark:text-white">With SiteBano</h3>
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                Growth ready
              </span>
            </div>
            <div className="space-y-4">
              {withSiteBano.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-primary/20 bg-background/60 p-4 dark:bg-black/40">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-bold text-foreground dark:text-white">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-8 grid gap-4 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border bg-card/80 p-5 dark:border-white/10 dark:bg-white/[0.04]">
              <TrendingUp className="mb-3 h-5 w-5 text-primary" />
              <p className="text-3xl font-black text-foreground dark:text-white">{stat.value}</p>
              <p className="text-sm text-muted-foreground dark:text-white/52">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
