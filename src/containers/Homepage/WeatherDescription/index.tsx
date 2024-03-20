import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

interface Props {
  summary: string
}

export default function WeatherDescription({ summary }: Props) {
  return (
    <Accordion className="rounded-lg px-4 bg-widget" type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Detailed Description</AccordionTrigger>
        <AccordionContent>
          <div className="py-3">
            <span className="capitalize">{summary}.</span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
