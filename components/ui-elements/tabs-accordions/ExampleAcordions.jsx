import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
const ExampleAccordion = () => {
	return (
		<div>
			<section className="space-y-4">
				<p className="text-muted-foreground">Click the accordions below to expand/collapse the accordion content.</p>
				<Accordion collapsible className="w-full">
					<AccordionItem value="item-1">
						<AccordionTrigger>Accordion Item #1</AccordionTrigger>
						<AccordionContent>
							This is the first item&apos;s accordion body. It is hidden by default, until the collapse plugin adds the
							appropriate classes that we use to style each element. These classes control the overall appearance, as
							well as the showing and hiding via CSS transitions.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>Accordion Item #2</AccordionTrigger>
						<AccordionContent>
							You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth
							noting that just about any HTML can go within the accordion-body, though the transition does limit
							overflow.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>Accordion Item #3</AccordionTrigger>
						<AccordionContent>
							Third item&apos;s accordion body. Nothing more exciting happening here in terms of content, but just
							filling up the space to make it look, at least at first glance, a bit more representative of how this
							would look in a real-world application.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</section>
		</div>
	)
}

export default ExampleAccordion
