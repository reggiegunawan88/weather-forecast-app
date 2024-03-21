import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { WeatherHelpers } from '@/helpers/WeatherHelpers'

interface Props {
  weatherId: number
}

export default function WeatherAdvice({ weatherId }: Props) {
  return (
    <Accordion className="rounded-lg bg-widget px-4" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Advice</AccordionTrigger>
        <AccordionContent>
          <div className="py-3">
            <span aria-label="weather-advice-text" className="leading-6">
              {WeatherHelpers.getWeatherAdvice(weatherId)}
            </span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
