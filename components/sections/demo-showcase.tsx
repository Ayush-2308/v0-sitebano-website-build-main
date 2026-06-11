"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Star, Smartphone, Monitor, Utensils, Dumbbell, Scissors, Stethoscope, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All", icon: null },
  { id: "restaurant", label: "Restaurant", icon: Utensils },
  { id: "gym", label: "Gym", icon: Dumbbell },
  { id: "salon", label: "Salon", icon: Scissors },
  { id: "clinic", label: "Clinic", icon: Stethoscope },
  { id: "grocery", label: "Grocery", icon: ShoppingBag },
]

const demos = [
  {
    id: 1,
    category: "restaurant",
    name: "Sharma Dhaba",
    rating: 4.6,
    reviews: 340,
    gradient: "from-orange-500/30 via-red-500/20 to-yellow-500/30",
    features: ["Online Menu", "WhatsApp Orders", "Google Maps"],
  },
  {
    id: 2,
    category: "gym",
    name: "FitZone Gym",
    rating: 4.5,
    reviews: 128,
    gradient: "from-blue-500/30 via-cyan-500/20 to-indigo-500/30",
    features: ["Class Schedule", "Membership Plans", "Trainer Profiles"],
  },
  {
    id: 3,
    category: "salon",
    name: "Glamour Beauty Studio",
    rating: 4.8,
    reviews: 256,
    gradient: "from-pink-500/30 via-purple-500/20 to-rose-500/30",
    features: ["Service Menu", "Book Appointment", "Gallery"],
  },
  {
    id: 4,
    category: "clinic",
    name: "City Care Clinic",
    rating: 4.7,
    reviews: 412,
    gradient: "from-teal-500/30 via-emerald-500/20 to-green-500/30",
    features: ["Doctor Profiles", "Timings", "Services List"],
  },
  {
    id: 5,
    category: "grocery",
    name: "Fresh Mart Store",
    rating: 4.4,
    reviews: 89,
    gradient: "from-green-500/30 via-lime-500/20 to-emerald-500/30",
    features: ["Product Catalog", "WhatsApp Order Form", "Delivery Info"],
  },
  {
    id: 6,
    category: "restaurant",
    name: "Agra Biryani House",
    rating: 4.7,
    reviews: 520,
    gradient: "from-amber-500/30 via-orange-500/20 to-red-500/30",
    features: ["Full Menu", "Special Offers", "Table Booking"],
  },
]

export function DemoShowcaseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredDemos = activeCategory === "all" 
    ? demos 
    : demos.filter(demo => demo.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Websites We Build for <span className="text-primary">Local Businesses</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Industry-specific templates optimized for conversions. Each one designed 
            to turn visitors into customers.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border hover:border-primary/30 text-muted-foreground hover:text-foreground"
              )}
            >
              {category.icon && <category.icon className="h-4 w-4" />}
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Demo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDemos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-xl">
                {/* Preview Area */}
                <div className={`relative h-48 bg-gradient-to-br ${demo.gradient} p-4`}>
                  {/* Device Mockup */}
                  <div className="absolute inset-4 bg-card/90 backdrop-blur-sm rounded-lg border border-border/50 p-3 flex flex-col">
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="h-2 w-2 rounded-full bg-red-400" />
                      <div className="h-2 w-2 rounded-full bg-yellow-400" />
                      <div className="h-2 w-2 rounded-full bg-green-400" />
                      <div className="flex-1 mx-2 h-4 rounded bg-secondary" />
                    </div>
                    <div className="flex-1 rounded bg-gradient-to-b from-secondary/50 to-transparent" />
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-2 right-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-background/80 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-foreground capitalize">
                      {demo.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{demo.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium text-foreground">{demo.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">({demo.reviews} reviews)</span>
                      </div>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
                        <Monitor className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary">
                        <Smartphone className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {demo.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center rounded-full bg-primary/5 border border-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action */}
                  <Button
                    variant="outline"
                    className="w-full group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    asChild
                  >
                    <a href="#contact">
                      View Demo
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Don&apos;t see your industry?{" "}
            <a href="#contact" className="text-primary font-medium hover:underline">
              Contact us
            </a>{" "}
            — we build custom websites for any local business.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
