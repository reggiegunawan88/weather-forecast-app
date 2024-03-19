'use client'

import CurrentForecast from '@/containers/CurrentForecast'
import DaysForecast from '@/containers/DaysForecast'
import HourlyForecast from '@/containers/HourlyForecast'
import WeatherAdvice from '@/containers/WeatherAdvice'
import WeatherDescription from '@/containers/WeatherDescription'
import getForecastData from '@/services/OpenWeather/getForecastData'
import { Weather } from '@/types/ui-types'

import { useEffect, useState } from 'react'

export default function Home() {
  const [latitude, setLatitude] = useState<number | null>(null)
  const [longitude, setLongitude] = useState<number | null>(null)
  const [weather, setWeather] = useState<Weather | null>(null)

  const getData = async () => {
    if (latitude && longitude) {
      try {
        const weather = await getForecastData({
          lat: latitude,
          lon: longitude,
        })
        setWeather(weather)
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

  if (!weather) {
    return <p>Loading...</p>
  }

  console.log(weather)

  return (
    <main className="flex-1 p-4 overflow-auto">
      <div className="flex flex-col gap-y-4">
        <CurrentForecast data={weather.current} />
        <HourlyForecast data={weather.hourly} />
        <DaysForecast data={weather.daily} />
        <WeatherDescription />
        <WeatherAdvice />
      </div>
    </main>
  )
}
