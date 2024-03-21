'use client'

import CurrentForecast from '@/components/containers/Homepage/CurrentForecast'
import DailyForecast from '@/components/containers/Homepage/DailyForecast'
import HourlyForecast from '@/components/containers/Homepage/HourlyForecast'
import WeatherAdvice from '@/components/containers/Homepage/WeatherAdvice'
import WeatherDescription from '@/components/containers/Homepage/WeatherDescription'

import EmptyState from '@/components/common/EmptyState'
import Image from 'next/image'
import useHomepage from './hooks/useHomepage'

interface HomepageProps {
  lat: number
  lon: number
}

export default function Homepage({ lat, lon }: HomepageProps) {
  const { forecast, isForecastError, weatherImageUrl, isWeatherImageError } = useHomepage({ lat, lon })

  if (isForecastError) return <EmptyState description="An error occurred while fetching weather forecast data, please try again later." />

  if (isWeatherImageError) return <EmptyState description="An error occurred while fetching weather background image, please try again later." />

  if (!forecast || !weatherImageUrl) {
    // Return full flex empty container so it won't affect display CLS while loading the data
    return <main className="flex-1"></main>
  }

  return (
    <section aria-label="homepage-content">
      {/* Full screen background image */}
      <div className="fixed top-0 left-0 h-screen w-full -z-10">
        <Image alt="bg-image" className="object-cover" src={weatherImageUrl} fill priority blurDataURL={weatherImageUrl} />
      </div>

      {/* Page contents */}
      <div className="flex flex-col gap-y-4 max-w-screen-laptopM laptopM:mx-auto">
        <CurrentForecast data={forecast.current} />
        <HourlyForecast data={forecast.hourly} />
        <DailyForecast data={forecast.daily} />
        <WeatherDescription summary={forecast.daily[0].summary} />
        <WeatherAdvice weatherId={forecast.current.weather[0].id} />
      </div>
    </section>
  )
}
