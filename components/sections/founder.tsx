"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ThemeAwareProfile } from "@/components/theme-aware-image"
import { Quote, Linkedin, Mail } from "lucide-react"

const FOUNDER_EMAIL = "ayush.ag2308@gmail.com"
const FOUNDER_LINKEDIN = "https://www.linkedin.com/in/ayush-gupta-android/"

export function FounderSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative max-w-2xl mx-auto lg:max-w-none w-full">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-teal/20 rounded-3xl blur-2xl pointer-events-none" />
              
              {/* Full profile image — no crop */}
              <div className="relative rounded-2xl border border-border/50 bg-card/80 emerald-glow p-1 sm:p-2">
                <ThemeAwareProfile priority />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-8"
              >
                <div className="flex items-center gap-3 rounded-xl bg-card border border-border px-4 py-3 shadow-xl">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Quote className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">From Local</div>
                    <div className="text-xs text-primary">To Digital</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Meet The Founder
            </span>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-4">
              Ayush Gupta
            </h2>
            <p className="text-lg font-medium text-primary mb-6">
              Founder & Developer
            </p>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I started SiteBano with a simple observation: thousands of local businesses 
                in Agra have built incredible trust through Google ratings and reviews, 
                yet they have no website to capture that demand.
              </p>
              <p>
                Every day, potential customers search for these businesses online, 
                find their amazing 4.5+ star ratings, but then... nothing. No website. 
                No menu. No way to book or order. They leave and go to a competitor.
              </p>
              <p>
                <span className="text-foreground font-medium">My mission is simple:</span> help every 
                deserving local business — restaurants, salons, gyms, clinics — build a powerful 
                digital identity. Fast. Affordable. No technical knowledge required.
              </p>
            </div>

            {/* Vision */}
            <div className="mt-8 p-6 rounded-2xl bg-card border border-border/50">
              <h3 className="font-semibold text-foreground mb-2">The Vision</h3>
              <p className="text-sm text-muted-foreground">
                SiteBano isn&apos;t just a web agency — we&apos;re building a digital growth platform 
                for local businesses. Starting with websites, expanding to apps, automation, 
                and complete digital transformation solutions.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href={`mailto:${FOUNDER_EMAIL}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={`Email ${FOUNDER_EMAIL}`}
                title={FOUNDER_EMAIL}
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={FOUNDER_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
