"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITEBANO_CONTACT } from "@/lib/sitebano-assets"
import { WhatsAppCTA } from "@/components/whatsapp-cta"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-teal/10 rounded-3xl blur-3xl" />

          {/* Card */}
          <div className="relative rounded-3xl bg-card border border-border/50 p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="relative">
              {/* Headline */}
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance mb-4">
                Your business already has trust.
                <br />
                <span className="text-primary">Now it needs a digital home.</span>
              </h2>

              {/* Description */}
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Join businesses across India who are capturing more customers with
                professional websites. See your free demo today.
              </p>

              {/* Tagline */}
              <p className="mt-6 text-base font-medium">
                <span className="text-foreground">Your Customers Are Online.</span>{" "}
                <span className="text-primary">Are You?</span>
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-semibold"
                  asChild
                >
                  <a href="#contact">
                    Request Free Consultation
                  </a>
                </Button>
                <WhatsAppCTA size="lg" />
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-primary/30 hover:bg-primary/5 px-8 font-semibold"
                  asChild
                >
                  <a href={SITEBANO_CONTACT.emailMailto}>
                    <Mail className="mr-2 h-4 w-4 text-primary" />
                    Email Us
                  </a>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  No upfront payment
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Free demo first
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Live in 48-72 hrs
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
