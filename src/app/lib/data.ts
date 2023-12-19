import axios from 'axios'
import { SearchParams } from '../types/card.types'
import { UserCard } from '../types/userCard.types'

export async function fetchAllCards ({
  pageSize = '10',
  q = '',
  page = '1',
  orderBy = '-set.releaseDate'
}: SearchParams) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/card`, {
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
      getCardsFromUser(response.data)

      return response.data
    }
  } catch (err) {
    return 'No cards for user found'
  }
}

export async function getCardsFromUser (userCards: Array<UserCard>) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/card/userCards`, {
      params: {
        userCards
      }
    })

    return response.data
  } catch (err) {
    return 'No cards for user found'
  }
}
