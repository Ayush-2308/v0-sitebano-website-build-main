"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "How much does a website cost?",
    answer: "Our packages start at Rs 2,999 for a basic 1-page website and go up to Rs 9,999 for a full-featured advanced website. Monthly maintenance ranges from Rs 500-1,200/month depending on your package. We also offer add-ons like photo shoots, video, and Google My Business setup."
  },
  {
    question: "How long does it take to build my website?",
    answer: "We deliver fast! Basic websites are ready in 24 hours, Standard in 48 hours, and Advanced in 72 hours. Once you approve the demo and provide your content (photos, menu, details), we start immediately."
  },
  {
    question: "Do I need to pay anything upfront?",
    answer: "No! We build a free demo website using your actual business data first. You only pay when you're happy with what you see. Payment is 50% on approval, 50% on delivery."
  },
  {
    question: "What if I don't have professional photos?",
    answer: "No problem! We can use photos from your Google Business profile initially. We also offer an on-site photo shoot add-on for Rs 1,500 where we visit your shop and take 20-30 professional photos."
  },
  {
    question: "Will my website work on mobile phones?",
    answer: "Absolutely! All our websites are mobile-first, meaning they're designed for smartphones first and look perfect on every device. Since 90% of your customers browse on mobile, this is our top priority."
  },
  {
    question: "Will my business show up on Google search?",
    answer: "Yes! All Standard and Advanced packages include SEO optimization. We set up Google Search Console, optimize your pages for local search, and help you rank for relevant keywords in your area."
  },
  {
    question: "What is monthly maintenance? Do I need it?",
    answer: "Monthly maintenance includes hosting, updates, minor changes (menu updates, timing changes, new photos), technical support, and security updates. It's optional but highly recommended to keep your site running smoothly and up-to-date."
  },
  {
    question: "Can I make changes to my website later?",
    answer: "Yes! Your package includes revision rounds during building. After delivery, minor changes are covered in your maintenance plan. For major redesigns or new features, we offer competitive pricing for existing clients."
  },
]

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-medium text-foreground pr-4">{faq.question}</span>
        <ChevronDown className={cn(
          "h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-muted-foreground leading-relaxed">
          {faq.answer}
        </p>
      </motion.div>
    </div>
  )
}

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            FAQ
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl bg-card border border-border/50 px-6"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a href="#contact" className="text-primary font-medium hover:underline">
              Contact us
            </a>{" "}
            — we&apos;re happy to help.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
