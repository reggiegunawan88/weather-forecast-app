import { WeatherHelpers } from '@/helpers/WeatherHelpers'
import fetcher from '@/services/fetcher'
import getForecastAPIUrl from '@/services/queries/OpenWeather/getForecastUrlQueries'
import getUnsplashAPIUrl from '@/services/queries/Unsplash/getUnsplashAPIUrl'
import { Weather } from '@/types/Weather'
import { WeatherImageResponse } from '@/types/WeatherBackground'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

export const useHomepage = () => {
  const [latitude, setLatitude] = useState<number | null>(null)
  const [longitude, setLongitude] = useState<number | null>(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords
      setLatitude(latitude)
      setLongitude(longitude)
    })
  }, [])

  // Fetch weather forecast data
  const { data: forecast, error: forecastError } = useSWR<Weather>(
    latitude && longitude ? getForecastAPIUrl({ lat: latitude, lon: longitude }) : null,
    fetcher,
    { suspense: true }
  )

  // Fetch weather image data
  const weatherKeyword = forecast?.current.weather[0].main.toLowerCase()
  const { data: weatherImage, error: weatherImageError } = useSWR<WeatherImageResponse>(
    forecast ? getUnsplashAPIUrl({ queryString: WeatherHelpers.getWeatherKeyword(weatherKeyword!) }) : null,
    fetcher
  )

  return {
    forecast,
    forecastError,
    weatherImage,
  }
}

export default useHomepage
