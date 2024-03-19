import { SunIcon } from '@/components/Icons/TemperatureIcons'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DateTimeHelpers } from '@/helpers/DateTimeHelpers'
import { TemperatureHelpers } from '@/helpers/TemperatureHelpers'
import { IDailyWeather } from '@/types/ui-types'

interface DaysForecastProps {
  data: IDailyWeather[]
}

export default function DaysForecast({ data }: DaysForecastProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>5-DAY FORECAST</AccordionTrigger>
        <AccordionContent>
          <div className="border rounded-lg">
            <div className="flex flex-col gap-y-4 p-4">
              {data.slice(0, 5).map((item) => (
                <DayForecastWidget key={item.dt} data={item} />
              ))}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

// Composing function
interface DayForecastWidgetProps {
  data: IDailyWeather
}
function DayForecastWidget({ data }: DayForecastWidgetProps) {
  return (
    <div className="flex justify-between items-center p-2">
      <div className="grid grid-cols-2 gap-x-5">
        <span>{DateTimeHelpers.convertToFullDate({ unix: data.dt, shorthand: true })}</span>
        <SunIcon className="w-5 h-5 text-amber-400" />
      </div>

      <div className="flex items-center">
        <span>
          {TemperatureHelpers.getExactTemperature(data.temp.max)}&deg; / {TemperatureHelpers.getExactTemperature(data.temp.min)}&deg;
        </span>
      </div>
    </div>
  )
}
