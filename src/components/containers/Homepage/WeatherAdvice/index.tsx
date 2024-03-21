import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { WeatherHelpers } from '@/helpers/WeatherHelpers'

interface Props {
  temp: number
  weatherDesc: string
}

export default function WeatherAdvice({ temp, weatherDesc }: Props) {
  return (
    <Accordion className="rounded-lg bg-widget px-4" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Advice</AccordionTrigger>
        <AccordionContent>
          <div className="py-3">
            <span aria-label="weather-advice-text" className="leading-6">
              {WeatherHelpers.getWeatherAdvice({ temp, weatherDesc })}
            </span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
