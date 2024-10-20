import React from 'react'
import { cn } from '@/lib/utils'

const variantStyles = {
	default: 'bg-white border-gray-200',
	warning: 'bg-yellow-100 border-yellow-300 text-yellow-800',
	danger: 'bg-red-100 border-red-300 text-red-800',
	dark: 'bg-gray-800 text-white',
	outline: 'bg-transparent border-2 border-primary text-gray-900',
	success: 'bg-green-50 border-green-500 text-green-800',
	'outline-danger': 'bg-transparent border-2 border-red-500 text-red-500',
	'outline-warning': 'bg-transparent border-2 border-yellow-500 text-yellow-500',
	'outline-success': 'bg-transparent border-2 border-green-500 text-green-500',
	'outline-dark': 'bg-transparent border-2 border-gray-800 text-gray-800',
	image: 'overflow-hidden',
	horizontal: 'flex overflow-hidden',
	background: 'relative overflow-hidden',
	quote: 'bg-white border-gray-200',
	featured: 'bg-white border-gray-200'
}

export const Card = React.forwardRef(({ className, variant = 'default', ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={cn(
				'rounded-lg border shadow-sm',
				'w-full max-w-sm',
				'h-auto min-h-[16rem]',
				variantStyles[variant],
				className
			)}
			{...props}
		/>
	)
})
Card.displayName = 'Card'

export const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
))
CardHeader.displayName = 'CardHeader'

export const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
	<h3 ref={ref} className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />
))
CardTitle.displayName = 'CardTitle'

export const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
	<p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
))
CardDescription.displayName = 'CardDescription'

export const CardContent = React.forwardRef(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

export const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
))
CardFooter.displayName = 'CardFooter'
