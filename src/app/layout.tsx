import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { roboto } from './ui/fonts'
import '@/app/styles/globals.css'
import NavBar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EOT-Test',
  description: 'Pokemon TCG Collection Manager'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${roboto.className} antialiased`}>

        <NavBar />

        <div>
          {children}
        </div>

      </body>
    </html>
  )
}
