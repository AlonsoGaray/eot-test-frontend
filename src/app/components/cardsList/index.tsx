import React from 'react'
import { fetchLatestTenCards, fetchUserCards } from '@/app/lib/data'
import { CardInfo, CardListObject } from '@/app/types/cardList.types'
import styles from '@/app/styles/cards.module.css'
import Image from 'next/image'
import { auth } from '@clerk/nextjs'
import { CardListControls } from './cardlistcontrols'

export default async function CardsList ({ name }: {name: string | null}): Promise<React.JSX.Element> {
  const { userId } = auth()
  if (!userId) return <></>
  const latestTenCards: CardListObject = await fetchLatestTenCards(name)

  const userCards = await fetchUserCards(userId)

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

          <CardListControls userId={userId} cardId={card.id} userCards={userCards} />
        </div>
      ))}
    </div>
  )
}
