import React from 'react'

const ColorSwatch = () => {
	return (
		<div className="space-y-2">
			<div className="h-20 w-20 rounded-lg bg-primary" />
			<div className="space-y-1">
				<p className="text-sm font-medium">bg-primary</p>
				<p className="text-xs text-muted-foreground">#5b73e8</p>
			</div>
		</div>
	)
}

export default ColorSwatch
