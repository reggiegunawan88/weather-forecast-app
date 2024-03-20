import { useEffect, useState } from 'react'
import useForecastData from '../useForecastData'
import useWeatherImageData from '../useWeatherImageData'

export const useHomepage = () => {
  const [latitude, setLatitude] = useState<number | null>(null)
  const [longitude, setLongitude] = useState<number | null>(null)
  const [isLocationEnabled, setIsLocationEnabled] = useState<boolean | null>(null)

  useEffect(() => {
    // Retrieve latitude and longitude on client side
    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError)
  }, [])

  // Fetch weather forecast data
  const { forecast, isForecastError } = useForecastData({ lat: latitude, lon: longitude })

  // Fetch weather image data based on forecast keyword
  const weatherKeyword = forecast?.current.weather[0].main.toLowerCase()
  const { weatherImageUrl, isWeatherImageError } = useWeatherImageData({ forecast, keyword: weatherKeyword ?? '' })

  function geolocationSuccess(pos: GeolocationPosition) {
    const { latitude, longitude } = pos.coords
    setLatitude(latitude)
    setLongitude(longitude)
    setIsLocationEnabled(true)
  }

  function geolocationError() {
    setIsLocationEnabled(false)
  }

  return {
    isLocationEnabled,
    forecast,
    isForecastError,
    weatherImageUrl,
    isWeatherImageError,
  }
}

export default useHomepage
