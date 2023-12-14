import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { montserrat } from './ui/fonts'
import './globals.css'
import Image from 'next/image'
import NavLinks from './ui/navbar/nav-links'
import styles from './page.module.css'

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
      <body className={`${inter.className} ${montserrat.className} antialiased`}>

        <nav className={styles.navbar}>
          <div className={styles.container}>
            <div className={styles.navbarContainer}>
              <div className={styles.navbarLinks}>
                <NavLinks />
              </div>

              <div className='navbar-profile'>
                <Image
                  src='/vercel.svg'
                  alt='Vercel Logo'
                  className={styles.vercelLogo}
                  width={100}
                  height={24}
                  priority
                />
              </div>
            </div>
          </div>
        </nav>

        <div className={styles.container}>
          {children}
        </div>

      </body>
    </html>
  )
}
