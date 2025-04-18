import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Taylor's Collision - Premier Auto Body Shop in Duluth, GA",
  description: 'Expert collision repair and auto body services in Duluth, Georgia. Quality work, fair prices, and exceptional customer service.',
  keywords: 'auto body shop, collision repair, car repair, Duluth, Georgia, Taylor\'s Collision',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  )
}
