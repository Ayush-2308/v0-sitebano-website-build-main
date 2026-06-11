"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Globe, 
  Users, 
  Search, 
  MessageCircle, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  TrendingUp,
  XCircle,
  CheckCircle
} from "lucide-react"

const problems = [
  {
    icon: XCircle,
    title: "No Website",
    description: "Customers search for you but find nothing — they go to competitors with websites",
  },
  {
    icon: XCircle,
    title: "Lost Customers",
    description: "Your 4.5+ star Google rating isn't converting into actual orders or bookings",
  },
  {
    icon: XCircle,
    title: "Weak Digital Presence",
    description: "No way to showcase your menu, services, prices, or special offers online",
  },
  {
    icon: XCircle,
    title: "No Lead Capture",
    description: "Missing out on WhatsApp inquiries, online orders, and table reservations",
  },
]

const solutions = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Your website goes live in 48-72 hours — not weeks or months",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "90% of your customers browse on phone. Your site works perfectly on every device",
  },
  {
    icon: Search,
    title: "SEO-Ready",
    description: "Optimized to rank on Google searches so local customers find you easily",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description: "One-click WhatsApp button for instant customer inquiries and orders",
  },
]

export function ProblemSolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            The Problem We Solve
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Great Reputation, <span className="text-primary">Zero Digital Presence</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Thousands of local businesses have amazing Google ratings but lose customers 
            daily because they don&apos;t have a website to capture that demand.
          </p>
        </motion.div>

        {/* Problem → Solution Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Problems Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                <XCircle className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Without a Website</h3>
            </div>
            
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="group flex gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-destructive/30 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 group-hover:bg-destructive/20 transition-colors">
                    <problem.icon className="h-5 w-5 text-destructive" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{problem.title}</h4>
                  <p className="text-sm text-muted-foreground">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">With SiteBano</h3>
            </div>
            
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="group flex gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <solution.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{solution.title}</h4>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { value: "4.0+", label: "Min Google Rating", sublabel: "We work with" },
            { value: "48hrs", label: "Delivery Time", sublabel: "Website live in" },
            { value: "100%", label: "Mobile Responsive", sublabel: "All devices" },
            { value: "24/7", label: "WhatsApp Support", sublabel: "Always available" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-card border border-border/50"
            >
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-foreground">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
