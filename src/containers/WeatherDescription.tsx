import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function WeatherDescription() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Detailed Description</AccordionTrigger>
        <AccordionContent>
          <p>The sky is clear, and the sun is shining. It's a beautiful day with a gentle breeze.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
