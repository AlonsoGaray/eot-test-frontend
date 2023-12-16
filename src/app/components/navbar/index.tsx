import Image from 'next/image'
import NavLinks from './navLinks'
import styles from '@/app/styles/navbar.module.css'

export default function NavBar () {
  return (
    <nav className={styles.navbar}>
      <div className='container'>
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
  )
}
