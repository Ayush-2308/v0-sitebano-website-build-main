"use client"

import { motion, useInView } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { useRef } from "react"

const testimonials = [
  {
    name: "Gupta Daily Needs",
    type: "Grocery Store",
    avatar: "GD",
    quote:
      "The grocery demo presents products, offers and WhatsApp ordering in a very clear and professional way.",
  },
  {
    name: "Aradhya Pharmacy",
    type: "Pharmacy",
    avatar: "AP",
    quote:
      "The pharmacy demo feels trustworthy and makes medicines, contact details and delivery options easy to understand.",
  },
  {
    name: "Evolution Classes",
    type: "Coaching Institute",
    avatar: "EC",
    quote:
      "The coaching demo organizes courses, admissions and student information in a clean and modern format.",
  },
  {
    name: "City Care Clinic",
    type: "Clinic",
    avatar: "CC",
    quote:
      "The clinic demo clearly presents doctors, timings, services and appointment options with a reassuring design.",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="bg-background py-20 text-foreground dark:bg-black dark:text-white lg:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Demo Reviews
          </span>
          <h2 className="text-3xl font-black tracking-tight text-foreground dark:text-white sm:text-4xl lg:text-5xl">
            Feedback on SiteBano&apos;s business website demos.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={false}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card/80 p-6 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-primary/8 hover:shadow-emerald-500/15 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="flex">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="mt-1 block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Demo feedback
                  </span>
                </div>
                <Quote className="h-5 w-5 text-primary/70" />
              </div>
              <p className="flex-1 text-sm leading-7 text-muted-foreground dark:text-white/72">&quot;{item.quote}&quot;</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5 dark:border-white/10">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary/12 text-sm font-black text-primary">
                  {item.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-foreground dark:text-white">{item.name}</h3>
                  <p className="text-xs font-medium text-muted-foreground dark:text-white/48">{item.type}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
