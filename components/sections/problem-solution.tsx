"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  CheckCircle,
  Eye,
  Clock,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Smartphone,
  TrendingUp,
  XCircle,
} from "lucide-react"

const comparisons = [
  {
    problemTitle: "No Website",
    problemText: "Customers search your business online but do not find a proper website.",
    solutionTitle: "Professional Website",
    solutionText: "SiteBano gives your business a premium website where customers can see products, services, prices, offers and contact details.",
    result: "Online trust",
    icon: Eye,
  },
  {
    problemTitle: "Lost Customers",
    problemText: "People check your Google rating but leave because there is no clear next step.",
    solutionTitle: "Customer Lead Flow",
    solutionText: "Your website guides visitors to call, WhatsApp, order, book appointments or visit your store.",
    result: "More inquiries",
    icon: TrendingUp,
  },
  {
    problemTitle: "Weak Digital Presence",
    problemText: "Your business looks smaller than competitors who already have websites.",
    solutionTitle: "Premium Brand Image",
    solutionText: "A modern mobile-friendly website makes your business look serious, trusted and professional.",
    result: "Higher trust",
    icon: Smartphone,
  },
  {
    problemTitle: "No Google Visibility",
    problemText: "Local customers cannot discover your menu, services, products or offers from search.",
    solutionTitle: "SEO-Ready Pages",
    solutionText: "SiteBano builds pages with local SEO structure so customers can find your business faster on Google.",
    result: "More discovery",
    icon: Search,
  },
  {
    problemTitle: "No Lead Capture",
    problemText: "You miss WhatsApp inquiries, online orders, bookings and repeat customer actions.",
    solutionTitle: "WhatsApp Integration",
    solutionText: "One-click WhatsApp buttons turn website visitors into real leads, orders and bookings.",
    result: "Instant leads",
    icon: MessageCircle,
  },
]

const growthStats = [
  { value: "10x", label: "Growth Potential", sublabel: "From online conversion", icon: TrendingUp },
  { value: "48-72h", label: "Fast Launch", sublabel: "Website live quickly", icon: Clock },
  { value: "100%", label: "Mobile Ready", sublabel: "Works on every phone", icon: Smartphone },
  { value: "24/7", label: "Lead Capture", sublabel: "Always open online", icon: ShieldCheck },
]

export function ProblemSolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="relative overflow-hidden bg-secondary/30 py-16 text-foreground dark:bg-black lg:py-22" ref={ref}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(16,185,129,0.16),transparent_34%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Problem vs SiteBano Solution
          </span>
          <h2 className="text-3xl font-black tracking-tight text-foreground dark:text-white sm:text-4xl lg:text-5xl text-balance">
            What You Lose Without a Website, <span className="text-primary">What SiteBano Fixes</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground dark:text-white/60 text-pretty">
            A clean one-to-one comparison showing how SiteBano turns digital gaps into customer growth.
          </p>
        </motion.div>

        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mx-auto mb-6 hidden max-w-6xl grid-cols-[minmax(0,1fr)_4.5rem_minmax(0,1fr)] gap-5 lg:grid"
        >
          <div className="rounded-2xl border border-red-500/20 bg-red-500/8 p-4 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-300">Without Website</p>
          </div>
          <div className="flex items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="rounded-2xl border border-primary/30 bg-primary/10 p-4 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">With SiteBano</p>
          </div>
        </motion.div>

        <div className="mx-auto max-w-6xl space-y-5">
          {comparisons.map((item, index) => (
            <motion.div
              key={item.problemTitle}
              initial={false}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.18 + index * 0.07 }}
              className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_4.5rem_minmax(0,1fr)]"
            >
              <div className="group relative overflow-hidden rounded-[1.35rem] border border-red-500/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))] p-[1px] shadow-2xl shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-red-500/10">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-400/70 to-transparent" />
                <div className="absolute -left-20 top-0 h-32 w-32 rounded-full bg-red-500/10 blur-3xl transition-opacity group-hover:opacity-80" />
                <div className="relative h-full rounded-[1.28rem] bg-card/90 p-4 backdrop-blur-xl dark:bg-black/72">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 shadow-lg shadow-red-500/5">
                        <XCircle className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-300/80">Problem</p>
                        <h3 className="text-lg font-black text-foreground dark:text-white">{item.problemTitle}</h3>
                      </div>
                    </div>
                    <span className="rounded-full border border-red-500/15 bg-red-500/10 px-2.5 py-1 text-[10px] font-black text-red-300">
                      #{index + 1}
                    </span>
                  </div>
                  <p className="rounded-xl border border-border bg-background/60 p-3 text-sm leading-6 text-muted-foreground dark:border-white/8 dark:bg-white/[0.035] dark:text-white/58">
                    {item.problemText}
                  </p>
                  <div className="mt-3 flex items-center justify-between rounded-xl border border-red-500/15 bg-red-500/[0.07] px-3 py-2">
                    <span className="text-xs font-bold uppercase tracking-[0.12em] text-red-300/75">
                      Business impact
                    </span>
                    <span className="text-xs font-black text-red-300">Revenue leak</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative flex h-14 w-14 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
                  <div className="absolute hidden h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent lg:block" />
                  <div className="absolute h-10 w-px bg-gradient-to-b from-transparent via-primary to-transparent lg:hidden" />
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-card text-primary shadow-lg shadow-emerald-500/25 dark:bg-black">
                    <span className="absolute h-7 w-7 animate-ping rounded-full bg-primary/20" />
                    <Sparkles className="relative h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-[1.35rem] border border-primary/35 bg-[linear-gradient(135deg,rgba(16,185,129,0.18),rgba(255,255,255,0.02))] p-[1px] shadow-2xl shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-emerald-500/25">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="absolute -right-20 top-0 h-36 w-36 rounded-full bg-primary/20 blur-3xl transition-opacity group-hover:opacity-100" />
                <div className="relative h-full rounded-[1.28rem] bg-card/90 p-4 backdrop-blur-xl dark:bg-black/72">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/15 text-primary shadow-lg shadow-emerald-500/10">
                        <item.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">SiteBano Solution</p>
                        <h3 className="text-lg font-black text-foreground dark:text-white">{item.solutionTitle}</h3>
                      </div>
                    </div>
                    <span className="hidden rounded-full bg-primary px-3 py-1 text-xs font-black text-primary-foreground shadow-lg shadow-primary/20 sm:inline-flex">
                      {item.result}
                    </span>
                  </div>
                  <p className="rounded-xl border border-primary/15 bg-primary/[0.08] p-3 text-sm leading-6 text-muted-foreground dark:text-white/70">
                    {item.solutionText}
                  </p>
                  <div className="mt-3 flex items-center justify-between rounded-xl border border-primary/20 bg-primary/[0.09] px-3 py-2">
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-primary">
                      <CheckCircle className="h-3.5 w-3.5" />
                      Growth result
                    </span>
                    <span className="text-xs font-black text-primary">{item.result}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-3 lg:grid-cols-4"
        >
          {growthStats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-border bg-card/70 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-primary/10 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <stat.icon className="mx-auto mb-3 h-5 w-5 text-primary" />
              <div className="mb-1 text-3xl font-black text-primary">{stat.value}</div>
              <div className="text-sm font-bold text-foreground dark:text-white">{stat.label}</div>
              <div className="text-xs text-muted-foreground dark:text-white/45">{stat.sublabel}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
