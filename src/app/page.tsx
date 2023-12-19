// import { auth } from '@clerk/nextjs'
// import { redirect } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import styles from '@/app/styles/page.module.css'

export default function Home (): React.JSX.Element {
  // const { userId } = auth()
  // if (userId) {
  //   redirect('/my-collection')
  // }

  return (
    <div className='container'>

      <div className={styles.bannerContainer}>
        <Image
          className={styles.bannerImage}
          src='/images/banner.webp'
          alt='Banner Image'
          width={500}
          height={500}
        />
      </div>

      <div style={{ display: 'flex' }}>
        <div style={{ flex: '50%', padding: '10px' }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ultrices massa, et pharetra justo fermentum nec.</p>
        </div>
        <div style={{ flex: '50%', padding: '10px' }}>
          <img src='https://via.placeholder.com/150' alt='Placeholder' />
        </div>
      </div>
    </div>
  )
}
