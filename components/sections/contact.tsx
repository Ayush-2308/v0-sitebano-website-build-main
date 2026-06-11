"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SITEBANO_CONTACT } from "@/lib/sitebano-assets"
import { WhatsAppCTA } from "@/components/whatsapp-cta"

const businessTypes = [
  "Restaurant / Cafe",
  "Salon / Spa",
  "Gym / Fitness",
  "Clinic / Healthcare",
  "Retail / Shop",
  "Professional Services",
  "Other",
]

const budgetOptions = [
  "Under Rs 5,000",
  "Rs 5,000 - 10,000",
  "Rs 10,000 - 25,000",
  "Rs 25,000+",
  "Not sure yet",
]

type FormState = {
  fullName: string
  businessName: string
  phone: string
  email: string
  businessType: string
  projectRequirements: string
  budget: string
  message: string
}

const initialForm: FormState = {
  fullName: "",
  businessName: "",
  phone: "",
  email: "",
  businessType: "",
  projectRequirements: "",
  budget: "",
  message: "",
}

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [form, setForm] = useState<FormState>(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "Submission failed")
      }

      setIsSuccess(true)
      setForm(initialForm)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Let&apos;s Build Your Digital Presence
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to grow your business online? Connect with SiteBano today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-xl p-6 glass-card">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Get in touch
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={SITEBANO_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-[#25D366] transition-colors group"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/10 group-hover:bg-[#25D366]/20 transition-colors">
                      <Phone className="h-4 w-4 text-[#25D366]" />
                    </span>
                    <span>
                      <span className="block text-xs text-muted-foreground">WhatsApp</span>
                      <span className="font-medium text-foreground">
                        {SITEBANO_CONTACT.phone}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={SITEBANO_CONTACT.emailMailto}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-4 w-4 text-primary" />
                    </span>
                    <span>
                      <span className="block text-xs text-muted-foreground">Email</span>
                      <span className="font-medium text-foreground">
                        {SITEBANO_CONTACT.email}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">
                Your Customers Are Online.
              </span>{" "}
              <span className="text-primary">Are You?</span>
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {isSuccess ? (
              <div className="rounded-2xl border border-primary/30 bg-card/80 backdrop-blur-xl p-10 text-center glass-card">
                <CheckCircle2 className="h-14 w-14 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Your request has been submitted successfully. Team SiteBano will contact you soon.
                </h3>
                <p className="text-muted-foreground mb-8">
                  Prefer a faster response? Chat with us on WhatsApp.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <WhatsAppCTA />
                  <Button variant="outline" onClick={() => setIsSuccess(false)}>
                    Submit another inquiry
                  </Button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border/50 bg-card/60 backdrop-blur-xl p-6 sm:p-8 space-y-5 glass-card"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      required
                      value={form.fullName}
                      onChange={(e) => update("fullName", e.target.value)}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      required
                      value={form.businessName}
                      onChange={(e) => update("businessName", e.target.value)}
                      placeholder="Your business"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+91 ..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@business.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label>Business Type</Label>
                    <Select
                      required
                      value={form.businessType}
                      onValueChange={(v) => update("businessType", v)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {businessTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Budget</Label>
                    <Select
                      required
                      value={form.budget}
                      onValueChange={(v) => update("budget", v)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetOptions.map((opt) => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectRequirements">Project Requirements</Label>
                  <Input
                    id="projectRequirements"
                    required
                    value={form.projectRequirements}
                    onChange={(e) => update("projectRequirements", e.target.value)}
                    placeholder="e.g. 5-page website, menu, WhatsApp orders"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell us about your business and goals..."
                  />
                </div>

                {error && (
                  <p className="text-sm text-destructive" role="alert">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Request Free Consultation"
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
