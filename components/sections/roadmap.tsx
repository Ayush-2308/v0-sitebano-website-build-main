"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Globe, Smartphone, Cpu, Rocket, Check } from "lucide-react"

const phases = [
  {
    phase: "Phase 1",
    title: "Website Development",
    status: "active",
    icon: Globe,
    description: "Premium websites for local businesses. Fast, mobile-first, SEO-ready.",
    features: ["1-5 page websites", "WhatsApp integration", "SEO optimization", "48-72 hour delivery"],
  },
  {
    phase: "Phase 2",
    title: "App Development",
    status: "upcoming",
    icon: Smartphone,
    description: "Custom mobile apps for businesses that need more than a website.",
    features: ["Android & iOS apps", "Order management", "Push notifications", "Customer loyalty"],
  },
  {
    phase: "Phase 3",
    title: "Automation Solutions",
    status: "planned",
    icon: Cpu,
    description: "Automate repetitive tasks and streamline business operations.",
    features: ["WhatsApp automation", "Inventory alerts", "Auto-responses", "Booking systems"],
  },
  {
    phase: "Phase 4",
    title: "Digital Growth Platform",
    status: "vision",
    icon: Rocket,
    description: "Complete digital transformation for local businesses at scale.",
    features: ["All-in-one dashboard", "Analytics & insights", "Multi-location support", "SaaS platform"],
  },
]

export function RoadmapSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "active":
        return "bg-primary text-primary-foreground"
      case "upcoming":
        return "bg-primary/10 text-primary border border-primary/25"
      case "planned":
        return "bg-muted text-muted-foreground border border-border dark:bg-white/8 dark:text-white/70 dark:border-white/10"
      default:
        return "bg-muted text-muted-foreground border border-border dark:bg-white/5 dark:text-white/50 dark:border-white/10"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active":
        return "Now Live"
      case "upcoming":
        return "Coming Soon"
      case "planned":
        return "Planned"
      default:
        return "Vision"
    }
  }

  return (
    <section className="bg-background py-16 text-foreground dark:bg-black dark:text-white lg:py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our Roadmap
          </span>
          <h2 className="text-3xl font-black tracking-tight text-foreground dark:text-white sm:text-4xl lg:text-5xl text-balance">
            Building the Future of <span className="text-primary">Local Business</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground dark:text-white/58 max-w-2xl mx-auto text-pretty">
            SiteBano is more than a web agency. We&apos;re building a complete digital 
            growth platform for local businesses.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-white/10 lg:-translate-x-1/2" />

          <div className="space-y-5 lg:space-y-6">
            {phases.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={false}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col lg:flex-row gap-4 lg:gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 top-0 lg:-translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-primary z-10 shadow-lg shadow-primary/20 dark:bg-black">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>

                {/* Content Card */}
                <div className={`ml-16 lg:ml-0 lg:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                }`}>
                  <div className={`p-5 rounded-2xl bg-card/80 border transition-all duration-300 hover:-translate-y-1 dark:bg-white/[0.04] ${
                    item.status === "active" 
                      ? "border-primary/50 shadow-lg shadow-emerald-500/15"
                      : "border-border hover:border-primary/30 dark:border-white/10"
                  }`}>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {item.phase}
                      </span>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${getStatusStyle(item.status)}`}>
                        {getStatusLabel(item.status)}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-bold text-foreground dark:text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground dark:text-white/56 text-sm mb-3">
                      {item.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-1.5">
                      {item.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                          <span className="text-xs text-muted-foreground dark:text-white/52">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternate layout */}
                <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
