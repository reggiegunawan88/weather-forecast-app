'use client'

import CurrentForecast from '@/containers/Homepage/CurrentForecast'
import DailyForecast from '@/containers/Homepage/DailyForecast'
import HourlyForecast from '@/containers/Homepage/HourlyForecast'
import WeatherAdvice from '@/containers/Homepage/WeatherAdvice'
import WeatherDescription from '@/containers/Homepage/WeatherDescription'

import EmptyState from '@/components/EmptyState'
import useHomepage from './hooks/useHomepage'

export default function Homepage() {
  const { forecast, forecastError, weatherImage } = useHomepage()

  if (forecastError) return <EmptyState description="Error occurred while fetching weather forecast data, please try again later." />
  if (!forecast || !weatherImage) {
    return <main className="flex-1"></main>
  }

  return (
    <main className="flex-1 overflow-auto p-4 bg-cover text-white" style={{ backgroundImage: `url(${weatherImage?.results[0].urls.raw})` }}>
      <div className="flex flex-col gap-y-4">
        <CurrentForecast data={forecast.current} />
        <HourlyForecast data={forecast.hourly} />
        <DailyForecast data={forecast.daily} />
        <WeatherDescription data={forecast.daily[0]} />
        <WeatherAdvice data={forecast.current} />
      </div>
    </main>
  )
}
