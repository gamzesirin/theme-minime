'use client'
import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, variant = 'default', ...props }, ref) => {
	const variants = {
		default: 'border-b',
		bordered: 'border rounded-lg mb-2',
		filled: 'rounded-lg overflow-hidden mb-2 bg-muted/30'
	}
	return <AccordionPrimitive.Item ref={ref} className={cn(variants[variant], className)} {...props} />
})

const AccordionTrigger = React.forwardRef(({ className, children, variant = 'default', ...props }, ref) => {
	const variants = {
		default: 'py-4 font-medium transition-all hover:underline',
		bordered: 'px-4 py-4 font-medium transition-all hover:bg-muted/50',
		filled: 'px-4 py-4 font-medium bg-muted hover:bg-muted/80 transition-all'
	}
	return (
		<AccordionPrimitive.Header className="flex">
			<AccordionPrimitive.Trigger
				ref={ref}
				className={cn(
					'flex flex-1 items-center justify-between',
					variants[variant],
					'[&[data-state=open]>svg]:rotate-180',
					className
				)}
				{...props}
			>
				{children}
				<ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	)
})

const AccordionContent = React.forwardRef(({ className, children, variant = 'default', ...props }, ref) => {
	const variants = {
		default: 'pb-4 pt-0',
		bordered: 'px-4 pb-4 pt-0',
		filled: 'px-4 pb-4 pt-0 bg-muted/30'
	}
	return (
		<AccordionPrimitive.Content
			ref={ref}
			className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
			{...props}
		>
			<div className={cn(variants[variant], className)}>{children}</div>
		</AccordionPrimitive.Content>
	)
})

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
