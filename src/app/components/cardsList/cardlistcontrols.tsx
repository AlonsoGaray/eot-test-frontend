'use client'
import React from 'react'
import { addUserCard, decreaseUserCard } from '@/app/services/userCard'
import styles from '@/app/styles/cards.module.css'
import { UserCard } from '@/app/types/userCard.types'
import { useRouter } from 'next/navigation'

interface CardListControlsProps {
  userId: string;
  cardId: string;
  userCards: Array<UserCard>
}

export function CardListControls ({ userId, cardId, userCards }: CardListControlsProps): React.ReactElement {
  const router = useRouter()

  const handleAddUserCard = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const response = await addUserCard(userId, cardId)
    if (response.error) alert(response.error)
    router.refresh()
  }

  const handleDecreaseUserCard = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const response = await decreaseUserCard(userId, cardId)
    if (response.error) alert(response.error)
    router.refresh()
  }

  const userCardsReduced = userCards.reduce((acc: any, card: UserCard) => {
    acc[card.cardId] = card.amount
    return acc
  }, {})

  return (
    <div className={styles.cardControls}>
      <button title='Decrease' aria-label='Decrease' onClick={handleDecreaseUserCard}>
        <span>-</span>
      </button>
      <span>{userCardsReduced[cardId] ?? 0}</span>
      <button title='AremoveUserCard' aria-label='Add' onClick={handleAddUserCard}>
        <span>+</span>
      </button>
    </div>
  )
}
