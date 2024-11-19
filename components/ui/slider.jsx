'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { cn } from '@/lib/utils'

const Slider = React.forwardRef(
	(
		{
			className,
			variant = 'default',
			prefix,
			step,
			min = 0,
			max = 100,
			defaultValue,
			value,
			disabled,
			customValues,
			formatLabel,
			...props
		},
		ref
	) => {
		const variants = {
			default: 'relative flex w-full touch-none select-none items-center',
			minMax: 'relative flex w-full touch-none select-none items-center',
			prefix: 'relative flex w-full touch-none select-none items-center',
			range: 'relative flex w-full touch-none select-none items-center',
			custom: 'relative flex w-full touch-none select-none items-center'
		}

		const getTrackStyles = () => {
			if (disabled) return 'bg-gray-200'
			return 'bg-secondary'
		}

		const getRangeStyles = () => {
			if (disabled) return 'bg-gray-400'
			return 'bg-primary'
		}

		const formatValue = (value) => {
			if (formatLabel) return formatLabel(value)
			if (customValues) return customValues[value]
			if (prefix) return `${prefix}${value}`
			return value
		}

		return (
			<div className="space-y-2">
				{prefix && (
					<div className="flex justify-between text-sm">
						<span>
							{prefix}
							{min}
						</span>
						<span>
							{prefix}
							{max}
						</span>
					</div>
				)}
				<SliderPrimitive.Root
					ref={ref}
					min={min}
					max={max}
					step={step}
					disabled={disabled}
					value={value}
					defaultValue={defaultValue}
					className={cn(variants[variant], className)}
					{...props}
				>
					<SliderPrimitive.Track
						className={cn('relative h-2 w-full grow overflow-hidden rounded-full', getTrackStyles())}
					>
						<SliderPrimitive.Range className={cn('absolute h-full', getRangeStyles())} />
					</SliderPrimitive.Track>
					<SliderPrimitive.Thumb
						className={cn(
							'block h-5 w-5 rounded-full border-2 border-primary bg-background',
							'ring-offset-background transition-colors',
							'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
							'disabled:pointer-events-none disabled:opacity-50'
						)}
					/>
				</SliderPrimitive.Root>
				{customValues && (
					<div className="flex justify-between text-sm text-gray-500">
						{Object.values(customValues).map((label, index) => (
							<span key={index}>{label}</span>
						))}
					</div>
				)}
			</div>
		)
	}
)

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
