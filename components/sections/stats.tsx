"use client"

import { motion, useMotionValue, animate } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Users, Globe, Clock, Star } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: 12,
    suffix: "+",
    label: "Demo Requests",
    description: "Early business interest",
  },
  {
    icon: Globe,
    value: 72,
    suffix: "hrs",
    label: "Avg Delivery",
    description: "Website goes live",
  },
  {
    icon: Star,
    value: 4.6,
    suffix: "",
    label: "Early Feedback",
    description: "From demo conversations",
    decimal: true,
  },
  {
    icon: Clock,
    value: 24,
    suffix: "/7",
    label: "Support",
    description: "Always available",
  },
]

function Counter({ value, decimal = false }: { value: number; decimal?: boolean }) {
  const count = useMotionValue(0)
  const [displayValue, setDisplayValue] = useState(decimal ? "0.0" : "0")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-80px" })

  useEffect(() => {
    if (!isInView) {
      count.set(0)
      setDisplayValue(decimal ? "0.0" : "0")
      return
    }

    if (isInView) {
      count.set(0)
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(decimal ? latest.toFixed(1) : String(Math.round(latest)))
        },
      })
      return controls.stop
    }
  }, [isInView, value, count, decimal])

  return <motion.span ref={ref}>{displayValue}</motion.span>
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <section className="py-20 lg:py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={false}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 24, scale: 0.96 }
              }
              transition={{ duration: 0.5, delay: isInView ? index * 0.1 : 0 }}
              className="relative group"
            >
              <div className="relative p-6 lg:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all text-center">
                {/* Icon */}
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Value */}
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                  <Counter value={stat.value} decimal={stat.decimal} />
                  <span className="text-primary">{stat.suffix}</span>
                </div>

                {/* Label */}
                <div className="text-sm font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
