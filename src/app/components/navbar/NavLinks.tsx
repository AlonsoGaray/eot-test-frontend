'use client'
import styles from '@/app/styles/navbar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'Home', href: '/' },
  { name: 'My Collection', href: '/my-collection' },
  { name: 'Cards', href: '/cards' },
  { name: 'News', href: '/news' }
]

export default function NavLinks () {
  const pathname = usePathname()

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={pathname === link.href ? `${styles.active}` : ''}
          >
            {link.name}
          </Link>
        )
      })}
    </>
  )
}
