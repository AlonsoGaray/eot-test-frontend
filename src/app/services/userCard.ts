import axios from 'axios'

export async function addUserCard (userId: string, cardId: string): Promise<any> {
  const response = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user-card/add`, {
    userId,
    cardId
  })

  return response.data
}

export async function decreaseUserCard (userId: string, cardId: string): Promise<any> {
  const response = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user-card/decrease`, {
    userId,
    cardId
  })

  return response.data
}
