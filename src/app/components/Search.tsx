'use client'
import React from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import styles from '@/app/styles/search.module.css'

export default function Search ({ placeholder }: {placeholder: string}) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((name: string) => {
    const params = new URLSearchParams(searchParams)
    if (name) {
      params.set('q', name)
    } else {
      params.delete('q')
    }

    replace(`${pathname}?${params.toString()}`)
  }, 400)

  return (
    <div className={styles.searchContainer}>

      <div className={styles.inputContainer}>
        <input
          type='text'
          defaultValue={searchParams.get('q')?.toString()}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={placeholder}
          aria-label='Search input'
        />
      </div>

      <select value='10' onChange={e => console.log(e)}>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='50'>50</option>
      </select>

      <input
        type='number'
        value='10'
        onChange={e => console.log(e)}
        placeholder='Page'
      />

      <select value='a' onChange={e => console.log(e)}>
        <option value='-set.releaseDate'>Release Date</option>
        <option value='name'>Name</option>
      </select>
    </div>
  )
}
