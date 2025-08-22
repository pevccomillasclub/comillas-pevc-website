import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Comillas PE&VC Club - Private Equity & Venture Capital',
  description: 'Empowering the next generation of investment professionals through hands-on experience and industry connections.',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
