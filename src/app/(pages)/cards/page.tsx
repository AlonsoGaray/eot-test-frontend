import React, { Suspense } from 'react'
import CardsList from '@/app/components/cardsList/CardsList'
import Search from '@/app/components/Search'
import { SearchParams } from '@/app/types/card.types'
import { fetchLatestTenCards } from '@/app/lib/data'
import { CardListObject } from '@/app/types/cardList.types'

export default async function Cards ({ searchParams }: { searchParams: SearchParams}): Promise<React.JSX.Element> {
  const searchResults: CardListObject = await fetchLatestTenCards(searchParams)

  const totalPages = Math.ceil(searchResults.totalCount / searchResults.pageSize)

  return (
    <div className='container'>

      <Search placeholder='Search with name' totalPages={totalPages} />

      <Suspense key={searchParams.q} fallback={<p>Buscanding</p>}>
        <CardsList searchResults={searchResults} />
      </Suspense>

    </div>
  )
}
