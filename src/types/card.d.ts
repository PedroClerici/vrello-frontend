export type Card = {
  image?: string
  tags?: Tag[]
  title: string
  description?: string
  id: number
}

type Tag = {
  name: string
  color: 'red' | 'green' | 'blue' | 'purple' | 'yellow'
}
