"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Search, Palette, Rocket, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "We Analyze Your Business",
    description: "We study your Google profile, ratings, reviews, and competition. We understand what makes your business special.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    number: "02",
    icon: Palette,
    title: "We Build Your Free Demo",
    description: "Using your real data — name, rating, photos — we create a custom demo website. You see it before paying anything.",
    color: "from-primary/20 to-teal/20",
  },
  {
    number: "03",
    icon: Rocket,
    title: "You Go Live in 48-72 Hours",
    description: "Once approved, we polish your site and launch it. Your digital presence starts capturing customers immediately.",
    color: "from-orange-500/20 to-yellow-500/20",
  },
]

export function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="how-it-works" className="py-20 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            From Zero to Online in <span className="text-primary">3 Simple Steps</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            No complicated processes. No long waiting times. We make getting your 
            business online as simple as possible.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent hidden lg:block -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="relative z-10 p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-xl">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <span className="inline-flex h-8 items-center justify-center rounded-full bg-primary px-4 text-sm font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`mt-4 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color}`}>
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 hidden lg:block -translate-y-1/2 z-20">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-primary/5 border border-primary/20 px-6 py-3">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              No upfront payment required. See your demo first.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
