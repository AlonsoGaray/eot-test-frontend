export async function addUserCard (userId: string, cardId: string): Promise<any> {
  const response = await fetch('http://localhost:8080/api/user-card/add', {
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
  const response = await fetch('http://localhost:8080/api/user-card/decrease', {
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
