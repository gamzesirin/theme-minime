'use client'

import { useState } from 'react'

export function BarRating({ max = 10, defaultValue = 0, onChange }) {
	const [value, setValue] = useState(defaultValue)

	const handleClick = (newValue) => {
		setValue(newValue)
		if (onChange) onChange(newValue)
	}

	return (
		<div className="space-y-2">
			<div className="flex justify-between text-sm">
				<span>
					{value}/{max}
				</span>
				<span>Good</span>
			</div>
			<div
				className="h-2 bg-muted rounded-full cursor-pointer"
				onClick={(e) => {
					const rect = e.currentTarget.getBoundingClientRect()
					const x = e.clientX - rect.left
					const newValue = Math.ceil((x / rect.width) * max)
					handleClick(Math.min(Math.max(1, newValue), max))
				}}
			>
				<div className="h-full bg-primary rounded-full transition-all" style={{ width: `${(value / max) * 100}%` }} />
			</div>
		</div>
	)
}
