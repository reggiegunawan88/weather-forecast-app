import { ENV_VARS } from '@/constants/env-vars'
import { Weather } from '@/types/ui-types'
interface Props {
  lat: number
  lon: number
}

async function getForecastData({ lat, lon }: Props): Promise<Weather> {
  const requiredParams = `lat=${lat}&lon=${lon}&appid=${ENV_VARS.openWeatherApiKey}`
  const optionalParams = `units=metric&exclude=minutely`
  const url = `${ENV_VARS.openWeatherBaseUrl}/data/3.0/onecall?${requiredParams}&${optionalParams}`
  const result = await fetch(url)
  return result.json()
}

export default getForecastData
