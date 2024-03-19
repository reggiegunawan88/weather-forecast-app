import { SunIcon } from '@/components/Icons/TemperatureIcons'
import { TemperatureHelpers } from '@/helpers/TemperatureHelpers'
import { IHourlyWeather } from '@/types/ui-types'

interface HourlyForecastProps {
  data: IHourlyWeather[]
}

export default function HourlyForecast({ data }: HourlyForecastProps) {
  return (
    <div className="border rounded-lg bg-blue-300">
      <div className="flex items-center gap-x-5 overflow-x-auto p-4">
        {data.map((item) => (
          <ForecastWidget key={item.dt} data={item} />
        ))}
      </div>
    </div>
  )
}

// Composing component
interface IForecastWidget {
  data: IHourlyWeather
}

function ForecastWidget({ data }: IForecastWidget) {
  return (
    <div className="flex flex-col gap-y-2 items-center text-white">
      <span className="text-sm">Now</span>
      <SunIcon className="w-5 h-5" />
      <span>{TemperatureHelpers.getExactTemperature(data.temp)}&deg;</span>
    </div>
  )
}
