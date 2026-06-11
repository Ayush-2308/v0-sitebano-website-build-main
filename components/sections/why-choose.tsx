"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Zap, 
  Smartphone, 
  Search, 
  Palette, 
  MessageCircle, 
  MapPin, 
  RefreshCw, 
  Headphones 
} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Your website goes live in 48-72 hours. No weeks of waiting.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "90% of customers browse on mobile. Your site works perfectly everywhere.",
  },
  {
    icon: Search,
    title: "SEO-Ready",
    description: "Built to rank on Google so local customers find you easily.",
  },
  {
    icon: Palette,
    title: "Premium Design",
    description: "Modern, professional designs that build trust and credibility.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description: "One-click WhatsApp for instant inquiries and orders.",
  },
  {
    icon: MapPin,
    title: "Local Focus",
    description: "We understand Indian local businesses. Strategies that work locally.",
  },
  {
    icon: RefreshCw,
    title: "Easy Revisions",
    description: "Multiple revision rounds included. We perfect it until you love it.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Always available on WhatsApp. Quick responses, real help.",
  },
]

export function WhyChooseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Built for <span className="text-primary">Local Business Success</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We&apos;re not just another web agency. We specialize in helping local 
            businesses like yours succeed online.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={false}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="relative h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
