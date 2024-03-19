import { ENV_VARS_BASE_URL, ENV_VARS_SECRET_KEY } from '@/constants/env-vars'
import { Weather } from '@/types/Weather'
interface Props {
  lat: number
  lon: number
}

async function getForecastData({ lat, lon }: Props): Promise<Weather> {
  const requiredParams = `lat=${lat}&lon=${lon}&appid=${ENV_VARS_SECRET_KEY.openWeatherApiKey}`
  const optionalParams = `units=metric&exclude=minutely`
  const url = `${ENV_VARS_BASE_URL.openWeatherApiBaseUrl}/data/3.0/onecall?${requiredParams}&${optionalParams}`
  const result = await fetch(url)
  return result.json()
}

export default getForecastData
