import React from 'react'
import { fetchLatestTenCards } from '@/app/lib/data'
import { CardListObject, CardInfo } from '@/app/types/cardList.types'
import styles from '@/app/styles/cards.module.css'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// This will load the component client-side only
const AddIcon = dynamic(() => import('@mui/icons-material/Add'), {
  ssr: false
})
const RemoveIcon = dynamic(() => import('@mui/icons-material/Remove'), {
  ssr: false
})

export default async function CardsList ({ name }: {name: string | null}): Promise<React.JSX.Element> {
  const latestTenCards: CardListObject = await fetchLatestTenCards(name)

  return (
    <div className={styles.cardsListContainer}>
      {latestTenCards.data.map((card: CardInfo) => (
        <div key={card.id} className={styles.card}>
          <Image
            className={styles.cardImage}
            src={card.images.small}
            alt={card.name}
            width={180}
            height={250}
          />

          <div className={styles.cardName} title={card.name} aria-label='Name'>
            {card.name}
          </div>

          <div className={styles.cardDescription} aria-label='Description'>
            <div aria-label='Set Name' title={card.set.name}>Set name: {card.set.name}</div>
            <div aria-label='Set Series' title={card.set.series}>Set series: {card.set.series}</div>
            <div aria-label='Card Number' title={card.number}>Card number: {card.number}/{card.set.total}</div>
          </div>

          <div className={styles.cardControls}>
            <button title='Decrease' aria-label='Decrease'>
              <span>
                <RemoveIcon />
              </span>
            </button>

            <span>
              0
            </span>

            <button title='Add' aria-label='Add'>
              <span>
                <AddIcon />
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
