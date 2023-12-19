import ReusableCardList from '@/app/components/cardsList/ReusableCardList'
import { SearchParams } from '@/app/types/card.types'
import { SearchMode } from '@/app/types/cardEnum'
import React from 'react'

export default async function MyCollection ({ searchParams }: { searchParams: SearchParams}): Promise<React.JSX.Element> {
  return (
    <ReusableCardList mode={SearchMode.Filter} searchParams={searchParams} />
  )
}
