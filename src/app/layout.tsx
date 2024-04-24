import '@/styles/globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'Daily Weather App by Reggie Gunawan',
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  initialScale: 1,
  minimumScale: 1,
  viewportFit: 'cover',
  themeColor: 'black',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('flex flex-col h-dvh bg-slate-400', inter.className)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
