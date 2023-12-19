'use client'
import React from 'react'
import { addUserCard, decreaseUserCard } from '@/app/services/userCard'
import styles from '@/app/styles/cards.module.css'
import { useRouter } from 'next/navigation'
import { AddIcon } from '@/app/assets/icons/AddIcon'
import { DecreaseIcon } from '@/app/assets/icons/DecreaseIcon'

interface CardListControlsProps {
  userId: string;
  cardId: string;
  cardAmount: number
}

export function CardListControls ({ userId, cardId, cardAmount }: CardListControlsProps): React.ReactElement {
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

  const isAddDisabled = cardAmount === 2
  const isDecreaseDisabled = cardAmount === 0

  return (
    <div className={styles.cardControls}>
      <button
        className={isDecreaseDisabled ? styles.disabled : ''}
        title='Decrease'
        onClick={handleDecreaseUserCard}
        disabled={isDecreaseDisabled}
        aria-label='Decrease'
      >
        <DecreaseIcon filler={isDecreaseDisabled ? 'gray' : '#0F0F0F'} />
      </button>
      <span>{cardAmount}</span>
      <button
        className={isAddDisabled ? styles.disabled : ''}
        title='Add'
        onClick={handleAddUserCard}
        disabled={isAddDisabled}
        aria-label='Add'
      >
        <AddIcon filler={isAddDisabled ? 'gray' : '#0F0F0F'} />
      </button>
    </div>
  )
}
