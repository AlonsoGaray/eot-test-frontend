import React from 'react'
import styles from '@/app/styles/cardSkeleton.module.css'

export default function CardsListSkeleton (): React.JSX.Element {
  return (
    <div className='container'>
      <div className={styles.cardsListContainer}>

        {Array.from({ length: 10 }).map((_, i) => (

          <div key={i} className={styles.cardInfo}>

            <div className={styles.cardImage} />
            <div className={styles.cardName} />

            <div className={styles.cardDescription}>
              <div className={styles.cardSetName} />
              <div className={styles.cardSetSeries} />
              <div className={styles.cardNumber} />
            </div>

            <div className={styles.cardControls}>
              <div className={styles.cardButton} />
              <div className={styles.cardAmout} />
              <div className={styles.cardButton} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
