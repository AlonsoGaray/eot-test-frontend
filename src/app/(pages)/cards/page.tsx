import React, { Suspense } from 'react'
import Search from '@/app/components/search'
import CardsList from '@/app/components/cardsList'

export default function Cards ({
  searchParams
}: {
  searchParams?: {
    q: string
  }
}): React.JSX.Element {
  const searchString = searchParams?.q || null
  return (
    <div className='container'>

      <Search placeholder='Search with name' />

      <Suspense key={searchString} fallback={<p>Buscanding</p>}>
        <CardsList name={searchString} />
      </Suspense>

    </div>
  )
}
