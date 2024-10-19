import * as React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const alertVariants = cva('relative w-full rounded-lg border p-4 transition-all duration-200', {
	variants: {
		variant: {
			default: 'bg-background text-foreground hover:bg-gray-50 dark:hover:bg-gray-800',
			success:
				'border-green-500/30 bg-green-50/50 text-green-800 dark:border-green-500/30 dark:bg-green-900/20 dark:text-green-400 [&>svg]:text-green-600',
			warning:
				'border-yellow-500/30 bg-yellow-50/50 text-yellow-800 dark:border-yellow-500/30 dark:bg-yellow-900/20 dark:text-yellow-400 [&>svg]:text-yellow-600',
			error:
				'border-red-500/30 bg-red-50/50 text-red-800 dark:border-red-500/30 dark:bg-red-900/20 dark:text-red-400 [&>svg]:text-red-600',
			info: 'border-blue-500/30 bg-blue-50/50 text-blue-800 dark:border-blue-500/30 dark:bg-blue-900/20 dark:text-blue-400 [&>svg]:text-blue-600',
			dark: 'border-gray-800/30 bg-gray-800/50 text-gray-100 dark:border-gray-800/30 dark:bg-gray-800/20 dark:text-gray-100 [&>svg]:text-gray-200',
			light:
				'border-gray-200/30 bg-gray-200/50 text-gray-800 dark:border-gray-200/30 dark:bg-gray-200/20 dark:text-gray-800 [&>svg]:text-gray-800',
			'border-error':
				'border-red-500/30 border-l-4 bg-red-50/50 text-red-800 dark:border-red-500/30 dark:bg-red-900/20 dark:text-red-400 [&>svg]:text-red-600',
			'border-warning':
				'border-yellow-500/30 border-l-4 bg-yellow-50/50 text-yellow-800 dark:border-yellow-500/30 dark:bg-yellow-900/20 dark:text-yellow-400 [&>svg]:text-yellow-600',
			'border-success':
				'border-green-500/30 border-l-4 bg-green-50/50 text-green-800 dark:border-green-500/30 dark:bg-green-900/20 dark:text-green-400 [&>svg]:text-green-600',
			'border-info':
				'border-blue-500/30 border-l-4 bg-blue-50/50 text-blue-800 dark:border-blue-500/30 dark:bg-blue-900/20 dark:text-blue-400 [&>svg]:text-blue-600',
			'border-dark':
				'border-gray-800/30 border-l-4 bg-gray-800/50 text-gray-100 dark:border-gray-800/30 dark:bg-gray-800/20 dark:text-gray-100 [&>svg]:text-gray-200',
			'border-light':
				'border-gray-200/30 border-l-4 bg-gray-200/50 text-gray-800 dark:border-gray-200/30 dark:bg-gray-200/20 dark:text-gray-800 [&>svg]:text-gray-800',

			'card-error':
				'border-red-500/30 bg-red-50/50 text-red-800 dark:border-red-500/30 dark:bg-red-900/20 dark:text-red-400 [&>svg]:text-red-600 max-w-sm mx-auto relative',
			'card-warning':
				'border-yellow-500/30 bg-yellow-50/50 text-yellow-800 dark:border-yellow-500/30 dark:bg-yellow-900/20 dark:text-yellow-400 [&>svg]:text-yellow-600 max-w-sm mx-auto relative',
			'card-success':
				'border-green-500/30 bg-green-50/50 text-green-800 dark:border-green-500/30 dark:bg-green-900/20 dark:text-green-400 [&>svg]:text-green-600 max-w-sm mx-auto relative',
			'card-info':
				'border-blue-500/30 bg-blue-50/50 text-blue-800 dark:border-blue-500/30 dark:bg-blue-900/20 dark:text-blue-400 [&>svg]:text-blue-600 max-w-sm mx-auto relative ',
			'card-dark':
				'border-gray-800/30 bg-gray-800/50 text-gray-100 dark:border-gray-800/30 dark:bg-gray-800/20 dark:text-gray-100 [&>svg]:text-gray-200 max-w-sm mx-auto relative',
			'top-error':
				'border-red-500/30 border-t-4 bg-red-50/50 text-red-800 dark:border-red-500/30 dark:bg-red-900/20 dark:text-red-400 [&>svg]:text-red-600 relative',
			'top-warning':
				'border-yellow-500/30 border-t-4 bg-yellow-50/50 text-yellow-800 dark:border-yellow-500/30 dark:bg-yellow-900/20 dark:text-yellow-400 [&>svg]:text-yellow-600 relative',
			'top-success':
				'border-green-500/30 border-t-4 bg-green-50/50 text-green-800 dark:border-green-500/30 dark:bg-green-900/20 dark:text-green-400 [&>svg]:text-green-600 relative',
			'top-info':
				'border-blue-500/30 border-t-4 bg-blue-50/50 text-blue-800 dark:border-blue-500/30 dark:bg-blue-900/20 dark:text-blue-400 [&>svg]:text-blue-600 relative',
			'top-dark':
				'border-gray-800/30 border-t-4 bg-gray-800/50 text-gray-100 dark:border-gray-800/30 dark:bg-gray-800/20 dark:text-gray-100 [&>svg]:text-gray-200 relative'
		},
		size: {
			sm: 'p-3 text-sm',
			default: 'p-4',
			lg: 'p-6 text-lg'
		},
		rounded: {
			default: 'rounded-lg',
			full: 'rounded-full',
			none: 'rounded-none'
		},
		shadow: {
			default: 'shadow-md',
			lg: 'shadow-lg',
			none: 'shadow-none'
		},
		layout: {
			default: 'flex items-start',
			centered: 'flex flex-col items-center text-center'
		},
		iconPosition: {
			left: '[&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px]',
			top: '[&>svg]:mb-2',
			none: ''
		},
		closable: {
			true: 'pr-10',
			false: ''
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
		rounded: 'default',
		layout: 'default',
		iconPosition: 'left',
		closable: false
	}
})

const Alert = React.forwardRef(
	({ className, variant, size, rounded, layout, iconPosition, closable, ...props }, ref) => (
		<div
			ref={ref}
			role="alert"
			className={cn(alertVariants({ variant, size, rounded, layout, iconPosition, closable }), className)}
			{...props}
		/>
	)
)
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
	<h5 ref={ref} className={cn('mb-1 font-medium leading-none tracking-tight', className)} {...props} />
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('text-sm [&_p]:leading-relaxed opacity-90', className)} {...props} />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }
