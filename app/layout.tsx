import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { FaviconSwitcher } from '@/components/favicon-switcher'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SiteBano | From Local to Digital - Premium Website Development',
  description: 'SiteBano helps local businesses across India build powerful digital identities. Fast, mobile-optimized, SEO-ready websites delivered in 48-72 hours. Your Customers Are Online. Are You?',
  keywords: ['website development', 'India', 'local business', 'digital marketing', 'web design', 'SiteBano', 'SEO', 'mobile website'],
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
    icon: [{ url: '/sitebano-icon-dark-32.png?v=3', type: 'image/png', sizes: '32x32' }],
    shortcut: '/sitebano-icon-dark-32.png?v=3',
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
      <body className={`${poppins.className} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
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
