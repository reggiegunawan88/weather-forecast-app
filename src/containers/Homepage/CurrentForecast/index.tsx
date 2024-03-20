import { DropletIcon, WindIcon } from '@/components/Icons/TemperatureIcons'
import { ENV_VARS_BASE_URL } from '@/constants/env-vars'
import { DateTimeHelpers } from '@/helpers/DateTimeHelpers'
import { TemperatureHelpers } from '@/helpers/TemperatureHelpers'
import { ICurrentWeather } from '@/types/Weather'
import Image from 'next/image'

interface CurrentForecastProps {
  data: ICurrentWeather
}

export default function CurrentForecast({ data }: CurrentForecastProps) {
  return (
    <div className="flex flex-col gap-y-4 items-center bg-widget rounded-lg p-4">
      {/* Date info */}
      <span className="text-2xl font-semibold text-center">{DateTimeHelpers.convertToFullDate({ unix: data.dt })}</span>
      {/* Weather info */}
      <div className="flex flex-row items-center gap-x-2">
        <Image
          alt="weather-logo"
          src={`${ENV_VARS_BASE_URL.openWeatherPublicBaseUrl}/img/wn/${data.weather[0].icon}@2x.png`}
          width={100}
          height={100}
          priority
        />
        <div className="flex flex-col gap-y-2 text-center">
          <span className="text-3xl font-bold">{TemperatureHelpers.getExactTemperature(data.temp)}&deg;</span>
          <span className="text-lg font-semibold">{data.weather[0].main}</span>
        </div>
      </div>
      {/* Humidity and Wind Speed info */}
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-2 items-center">
          <DropletIcon className="w-4 h-4" />
          <span>Humidity: {data.humidity}%</span>
        </div>
        <div className="flex gap-x-2 items-center">
          <WindIcon className="w-4 h-4" />
          <span>Wind: {data.wind_speed} km/h</span>
        </div>
      </div>
    </div>
  )
}
