import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { WeatherHelpers } from '@/helpers/WeatherHelpers'
import { ICurrentWeather } from '@/types/Weather'

interface Props {
  data: ICurrentWeather
}

export default function WeatherAdvice({ data }: Props) {
  return (
    <Accordion className="rounded-lg bg-widget px-4" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Advice</AccordionTrigger>
        <AccordionContent>
          <div className="py-3">
            <span className="leading-6">{WeatherHelpers.getWeatherAdvice(data)}</span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
