import useGeolocation from '../common/useGeolocation'
import useForecastSWR from '../swr/useForecastSWR'
import useUnsplashSWR from '../swr/useUnsplashSWR'

export const useHomepage = () => {
  const { latitude, longitude, isLocationEnabled } = useGeolocation()

  // Fetch weather forecast data
  const { forecast, isForecastError } = useForecastSWR({ lat: latitude, lon: longitude })

  // Fetch weather image data based on forecast keyword
  const weatherKeyword = forecast?.current.weather[0].main.toLowerCase()
  const { weatherImageUrl, isWeatherImageError } = useUnsplashSWR({ forecast, keyword: weatherKeyword ?? '' })

  return {
    isLocationEnabled,
    forecast,
    isForecastError,
    weatherImageUrl,
    isWeatherImageError,
  }
}

export default useHomepage
