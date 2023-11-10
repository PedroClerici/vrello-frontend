import { Tag } from './tag'

export type Card = {
  image?: string
  tags?: Tag[]
  title: string
  description?: string
  attachments?: number
  notes?: number
  id: number
}
