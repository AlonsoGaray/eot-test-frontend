import axios from 'axios'

export async function fetchLatestTenCards (name: string | null) {
  try {
    const response = await axios.get('http://localhost:8080/api/card/latest', {
      params: {
        pageSize: 10,
        q: name ? `name:${name}*` : ''
      }
    })

    if (response.status === 200) {
      return response.data
    }
  } catch (err) {
    console.log('🚀 ~ file: data.ts:13 ~ fetchLatestTenCards ~ err:', err)
    throw new Error('Failed to fetch latest ten cards')
  }
}

export async function fetchUserCards (userId: string) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user-card/userId/${userId}`)

    if (response.status === 200) {
      return response.data
    }
  } catch (err) {
    console.log('🚀 ~ file: data.ts:13 ~ fetchUserCards ~ err:', err)
    throw new Error('Failed to fetch user cards')
  }
}
