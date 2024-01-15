import { UserPublic } from '@/Types/userPublic.type'

export interface Feed {
  id: string
  content: string
  user: UserPublic
  created_at: string
  updated_at?: string
}
