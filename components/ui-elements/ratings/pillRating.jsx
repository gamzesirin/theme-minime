'use client'

export function PillRating({ defaultValue = 'C', onChange }) {
	const grades = ['A', 'B', 'C', 'D', 'F']

	return (
		<div className="flex gap-1">
			{grades.map((grade) => (
				<button
					key={grade}
					onClick={() => onChange?.(grade)}
					className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${
							grade === defaultValue
								? 'bg-primary text-primary-foreground'
								: 'bg-muted text-muted-foreground hover:bg-muted/80'
						}`}
				>
					{grade}
				</button>
			))}
		</div>
	)
}
