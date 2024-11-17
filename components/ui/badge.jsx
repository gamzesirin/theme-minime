import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
	'inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
	{
		variants: {
			variant: {
				default: 'border-slate-200 bg-slate-100 text-slate-900 hover:bg-slate-200/80',
				secondary: 'border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80',
				destructive: 'border-transparent bg-red-100 text-red-700 hover:bg-red-100/80',
				outline: 'border-slate-200 bg-transparent text-slate-900 hover:bg-slate-100',
				success: 'border-transparent bg-emerald-100 text-emerald-700 hover:bg-emerald-100/80',
				info: 'border-transparent bg-sky-100 text-sky-700 hover:bg-sky-100/80',
				warning: 'border-transparent bg-amber-100 text-amber-700 hover:bg-amber-100/80',
				soft: 'border-transparent bg-slate-100 text-slate-700 hover:bg-slate-200/60',

				'default-solid': 'border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/90',
				'secondary-solid': 'border-transparent bg-slate-600 text-slate-50 hover:bg-slate-600/90',
				'destructive-solid': 'border-transparent bg-red-500 text-white hover:bg-red-500/90',
				'success-solid': 'border-transparent bg-emerald-500 text-white hover:bg-emerald-500/90',
				'info-solid': 'border-transparent bg-sky-500 text-white hover:bg-sky-500/90',
				'warning-solid': 'border-transparent bg-amber-500 text-white hover:bg-amber-500/90',

				'outline-primary': 'border-slate-900 bg-transparent text-slate-900 hover:bg-slate-100',
				'outline-destructive': 'border-red-500 bg-transparent text-red-700 hover:bg-red-50',
				'outline-success': 'border-emerald-500 bg-transparent text-emerald-700 hover:bg-emerald-50',
				'outline-info': 'border-sky-500 bg-transparent text-sky-700 hover:bg-sky-50',
				'outline-warning': 'border-amber-500 bg-transparent text-amber-700 hover:bg-amber-50'
			},
			size: {
				sm: 'text-xs px-2.5 py-0.5 rounded-xl',
				default: 'text-sm px-3 py-0.5 rounded-xl',
				lg: 'text-base px-4 py-0.5 rounded-xl'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
)

function Badge({ className, variant, size, ...props }) {
	return <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
}

export { Badge, badgeVariants }
