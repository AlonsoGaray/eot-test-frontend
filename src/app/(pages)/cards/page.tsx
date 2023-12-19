import ReusableCardList from '@/app/components/cardsList/ReusableCardList'
import { SearchParams } from '@/app/types/card.types'
import { SearchMode } from '@/app/types/cardEnum'
import React from 'react'

export default async function Cards ({ searchParams }: { searchParams: SearchParams}): Promise<React.JSX.Element> {
  return (
    <ReusableCardList mode={SearchMode.Search} searchParams={searchParams} />
  )
}
