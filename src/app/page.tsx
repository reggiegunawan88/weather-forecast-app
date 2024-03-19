'use client'

import Loading from '@/app/loading'
import CurrentForecast from '@/containers/Homepage/CurrentForecast'
import DailyForecast from '@/containers/Homepage/DailyForecast'
import HourlyForecast from '@/containers/Homepage/HourlyForecast'
import WeatherAdvice from '@/containers/Homepage/WeatherAdvice'
import WeatherDescription from '@/containers/Homepage/WeatherDescription'
import { WeatherHelpers } from '@/helpers/WeatherHelpers'
import getForecastData from '@/services/OpenWeather/getForecastData'
import getWeatherImage from '@/services/Unsplash/getWeatherImage'
import { Weather } from '@/types/Weather'
import { WeatherBackgrondResponse } from '@/types/WeatherBackground'

import { useEffect, useState } from 'react'
// import Loading from './loading'

export default function Homepage() {
  const [latitude, setLatitude] = useState<number | null>(null)
  const [longitude, setLongitude] = useState<number | null>(null)
  const [weather, setWeather] = useState<Weather | null>(null)
  const [bgImage, setBgImage] = useState('')

  const getData = async () => {
    if (latitude && longitude) {
      try {
        const weather = await getForecastData({
          lat: latitude,
          lon: longitude,
        })
        const weatherKeyword = WeatherHelpers.getWeatherKeyword(weather.current.weather[0].main.toLowerCase())
        const weatherBgResponse: WeatherBackgrondResponse = await getWeatherImage({ queryString: weatherKeyword })
        setWeather(weather)
        setBgImage(weatherBgResponse.results[0].urls.raw)
      } catch (error) {
        // no-op
        console.error(error)
      }
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      const { latitude, longitude } = coords
      console.log(latitude, longitude)
      setLatitude(latitude)
      setLongitude(longitude)
    })
  }, [])

  useEffect(() => {
    getData()
  }, [latitude])

  if (!weather || !bgImage) {
    return <Loading />
  }

  return (
    <main className="flex-1 overflow-auto p-4 bg-cover bg-center text-white" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="flex flex-col gap-y-4">
        <CurrentForecast data={weather.current} />
        <HourlyForecast data={weather.hourly} />
        <DailyForecast data={weather.daily} />
        <WeatherDescription data={weather.daily[0]} />
        <WeatherAdvice data={weather.current} />
      </div>
    </main>
  )
}
