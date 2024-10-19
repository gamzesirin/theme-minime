import React from 'react'

const cn = (...classes) => classes.filter(Boolean).join(' ')

const variants = {
	ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
	default: 'bg-blue-500 text-white hover:bg-blue-600',
	light: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
	success: 'bg-green-500 text-white hover:bg-green-600',
	info: 'bg-blue-400 text-white hover:bg-blue-500',
	warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
	danger: 'bg-red-500 text-white hover:bg-red-600',
	dark: 'bg-gray-800 text-white hover:bg-gray-900',
	link: 'text-blue-500  hover:text-blue-600',
	outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-100',
	'outline-primary': 'border border-blue-500 bg-white text-blue-500 hover:bg-blue-50',
	'outline-light': 'border border-gray-200 bg-white text-gray-800 hover:bg-gray-100',
	'outline-success': 'border border-green-500 bg-white text-green-500 hover:bg-green-50',
	'outline-info': 'border border-blue-400 bg-white text-blue-400 hover:bg-blue-50',
	'outline-warning': 'border border-yellow-500 bg-white text-yellow-500 hover:bg-yellow-50',
	'outline-danger': 'border border-red-500 bg-white text-red-500 hover:bg-red-50',
	'outline-dark': 'border border-gray-800 bg-white text-gray-800 hover:bg-gray-100',
	'outline-link': 'border border-transparent bg-white text-blue-500 hover:text-blue-600',
	'outline-ghost': 'border border-transparent bg-transparent text-gray-700 hover:bg-gray-100',
	'hover-primary': 'border border-blue-300 bg-blue-100 text-blue-600 hover:bg-blue-200 hover:border-blue-400',
	'hover-success': 'border border-green-300 bg-green-100 text-green-600 hover:bg-green-200 hover:border-green-400',
	'hover-info': 'border border-blue-300 bg-blue-100 text-blue-500 hover:bg-blue-200 hover:border-blue-400',
	'hover-warning': 'border border-yellow-300 bg-yellow-100 text-yellow-600 hover:bg-yellow-200 hover:border-yellow-400',
	'hover-danger': 'border border-red-300 bg-red-100 text-red-600 hover:bg-red-200 hover:border-red-400',
	'hover-dark': 'border border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-300 hover:border-gray-400',
	'hover-secondary': 'border border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-200 hover:border-gray-300'
}

const sizes = {
	default: 'px-4 py-2',
	sm: 'px-2 py-1 text-sm',
	lg: 'px-6 py-3 text-lg',
	icon: 'p-2'
}

const roundedStyles = {
	default: 'rounded-sm',
	full: 'rounded-full'
}

const Button = React.forwardRef(
	({ className, variant = 'default', size = 'default', rounded = 'default', children, ...props }, ref) => {
		const baseClass =
			'inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none'
		const variantClass = variants[variant] || variants.default
		const sizeClass = sizes[size] || sizes.default
		const roundedClass = roundedStyles[rounded] || roundedStyles.default

		return (
			<button ref={ref} className={cn(baseClass, variantClass, sizeClass, roundedClass, className)} {...props}>
				{children}
			</button>
		)
	}
)

Button.displayName = 'Button'

const ButtonGroup = React.forwardRef(({ className, children, ...props }, ref) => (
	<div ref={ref} className={cn('inline-flex rounded-md shadow-sm', className)} role="group" {...props}>
		{children}
	</div>
))

ButtonGroup.displayName = 'ButtonGroup'

const ButtonToolbar = React.forwardRef(({ className, children, ...props }, ref) => (
	<div ref={ref} className={cn('flex flex-wrap gap-2', className)} role="toolbar" {...props}>
		{children}
	</div>
))

ButtonToolbar.displayName = 'ButtonToolbar'

export { Button, ButtonGroup, ButtonToolbar }
