'use client'
import React from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import styles from '@/app/styles/search.module.css'
import { SearchParams } from '../types/cardEnum'

export default function Search ({ placeholder, totalPages }: {placeholder: string, totalPages: number}) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((searchParam: SearchParams, value: string) => {
    const params = new URLSearchParams(searchParams)

    params.set(searchParam, value)

    replace(`${pathname}?${params.toString()}`)
  }, 400)

  return (
    <div className={styles.searchContainer}>

      <div className={styles.inputSearchContainer}>
        <input
          type='text'
          defaultValue={searchParams.get('q')?.toString()}
          onChange={(e) => handleSearch(SearchParams.Q, e.target.value)}
          placeholder={placeholder}
          aria-label='Search input'
        />
      </div>

      <div className={styles.inputPageSizeContainer}>
        <select
          value={searchParams.get('pageSize')?.toString()}
          onChange={e => handleSearch(SearchParams.PageSize, e.target.value)}
        >
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='50'>50</option>
        </select>
      </div>

      <div className={styles.inputPageContainer}>
        <select
          defaultValue={searchParams.get('page')?.toString()}
          onChange={(e) => handleSearch(SearchParams.Page, e.target.value)}
        >
          {Array.from({ length: totalPages }, (_, i) => (
            <option key={i} value={i + 1}>{i + 1}</option>
          ))}
        </select>
      </div>

      {/* TODO: Change it to dropdown with multiple selections */}
      <div className={styles.inputReleaseContainer}>
        <select
          defaultValue={searchParams.get('q')?.toString()}
          onChange={(e) => handleSearch(SearchParams.OrderBy, e.target.value)}
        >
          <option value='-set.releaseDate'>Release Date</option>
          <option value='name'>Name</option>
        </select>
      </div>
    </div>
  )
}
