import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { ENV_VARS_BASE_URL } from '@/constants/env-vars'
import { DateTimeHelpers } from '@/helpers/DateTimeHelpers'
import { TemperatureHelpers } from '@/helpers/TemperatureHelpers'
import { IHourlyWeather } from '@/types/Weather'
import Image from 'next/image'

interface HourlyForecastProps {
  data: IHourlyWeather[]
}

export default function HourlyForecast({ data }: HourlyForecastProps) {
  return (
    <div className="rounded-lg bg-slate-600/40">
      <ScrollArea>
        <div className="flex items-center gap-x-6 p-4">
          {data.slice(0, 12).map((item) => (
            <HourlyForecastWidget key={item.dt} data={item} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

// Composing component
// TODO: Refactor later if this component is used in multiple components
interface IForecastWidget {
  data: IHourlyWeather
}

function HourlyForecastWidget({ data }: IForecastWidget) {
  return (
    <div className="flex flex-col gap-y-3 items-center text-white">
      {DateTimeHelpers.isPresentTime({ unix: data.dt }) ? (
        <span className="text-sm">Now</span>
      ) : (
        <span className="text-sm">{DateTimeHelpers.convertTo24HrsFormat({ unix: data.dt })}</span>
      )}
      <div className="relative w-10 h-10">
        <Image
          alt="weather-logo"
          src={`${ENV_VARS_BASE_URL.openWeatherPublicBaseUrl}/img/wn/${data.weather[0].icon}@2x.png`}
          fill
          className="object-cover"
          sizes="(min-width: 808px) 50vw, 100vw"
          priority
        />
      </div>
      <span>{TemperatureHelpers.getExactTemperature(data.temp)}&deg;</span>
    </div>
  )
}
