import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ENV_VARS_BASE_URL } from '@/constants/env-vars'
import { DateTimeHelpers } from '@/helpers/DateTimeHelpers'
import { TemperatureHelpers } from '@/helpers/TemperatureHelpers'
import { IDailyWeather } from '@/types/Weather'
import Image from 'next/image'

interface DailyForecastProps {
  data: IDailyWeather[]
}

export default function DailyForecast({ data }: DailyForecastProps) {
  return (
    <Accordion className="rounded-lg bg-widget px-4" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>5-DAY FORECAST</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-y-2">
            {data.slice(0, 5).map((item) => (
              <DailyForecastWidget key={item.dt} data={item} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

// Composing component
// TODO: Refactor later if this component is used in multiple components
interface DailyForecastWidgetProps {
  data: IDailyWeather
}
function DailyForecastWidget({ data }: DailyForecastWidgetProps) {
  return (
    <div className="flex justify-between items-center p-2">
      <div className="grid grid-cols-2 gap-x-5 items-center">
        {DateTimeHelpers.isToday({ unix: data.dt }) ? (
          <span>Today</span>
        ) : (
          <span>{DateTimeHelpers.convertToFullDate({ unix: data.dt, shorthand: true })}</span>
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
      </div>
      <div className="flex flex-col gap-y-1 items-center">
        <span>
          {TemperatureHelpers.getExactTemperature(data.temp.max)}&deg; / {TemperatureHelpers.getExactTemperature(data.temp.min)}&deg;
        </span>
        <span className="text-xs">{data.weather[0].description}</span>
      </div>
    </div>
  )
}
