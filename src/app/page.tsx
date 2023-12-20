import { auth, SignUpButton } from '@clerk/nextjs'
import React from 'react'
import Image from 'next/image'
import styles from '@/app/styles/page.module.css'
import Button from './components/Button'

export default function Home (): React.JSX.Element {
  let userId

  if (process.env.NODE_ENV !== 'test') {
    userId = auth().userId
  }

  return (
    <div className='container'>

      <div className={styles.bannerContainer}>
        <div className={styles.bannerCallToActionContainer}>
          <h1>
            Keep track of your Pokemon TCG collection.
          </h1>
          <div className={styles.bannerButtons}>
            {userId
              ? <Button />
              : <SignUpButton />}
            <button>
              Search Cards
            </button>
          </div>
        </div>
        <div className={styles.bannerImageContainer}>
          <Image
            className={styles.bannerImage}
            src='/images/banner.png'
            alt='Banner Image'
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}
