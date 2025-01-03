'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef(({ className, variant = 'default', ...props }, ref) => {
	const variants = {
		default: 'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
		pills: 'inline-flex h-10 items-center justify-center gap-1',
		vertical: 'flex flex-col space-y-1'
	}

	return <TabsPrimitive.List ref={ref} className={cn(variants[variant], className)} {...props} />
})
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(({ className, variant = 'default', ...props }, ref) => {
	const variants = {
		default:
			'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
		pills:
			'inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground',
		vertical:
			'w-full text-left px-4 py-2 rounded text-muted-foreground hover:bg-muted transition-colors data-[state=active]:bg-primary data-[state=active]:text-primary-foreground'
	}

	return <TabsPrimitive.Trigger ref={ref} className={cn(variants[variant], className)} {...props} />
})
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
	<TabsPrimitive.Content
		ref={ref}
		className={cn(
			'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
			className
		)}
		{...props}
	/>
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
