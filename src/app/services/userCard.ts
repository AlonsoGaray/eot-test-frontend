export async function addUserCard (userId: string, cardId: string): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user-card/add`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId,
      cardId
    })
  })

  return await response.json()
}

export async function decreaseUserCard (userId: string, cardId: string): Promise<any> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user-card/decrease`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId,
      cardId
    })
  })

  return await response.json()
}
