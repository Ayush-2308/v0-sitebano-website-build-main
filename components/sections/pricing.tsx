"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Check, X, Star, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const packages = [
  {
    id: "basic",
    name: "Basic",
    tag: "Starter",
    price: "2,999",
    deliveryTime: "24 hrs",
    description: "Perfect for businesses that need a simple online presence quickly.",
    popular: false,
    headerBg: "bg-secondary",
    headerText: "text-secondary-foreground",
    tagStyle: "bg-secondary border border-border text-muted-foreground",
    buttonStyle: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    maintenance: "700",
    features: [
      { text: "1-page website", included: true },
      { text: "Business name + tagline", included: true },
      { text: "WhatsApp + Call button", included: true },
      { text: "Address + Timings", included: true },
      { text: "Google Maps link", included: true },
      { text: "3 customer reviews section", included: true },
      { text: "Mobile friendly design", included: true },
      { text: "Product list with prices", included: false },
      { text: "Photo gallery", included: false },
      { text: "SEO optimization", included: false },
      { text: "WhatsApp order form", included: false },
    ],
    support: "7 days free support",
    revisions: "1 revision round",
  },
  {
    id: "standard",
    name: "Standard",
    tag: "Most Popular",
    price: "5,499",
    deliveryTime: "48 hrs",
    description: "Best value for serious businesses that want to attract more customers.",
    popular: true,
    headerBg: "bg-gradient-to-br from-[#FF6B00] to-[#FF8C35]",
    headerText: "text-white",
    tagStyle: "bg-white/20 text-white",
    buttonStyle: "bg-[#FF6B00] text-white hover:bg-[#e55f00]",
    maintenance: "1,000",
    features: [
      { text: "5-page website (Home, Products, About, Reviews, Contact)", included: true },
      { text: "Product categories with grid layout", included: true },
      { text: "6-8 products with prices", included: true },
      { text: "Photo gallery (your real photos)", included: true },
      { text: "Google Maps live embed", included: true },
      { text: "Offer banner on top", included: true },
      { text: "Owner photo + name section", included: true },
      { text: "Basic SEO — rank on Google", included: true },
      { text: "Google Search Console submit", included: true },
      { text: "2 revision rounds", included: true },
      { text: "WhatsApp order form", included: false },
      { text: "Animated counters", included: false },
    ],
    support: "1 month free support",
    revisions: "2 revision rounds",
  },
  {
    id: "advanced",
    name: "Advanced",
    tag: "Premium",
    price: "9,999",
    deliveryTime: "72 hrs",
    description: "Full-featured website with advanced features to maximize conversions.",
    popular: false,
    headerBg: "bg-gradient-to-br from-[#1B4F8A] to-[#2E86C1]",
    headerText: "text-white",
    tagStyle: "bg-white/15 text-white",
    buttonStyle: "bg-[#1B4F8A] text-white hover:bg-[#164070]",
    maintenance: "1,500",
    features: [
      { text: "Everything in Standard +", included: true, highlight: true },
      { text: "WhatsApp order form (checkbox selection)", included: true },
      { text: "Animated counters (5000+ customers)", included: true },
      { text: "WhatsApp popup (auto after 30 sec)", included: true },
      { text: "FAQ section (8 common questions)", included: true },
      { text: "Referral program section", included: true },
      { text: "Bulk order section", included: true },
      { text: "Advanced SEO — 5 keywords target", included: true },
      { text: "Google My Business setup/optimize", included: true },
      { text: "Speed optimization — 90+ PageSpeed", included: true },
      { text: "3 months free support", included: true },
    ],
    support: "3 months free support",
    revisions: "3 revision rounds",
  },
]

