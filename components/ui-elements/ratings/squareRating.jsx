'use client'

export function SquareRating({ max = 5, defaultValue = 0, onChange }) {
	return (
		<div className="flex gap-1">
			{[...Array(max)].map((_, i) => (
				<button
					key={i}
					onClick={() => onChange?.(i + 1)}
					className={`w-8 h-8 flex items-center justify-center border rounded 
            ${i < defaultValue ? 'bg-primary text-primary-foreground' : 'bg-background'}
          `}
				>
					{i + 1}
				</button>
			))}
		</div>
	)
}
