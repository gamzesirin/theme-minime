'use client'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const BorderedAccordions = () => {
	return (
		<div className="space-y-4">
			<p className="text-muted-foreground">Click the accordions below to expand/collapse the accordion content.</p>
			<Accordion collapsible className="w-full">
				<AccordionItem variant="bordered" value="item-1">
					<AccordionTrigger variant="bordered">Accordion Item #1</AccordionTrigger>
					<AccordionContent variant="bordered">
						This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the
						appropriate classes that we use to style each element. These classes control the overall appearance, as well
						as the showing and hiding via CSS transitions.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem variant="bordered" value="item-2">
					<AccordionTrigger variant="bordered">Accordion Item #2</AccordionTrigger>
					<AccordionContent variant="bordered">
						You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that
						just about any HTML can go within the accordion-body, though the transition does limit overflow.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem variant="bordered" value="item-3">
					<AccordionTrigger variant="bordered">Accordion Item #3</AccordionTrigger>
					<AccordionContent variant="bordered">
						Third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up
						the space to make it look, at least at first glance, a bit more representative of how this would look in a
						real-world application.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}

export default BorderedAccordions
