import useGeolocation from '@/hooks/common/useGeolocation'
import useForecastSWR from '@/hooks/swr/useForecastSWR'
import useUnsplashSWR from '@/hooks/swr/useUnsplashSWR'

interface Props {
  lat: number
  lon: number
}

export const useHomepage = () => {
  const { latitude, longitude, locationEnabled } = useGeolocation()
  // Fetch weather forecast data
  const { forecast, isForecastError } = useForecastSWR({ lat: latitude, lon: longitude })

  // Fetch weather image data based on forecast keyword
  const weatherKeyword = forecast?.current.weather[0].main.toLowerCase()
  const { weatherImageUrl, isWeatherImageError } = useUnsplashSWR({ forecast, keyword: weatherKeyword ?? '' })

  return {
    isLocationEnabled: locationEnabled,
    forecast,
    isForecastError,
    weatherImageUrl,
    isWeatherImageError,
  }
}

export default useHomepage
