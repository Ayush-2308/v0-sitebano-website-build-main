import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { FaviconSwitcher } from '@/components/favicon-switcher'
import { SITEBANO_ASSETS } from '@/lib/sitebano-assets'
import './globals.css'

export const metadata: Metadata = {
  title: 'SiteBano | From Local to Digital - Premium Website Development',
  description: 'SiteBano helps local businesses in Agra build powerful digital identities. Fast, mobile-optimized, SEO-ready websites delivered in 48-72 hours. Your Customers Are Online. Are You?',
  keywords: ['website development', 'Agra', 'local business', 'digital marketing', 'web design', 'SiteBano', 'SEO', 'mobile website'],
  authors: [{ name: 'Ayush Gupta', url: 'https://sitebano.com' }],
  creator: 'SiteBano',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sitebano.com',
    siteName: 'SiteBano',
    title: 'SiteBano | From Local to Digital',
    description: 'We Turn Google Ratings Into Real Websites. Premium website development for local businesses.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SiteBano | From Local to Digital',
    description: 'We Turn Google Ratings Into Real Websites. Premium website development for local businesses.',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f5' },
    { media: '(prefers-color-scheme: dark)', color: '#0D0D0D' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <FaviconSwitcher />
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
