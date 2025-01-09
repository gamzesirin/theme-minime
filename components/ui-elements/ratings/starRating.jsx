'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'

export function StarRating({ total = 5, defaultValue = 0, onChange }) {
	const [rating, setRating] = useState(defaultValue)
	const [hover, setHover] = useState(0)

	const handleClick = (value) => {
		setRating(value)
		if (onChange) onChange(value)
	}

	return (
		<div className="flex gap-1">
			{[...Array(total)].map((_, index) => {
				const value = index + 1
				return (
					<button
						key={value}
						type="button"
						className="text-2xl focus:outline-none"
						onClick={() => handleClick(value)}
						onMouseEnter={() => setHover(value)}
						onMouseLeave={() => setHover(0)}
					>
						<Star
							className={`w-6 h-6 ${
								value <= (hover || rating) ? 'fill-primary text-primary' : 'fill-muted text-muted-foreground'
							}`}
						/>
					</button>
				)
			})}
		</div>
	)
}
