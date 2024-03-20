import { ENV_VARS_BASE_URL, ENV_VARS_SECRET_KEY } from '@/constants/env-vars'

interface Props {
  lat: number
  lon: number
}

function getForecastAPIUrl({ lat, lon }: Props) {
  const requiredParams = `lat=${lat}&lon=${lon}&appid=${ENV_VARS_SECRET_KEY.openWeatherApiKey}`
  const optionalParams = `units=metric&exclude=minutely`
  const url = `${ENV_VARS_BASE_URL.openWeatherApiBaseUrl}/data/3.0/onecall?${requiredParams}&${optionalParams}`
  return url
}

export default getForecastAPIUrl
