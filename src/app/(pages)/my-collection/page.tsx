import { fetchMessage } from '@/app/lib/data'

export default async function MyCollection () {
  const asd = await fetchMessage()
  console.log('🚀 ~ file: page.tsx:5 ~ MyCollection ~ asd:', asd)

  return (
    <div>
      <h1>My Collection</h1>
    </div>
  )
}
