'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export default function RangeSlider({ initialValues = [-500, 500], onChange }) {
	const [values, setValues] = useState(initialValues)
	const [isDragging, setIsDragging] = useState(false)
	const sliderRef = useRef(null)
	const rangeWidth = useRef(initialValues[1] - initialValues[0])

	const calculateValues = (clientX) => {
		const slider = sliderRef.current
		if (!slider) return values

		const rect = slider.getBoundingClientRect()
		const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
		const middleValue = Math.round(percentage * 2000 - 1000)
		const halfRange = rangeWidth.current / 2

		let newValues = [
			Math.max(-1000, Math.min(1000 - rangeWidth.current, middleValue - halfRange)),
			Math.min(1000, Math.max(-1000 + rangeWidth.current, middleValue + halfRange))
		]

		return newValues
	}

	const handleMouseDown = (e) => {
		e.preventDefault()
		setIsDragging(true)
	}

	const handleMouseMove = (e) => {
		if (!isDragging) return

		const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
		const newValues = calculateValues(clientX)

		setValues(newValues)
		onChange?.(newValues)
	}

	const handleMouseUp = () => {
		setIsDragging(false)
	}

	useEffect(() => {
		if (isDragging) {
			window.addEventListener('mousemove', handleMouseMove)
			window.addEventListener('mouseup', handleMouseUp)
			window.addEventListener('touchmove', handleMouseMove, { passive: false })
			window.addEventListener('touchend', handleMouseUp)

			return () => {
				window.removeEventListener('mousemove', handleMouseMove)
				window.removeEventListener('mouseup', handleMouseUp)
				window.removeEventListener('touchmove', handleMouseMove)
				window.removeEventListener('touchend', handleMouseUp)
			}
		}
	}, [isDragging, values])

	const getPercentage = (value) => {
		return ((value + 1000) / 2000) * 100
	}

	return (
		<div className="space-y-4">
			<div className="relative h-10 flex items-center px-2.5">
				<div
					ref={sliderRef}
					className="relative h-2 w-full rounded-full bg-secondary cursor-pointer"
					onMouseDown={handleMouseDown}
					onTouchStart={handleMouseDown}
				>
					{/* Progress Bar */}
					<div
						className="absolute h-full rounded-full bg-primary"
						style={{
							left: `${getPercentage(values[0])}%`,
							right: `${100 - getPercentage(values[1])}%`
						}}
					/>

					{/* Handles */}
					{values.map((value, index) => (
						<div
							key={index}
							className={cn(
								'absolute top-1/2 -translate-y-1/2 -translate-x-1/2',
								'h-5 w-5 rounded-full border-2 border-primary bg-white',
								'transition-all duration-150',
								'pointer-events-none',
								isDragging && 'scale-110 shadow-md'
							)}
							style={{
								left: `${getPercentage(value)}%`
							}}
						/>
					))}
				</div>
			</div>

			<div className="flex justify-between text-sm text-muted-foreground">
				<span>Value 1: {values[0]}</span>
				<span>Value 2: {values[1]}</span>
			</div>
		</div>
	)
}
