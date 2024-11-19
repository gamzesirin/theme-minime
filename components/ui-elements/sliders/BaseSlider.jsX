'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const BaseSlider = ({ min = 0, max = 100, step = 1, value, onChange, disabled = false, className }) => {
	const sliderRef = useRef(null)
	const [isDragging, setIsDragging] = useState(false)
	const [currentValue, setCurrentValue] = useState(value)

	useEffect(() => {
		setCurrentValue(value)
	}, [value])

	const calculateValue = (clientX) => {
		const slider = sliderRef.current
		const rect = slider.getBoundingClientRect()
		const percentage = (clientX - rect.left) / rect.width
		const rawValue = min + (max - min) * percentage
		const steppedValue = Math.round(rawValue / step) * step
		return Math.min(Math.max(steppedValue, min), max)
	}

	const handleMouseDown = (e) => {
		if (disabled) return
		setIsDragging(true)
		const value = calculateValue(e.clientX)
		setCurrentValue(value)
		onChange?.(value)
	}

	const handleMouseMove = (e) => {
		if (!isDragging || disabled) return
		const value = calculateValue(e.clientX)
		setCurrentValue(value)
		onChange?.(value)
	}

	const handleMouseUp = () => {
		setIsDragging(false)
	}

	useEffect(() => {
		if (isDragging) {
			document.addEventListener('mousemove', handleMouseMove)
			document.addEventListener('mouseup', handleMouseUp)
			return () => {
				document.removeEventListener('mousemove', handleMouseMove)
				document.removeEventListener('mouseup', handleMouseUp)
			}
		}
	}, [isDragging])

	const percentage = ((currentValue - min) / (max - min)) * 100

	return (
		<div
			ref={sliderRef}
			className={cn('relative h-2 w-full rounded-full', disabled ? 'bg-gray-200' : 'bg-secondary', className)}
			onMouseDown={handleMouseDown}
		>
			<div
				className={cn('absolute h-full rounded-full', disabled ? 'bg-gray-400' : 'bg-primary')}
				style={{ width: `${percentage}%` }}
			/>
			<div
				className={cn(
					'absolute top-1/2 -translate-y-1/2',
					'h-5 w-5 rounded-full border-2',
					disabled ? 'border-gray-400 bg-white' : 'border-primary bg-white',
					'transition-shadow',
					'focus:outline-none focus:ring-2 focus:ring-primary',
					disabled ? 'cursor-not-allowed' : 'cursor-pointer'
				)}
				style={{
					left: `${percentage}%`,
					transform: `translateX(-50%) translateY(-50%)`
				}}
			/>
		</div>
	)
}

export default BaseSlider
