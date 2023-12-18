'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import NavLinks from '../components/navbar/NavLinks'
import styles from '@/app/styles/navbar.module.css'

export default function NavBar () {
  const { user, isLoaded } = useUser()
  return (
    <nav className={styles.navbar}>
      <div className='container'>
        <div className={styles.navbarContainer}>
          <div className={styles.navbarLinks}>
            <NavLinks />
          </div>

          <div className='navbar-profile'>
            {isLoaded && user ? <UserButton /> : 'Not logged in'}
          </div>
        </div>
      </div>
    </nav>
  )
}
