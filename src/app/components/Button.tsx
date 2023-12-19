'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function Button () {
  const router = useRouter()

  const handleRedirect = () => {
    router.push('/my-collection')
  }

  return (
    <button onClick={handleRedirect}>
      My Collection
    </button>
  )
}

export default Button
