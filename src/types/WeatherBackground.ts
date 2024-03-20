export interface WeatherImage {
  alt_description: string
  alternative_slugs: any
  asset_type: string
  blur_hash: string
  breadcrumbs: []
  color: string
  created_at: string
  current_user_collections: []
  description: null
  height: 3264
  id: string
  liked_by_user: boolean
  likes: number
  links: any
  promoted_at: string
  slug: string
  sponsorship: null
  tags: []
  topic_submissions: any
  updated_at: string
  urls: {
    full: string
    raw: string
    regular: string
    small: string
    small_s3: string
    thumb: string
  }
  user: any
  width: number
}

export interface WeatherImageResponse {
  results: WeatherImage[]
  total: number
  total_pages: number
}
