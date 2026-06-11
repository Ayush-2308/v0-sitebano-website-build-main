"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, ExternalLink, Star, Mail, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeAwareLogo } from "@/components/theme-aware-image"
import { SITEBANO_CONTACT } from "@/lib/sitebano-assets"
import { WhatsAppCTA } from "@/components/whatsapp-cta"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20 lg:pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-teal/10 blur-[100px] animate-glow-pulse"
          style={{ animationDelay: "1.5s" }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center py-12 lg:py-20">
          {/* Brand logo */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <ThemeAwareLogo
              variant="hero"
              className="mx-auto scale-110 sm:scale-[1.15] lg:scale-125"
              priority
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Now serving businesses across India
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance"
          >
            We Turn{" "}
            <span className="relative">
              <span className="text-primary">Google Ratings</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6C50 2 150 2 198 6"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-primary/50"
                />
              </svg>
            </span>
            <br />
            Into Real Websites
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-center text-lg text-muted-foreground sm:text-xl text-pretty"
          >
            Your business already has trust on Google. We build the digital home
            to capture that demand - fast, mobile-first, and conversion-focused.
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-4 text-center text-base font-medium"
          >
            <span className="text-foreground">Your Customers Are Online.</span>{" "}
            <span className="text-primary">Are You?</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-semibold"
              asChild
            >
              <a href="#contact">
                Book Free Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-8"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">Early demo feedback</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">48-72 hrs</span> delivery
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="text-sm text-muted-foreground">
              Starting at <span className="font-semibold text-foreground">Rs 2,999</span>
            </div>
          </motion.div>

          {/* Floating Cards Preview */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative mt-16 w-full max-w-5xl"
          >
            {/* Main Preview Card */}
            <div className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-2 shadow-2xl emerald-glow">
              <div className="rounded-xl bg-gradient-to-br from-primary/20 via-card to-teal/20 p-8 sm:p-12">
                <div className="grid items-stretch gap-6 md:grid-cols-3">
                  {/* Restaurant Preview */}
                  <div className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-xl bg-card border border-border/50 p-4 transition-all hover:border-primary/30 hover:shadow-lg animate-float">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="text-sm font-bold text-foreground">Restaurant Website</span>
                      <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      Restaurant
                      </span>
                    </div>
                    <div className="relative mb-3 aspect-video w-full overflow-hidden rounded-lg border border-border/60 bg-secondary">
                      <Image
                        src="/images/hero-restaurant-preview.png"
                        alt="Restaurant website design preview"
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-contain object-center"
                      />
                    </div>
                    <div className="mt-3 flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-semibold text-foreground">4.3</span>
                      <span className="text-xs text-muted-foreground">early feedback</span>
                    </div>
                    <Button size="sm" variant="outline" className="mt-auto w-full" asChild>
                      <a
                        href="https://royal-spice-restaurant.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Demo
                        <ExternalLink className="ml-2 h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </div>

                  {/* Grocery Preview */}
                  <div
                    className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-xl bg-card border border-border/50 p-4 transition-all hover:border-primary/30 hover:shadow-lg animate-float"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="text-sm font-bold text-foreground">Grocery Website</span>
                      <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      Grocery
                      </span>
                    </div>
                    <div className="relative mb-3 aspect-video w-full overflow-hidden rounded-lg border border-border/60 bg-secondary">
                      <Image
                        src="/images/hero-grocery-preview.png"
                        alt="Grocery website design preview"
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-contain object-center"
                      />
                    </div>
                    <div className="mt-3 flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-semibold text-foreground">4.5</span>
                      <span className="text-xs text-muted-foreground">early feedback</span>
                    </div>
                    <Button size="sm" variant="outline" className="mt-auto w-full" asChild>
                      <a
                        href="https://gupta-daily-needs.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Demo
                        <ExternalLink className="ml-2 h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </div>

                  {/* Clinic Preview */}
                  <div
                    className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-xl bg-card border border-border/50 p-4 transition-all hover:border-primary/30 hover:shadow-lg animate-float"
                    style={{ animationDelay: "2s" }}
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="text-sm font-bold text-foreground">Clinic Website</span>
                      <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      Clinic
                      </span>
                    </div>
                    <div className="relative mb-3 aspect-video w-full overflow-hidden rounded-lg border border-border/60 bg-secondary">
                      <Image
                        src="/images/hero-clinic-preview.png"
                        alt="Clinic website design preview"
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-contain object-center"
                      />
                    </div>
                    <div className="mt-3 flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-semibold text-foreground">4.2</span>
                      <span className="text-xs text-muted-foreground">early feedback</span>
                    </div>
                    <Button size="sm" variant="outline" className="mt-auto w-full" asChild>
                      <a
                        href="https://city-care-clinic.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Demo
                        <ExternalLink className="ml-2 h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 hidden lg:block"
            >
              <div className="flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 shadow-lg">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                  <Star className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <div className="text-xs font-semibold">4.3 Early Rating</div>
                  <div className="text-xs text-muted-foreground">Initial feedback</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 hidden lg:block"
            >
              <div className="flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 shadow-lg">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Play className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-semibold">Live in 48hrs</div>
                  <div className="text-xs text-muted-foreground">Fast Delivery</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
