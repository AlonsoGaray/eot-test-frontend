import axios from 'axios'
import { SearchParams } from '../types/card.types'

export async function fetchLatestTenCards ({
  pageSize = '10',
  q = '',
  page = '1',
  orderBy = '-set.releaseDate'
}: SearchParams) {
  try {
    const response = await axios.get('http://localhost:8080/api/card', {
      params: {
        pageSize,
        q: `name:${q}*`,
        page,
        orderBy
      }
    })

    if (response.status === 200) {
      return response.data
    }
  } catch (err) {
    return 'No cards found'
  }
}

export async function fetchUserCards (userId: string) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user-card/userId/${userId}`)

    if (response.status === 200) {
      return response.data
    }
  } catch (err) {
    return 'No cards for user found'
  }
}
