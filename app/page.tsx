import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { ProblemSolutionSection } from "@/components/sections/problem-solution"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { DemoShowcaseSection } from "@/components/sections/demo-showcase"
import { PricingSection } from "@/components/sections/pricing"
import { WhyChooseSection } from "@/components/sections/why-choose"
import { StatsSection } from "@/components/sections/stats"
import { FounderSection } from "@/components/sections/founder"
import { RoadmapSection } from "@/components/sections/roadmap"
import { FAQSection } from "@/components/sections/faq"
import { CTASection } from "@/components/sections/cta"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <HowItWorksSection />
        <DemoShowcaseSection />
        <PricingSection />
        <WhyChooseSection />
        <StatsSection />
        <FounderSection />
        <RoadmapSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