const addOns = [
  { name: "Real Photo Shoot (on-site)", price: "1,500", type: "one-time" },
  { name: "30-Second Intro Video", price: "2,000", type: "one-time" },
  { name: "Google My Business Setup", price: "1,500", type: "one-time" },
  { name: "WhatsApp Order Form", price: "2,500", type: "one-time" },
  { name: "Logo Design (3 options)", price: "999", type: "one-time" },
  { name: "Social Media Management", price: "2,500", type: "/month" },
]

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showAddOns, setShowAddOns] = useState(false)
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)

  const getPlanMotion = (pkg: (typeof packages)[number]) => {
    if (!isInView) {
      return { opacity: 0, y: 30, x: 0, scale: 1, rotateY: 0 }
    }

    if (!hoveredPlan) {
      return {
        opacity: 1,
        y: 0,
        x: 0,
        scale: pkg.popular ? 1.05 : 1,
        rotateY: 0,
      }
    }

    const isHovered = hoveredPlan === pkg.id
    const sidePush = pkg.id === "basic" ? -18 : pkg.id === "advanced" ? 18 : 0

    if (isHovered) {
      return {
        opacity: 1,
        y: -18,
        x: sidePush,
        scale: pkg.popular ? 1.1 : 1.06,
        rotateY: pkg.id === "basic" ? -3 : pkg.id === "advanced" ? 3 : 0,
      }
    }

    return {
      opacity: 0.62,
      y: 14,
      x: pkg.id === "basic" ? -8 : pkg.id === "advanced" ? 8 : 0,
      scale: 0.94,
      rotateY: pkg.id === "basic" ? 4 : pkg.id === "advanced" ? -4 : 0,
    }
  }

  return (
    <section id="pricing" className="py-20 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Pricing
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose the package that fits your business. No hidden fees. 
            See your demo first, pay only if you like it.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 [perspective:1200px]">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={getPlanMotion(pkg)}
              transition={{
                type: hoveredPlan ? "spring" : "tween",
                stiffness: 240,
                damping: 22,
                duration: 0.5,
                delay: hoveredPlan ? 0 : index * 0.1,
              }}
              onMouseEnter={() => setHoveredPlan(pkg.id)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={cn(
                "relative rounded-2xl bg-card border overflow-hidden transition-shadow duration-300 transform-gpu will-change-transform cursor-pointer",
                pkg.popular
                  ? "border-[#FF6B00]/50 shadow-xl scale-[1.02] lg:scale-105"
                  : "border-border/50 hover:border-border",
                hoveredPlan === pkg.id && "z-20 shadow-2xl emerald-glow-strong",
                hoveredPlan && hoveredPlan !== pkg.id && "z-0"
              )}
            >
              {/* Header */}
              <div className={cn("p-6 pb-4", pkg.headerBg)}>
                <span className={cn("inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3", pkg.tagStyle)}>
                  {pkg.popular && <Star className="inline h-3 w-3 mr-1 fill-current" />}
                  {pkg.tag}
                </span>
                <h3 className={cn("text-xl font-bold", pkg.headerText)}>{pkg.name}</h3>
                <div className={cn("mt-2", pkg.headerText)}>
                  <span className="text-4xl font-extrabold">Rs {pkg.price}</span>
                  <span className="text-sm opacity-80 ml-1">one-time</span>
                </div>
                <p className={cn("text-sm mt-1 opacity-80", pkg.headerText)}>
                  Ready in {pkg.deliveryTime}
                </p>
              </div>

              {/* Features */}
              <div className="p-6 pt-4">
                <div className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={cn(
                        "flex-shrink-0 mt-0.5",
                        feature.included ? "text-primary" : "text-muted-foreground/40"
                      )}>
                        {feature.included ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <X className="h-4 w-4" />
                        )}
                      </div>
                      <span className={cn(
                        "text-sm",
                        feature.included 
                          ? feature.highlight 
                            ? "font-semibold text-foreground" 
                            : "text-foreground"
                          : "text-muted-foreground/50 line-through"
                      )}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Maintenance Info */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Monthly maintenance</span>
                    <span className="font-semibold text-foreground">Rs {pkg.maintenance}/mo</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{pkg.support}</p>
                </div>

                {/* CTA Button */}
                <Button
                  className={cn("w-full mt-6 font-semibold", pkg.buttonStyle)}
                  asChild
                >
                  <a href="#contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <button
            onClick={() => setShowAddOns(!showAddOns)}
            className="flex items-center gap-2 mx-auto text-sm font-semibold text-primary hover:underline"
          >
            <Sparkles className="h-4 w-4" />
            {showAddOns ? "Hide Add-ons" : "View Available Add-ons"}
          </button>

          {showAddOns && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {addOns.map((addon, index) => (
                <div
                  key={addon.name}
                  className="flex items-center justify-between p-4 rounded-xl bg-card border border-border/50"
                >
                  <div>
                    <h4 className="font-medium text-foreground text-sm">{addon.name}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{addon.type}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-primary">Rs {addon.price}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Trust Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/10">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span className="text-sm text-foreground">No upfront payment</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span className="text-sm text-foreground">See demo first</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span className="text-sm text-foreground">50% on approval, 50% on delivery</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
