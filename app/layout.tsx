import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: '--font-sans' });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-mono' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
}

export const metadata: Metadata = {
  title: 'Marcus Thorne Fitness | Transform Your Performance',
  description: 'Elite fitness coaching for executives. Metabolic optimization, executive fueling, and performance protocols designed for peak results.',
  generator: 'v0.app',
  keywords: ['fitness', 'coaching', 'performance', 'training', 'executive health'],
  authors: [{ name: 'Marcus Thorne Fitness' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marcusthornefitness.com',
    title: 'Marcus Thorne Fitness | Transform Your Performance',
    description: 'Elite fitness coaching for executives. Metabolic optimization, executive fueling, and performance protocols designed for peak results.',
    siteName: 'Marcus Thorne Fitness',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marcus Thorne Fitness | Transform Your Performance',
    description: 'Elite fitness coaching for executives.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={`${_geist.variable} ${_geistMono.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
