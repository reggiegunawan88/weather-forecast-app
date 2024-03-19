import { ENV_VARS_BASE_URL, ENV_VARS_SECRET_KEY } from '@/constants/env-vars'
interface Props {
  queryString: string
}

async function getWeatherImage({ queryString }: Props) {
  const url = `${ENV_VARS_BASE_URL.unsplashApiBaseUrl}/search/photos?query=${queryString}&per_page=1&client_id=${ENV_VARS_SECRET_KEY.unsplashAccessKey}`
  const result = await fetch(url)
  return result.json()
}

export default getWeatherImage
