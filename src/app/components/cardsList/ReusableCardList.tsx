import { fetchAllCards, fetchUserCards, getCardsFromUser } from '@/app/lib/data'
import { auth } from '@clerk/nextjs'
import React, { Suspense } from 'react'
import Search from '../Search'
import CardsList from './CardsList'
import { UserCard } from '@/app/types/userCard.types'
import { SearchParams } from '@/app/types/card.types'
import { SearchMode } from '@/app/types/cardEnum'
import CardsListSkeleton from './CardListSkeleton'

export default async function ReusableCardList ({ mode, searchParams }: {mode: SearchMode, searchParams: SearchParams}): Promise<React.JSX.Element> {
  const { userId } = auth()
  if (!userId) return <></>

  let cards
  let pages = 1

  if (mode === SearchMode.Search) {
    cards = await fetchAllCards(searchParams)
    pages = Math.ceil(cards.totalCount / cards.pageSize)
  } else {
    const userCardsRelation: Array<UserCard> = await fetchUserCards(userId)
    cards = await getCardsFromUser(userCardsRelation)
  }

  return (
    <div className='container'>

      {mode === SearchMode.Search
        ? <Search placeholder='Search with name' totalPages={pages} mode={mode} />
        : <div className='title'>My Collection</div>}

      <Suspense key={userId} fallback={<CardsListSkeleton />}>
        <CardsList searchResults={cards} />
      </Suspense>

    </div>
  )
}
