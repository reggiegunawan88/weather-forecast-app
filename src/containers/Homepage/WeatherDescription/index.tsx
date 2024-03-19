import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { IDailyWeather } from '@/types/Weather'

interface Props {
  data: IDailyWeather
}

export default function WeatherDescription({ data }: Props) {
  return (
    <Accordion className="rounded-lg px-4 bg-widget" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Detailed Description</AccordionTrigger>
        <AccordionContent>
          <div className="py-3">
            <span className="capitalize">{data.summary}.</span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
