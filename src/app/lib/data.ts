import axios from 'axios'

export async function fetchLatestTenCards (name: string | null) {
  try {
    const response = await axios.get('http://localhost:8080/api/cards', {
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

export async function fetchMessage () {
  try {
    const response = await axios.get('http://localhost:8080/')
    console.log('🚀 ~ file: data.ts:24 ~ fetchMessage ~ response:', response)

    if (response.status === 200) {
      return response.data
    }
  } catch (err) {
    console.log('🚀 ~ file: data.ts:13 ~ fetchMessage ~ err:', err)
    throw new Error('Failed to fetch message')
  }
}
