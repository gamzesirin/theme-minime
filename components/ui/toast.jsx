'use client'

import * as React from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

const ToastProvider = ToastPrimitive.Provider

const ToastViewport = React.forwardRef(({ className, ...props }, ref) => (
	<ToastPrimitive.Viewport
		ref={ref}
		className={cn(
			'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
			className
		)}
		{...props}
	/>
))
ToastViewport.displayName = ToastPrimitive.Viewport.displayName

const toastVariants = {
	default: 'bg-white border-gray-200 text-gray-900',
	primary: 'bg-blue-600 border-blue-600 text-white',
	success: 'bg-green-600 border-green-600 text-white',
	warning: 'bg-yellow-500 border-yellow-500 text-white',
	danger: 'bg-red-600 border-red-600 text-white',
	translucent: 'bg-white/80 backdrop-blur-sm border-gray-200/40 text-gray-900'
}

const Toast = React.forwardRef(({ className, variant = 'default', ...props }, ref) => {
	return (
		<ToastPrimitive.Root
			ref={ref}
			className={cn(
				'group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 shadow-lg transition-all',
				'animate-in fade-in-0 slide-in-from-right-full duration-300',
				'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-right-full',
				'data-[swipe=cancel]:translate-x-0',
				'data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]',
				'data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]',
				'data-[swipe=move]:transition-none',
				toastVariants[variant],
				className
			)}
			{...props}
		/>
	)
})
Toast.displayName = ToastPrimitive.Root.displayName

const ToastAction = React.forwardRef(({ className, ...props }, ref) => (
	<ToastPrimitive.Action
		ref={ref}
		className={cn(
			'inline-flex items-center justify-center rounded-md bg-transparent px-3 py-1 text-sm font-semibold transition-colors',
			'border border-slate-200 hover:bg-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-950 disabled:opacity-50',
			'group-[.success]:border-green-500/30 group-[.success]:hover:border-green-500/30 group-[.success]:hover:bg-green-500/10',
			'group-[.danger]:border-red-500/30 group-[.danger]:hover:border-red-500/30 group-[.danger]:hover:bg-red-500/10',
			'group-[.warning]:border-yellow-500/30 group-[.warning]:hover:border-yellow-500/30 group-[.warning]:hover:bg-yellow-500/10',
			'group-[.primary]:border-blue-500/30 group-[.primary]:hover:border-blue-500/30 group-[.primary]:hover:bg-blue-500/10',
			'group-[.translucent]:border-gray-200/40',
			className
		)}
		{...props}
	/>
))
ToastAction.displayName = ToastPrimitive.Action.displayName

const ToastClose = React.forwardRef(({ className, ...props }, ref) => (
	<ToastPrimitive.Close
		ref={ref}
		className={cn(
			'absolute right-1 top-1 rounded-md p-1 opacity-0 transition-opacity group-hover:opacity-100',
			'text-slate-950/50 hover:text-slate-950',
			'group-[.success]:text-white/50 group-[.success]:hover:text-white',
			'group-[.danger]:text-white/50 group-[.danger]:hover:text-white',
			'group-[.warning]:text-white/50 group-[.warning]:hover:text-white',
			'group-[.primary]:text-white/50 group-[.primary]:hover:text-white',
			className
		)}
		toast-close=""
		{...props}
	>
		<X className="h-4 w-4" />
	</ToastPrimitive.Close>
))
ToastClose.displayName = ToastPrimitive.Close.displayName

const ToastTitle = React.forwardRef(({ className, ...props }, ref) => (
	<ToastPrimitive.Title ref={ref} className={cn('text-sm font-semibold line-clamp-1', className)} {...props} />
))
ToastTitle.displayName = ToastPrimitive.Title.displayName

const ToastDescription = React.forwardRef(({ className, ...props }, ref) => (
	<ToastPrimitive.Description ref={ref} className={cn('text-sm opacity-90 line-clamp-2', className)} {...props} />
))
ToastDescription.displayName = ToastPrimitive.Description.displayName

export { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction }
