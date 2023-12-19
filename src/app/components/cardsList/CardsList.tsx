import React from 'react'
import { fetchUserCards } from '@/app/lib/data'
import styles from '@/app/styles/cards.module.css'
import Image from 'next/image'
import { auth } from '@clerk/nextjs'
import { CardListControls } from './CardListControls'
import { UserCard } from '@/app/types/userCard.types'

export default async function CardsList ({ searchResults } : {searchResults: any }): Promise<React.JSX.Element> {
  const { userId } = auth()
  if (!userId) return <></>

  const userCards = await fetchUserCards(userId)

  const userCardsReduced = userCards !== 'No cards for user found'
    ? userCards.reduce((acc: any, card: UserCard) => {
      acc[card.cardId] = card.amount
      return acc
    }, {})
    : {}

  return (
    <div className={styles.cardsListContainer}>
      {searchResults.totalCount > 0
        ? searchResults.data.reverse().map((card: any) => {
          const cardAmount = userCardsReduced[card.id] ?? 0
          const hasCard = cardAmount > 0
          return (
            <div key={card.id} className={styles.card}>
              <Image
                className={hasCard ? styles.cardImage : `${styles.cardImage} ${styles.cardImageNotOwned}`}
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

              <CardListControls userId={userId} cardId={card.id} cardAmount={cardAmount} />
            </div>
          )
        })
        : <p>No cards found</p>}
    </div>
  )
}
