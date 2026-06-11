"use client"

import { useEffect, useState } from "react"
import { ThemeAwareLogo } from "@/components/theme-aware-image"
import { SITEBANO_CONTACT } from "@/lib/sitebano-assets"
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Website Development", href: "#services" },
    { name: "SEO Optimization", href: "#services" },
    { name: "Google My Business", href: "#services" },
    { name: "Social Media", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ],
  support: [
    { name: "FAQ", href: "#faq" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
}

export function Footer() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              {mounted && (
                <div className="mb-4">
                  <ThemeAwareLogo variant="footer" />
                </div>
              )}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Helping local businesses build powerful digital identities through modern technology.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/sitebano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/company/sitebano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://twitter.com/sitebano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="grid gap-8 sm:grid-cols-3 lg:col-span-2">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Services</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Support</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={SITEBANO_CONTACT.emailMailto}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    {SITEBANO_CONTACT.email}
                  </a>
                </li>
                <li>
                  <a
                    href={SITEBANO_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    {SITEBANO_CONTACT.phone}
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Agra, Uttar Pradesh, India</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} SiteBano. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Made with care in Agra, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
