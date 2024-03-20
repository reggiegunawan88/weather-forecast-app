'use client'

import CurrentForecast from '@/containers/Homepage/CurrentForecast'
import DailyForecast from '@/containers/Homepage/DailyForecast'
import HourlyForecast from '@/containers/Homepage/HourlyForecast'
import WeatherAdvice from '@/containers/Homepage/WeatherAdvice'
import WeatherDescription from '@/containers/Homepage/WeatherDescription'

import EmptyState from '@/components/EmptyState'
import Image from 'next/image'
import useHomepage from './hooks/pages/useHomepage'

export default function Homepage() {
  const { isLocationEnabled, forecast, isForecastError, weatherImageUrl, isWeatherImageError } = useHomepage()

  if (isLocationEnabled === false) return <EmptyState description="Please enable your device location and reload the page." />

  if (isForecastError) return <EmptyState description="An error occurred while fetching weather forecast data, please try again later." />

  if (isWeatherImageError) return <EmptyState description="An error occurred while fetching weather background image, please try again later." />

  if (!forecast || !weatherImageUrl) {
    // Return full flex empty container so it won't affect display CLS while loading the data
    return <main className="flex-1"></main>
  }

  return (
    <main className="flex-1 overflow-auto p-4 bg-cover text-white">
      {/* Full screen background image */}
      <div className="fixed top-0 left-0 h-screen w-full -z-10">
        <Image alt="bg-image" className="object-cover" src={weatherImageUrl} fill priority />
      </div>

      {/* Page contents */}
      <div className="relative z-10 flex flex-col gap-y-4 max-w-screen-laptopM laptopM:mx-auto">
        <CurrentForecast data={forecast.current} />
        <HourlyForecast data={forecast.hourly} />
        <DailyForecast data={forecast.daily} />
        <WeatherDescription summary={forecast.daily[0].summary} />
        <WeatherAdvice temp={forecast.current.temp} weatherDesc={forecast.current.weather[0].description} />
      </div>
    </main>
  )
}
