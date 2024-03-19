import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function WeatherAdvice() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Advice(s)</AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-y-3 list-disc list-inside">
            <li>Wear sunscreen to protect your skin.</li>
            <li>Stay hydrated by drinking plenty of water.</li>
            <li>Wear a hat to shield yourself from the sun.</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
