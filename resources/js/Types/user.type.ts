export interface User {
  id: string
  name: string
  email: string
  email_verified_at: string
  current_team_id: number
  profile_photo_path: string
  created_at: string
  updated_at: string
  two_factor_confirmed_at: string
  profile_photo_url: string
  current_team: {
    id: number
    user_id: number
    name: string
    personal_team: boolean
    created_at: string
    updated_at: string
  },
}
