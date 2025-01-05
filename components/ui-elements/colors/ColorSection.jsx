import React from 'react'

const ColorSection = () => {
	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<h3 className="text-lg font-medium">Colors</h3>
				<span className="text-sm text-muted-foreground">#5b73e8</span>
			</div>
			<div className="grid grid-cols-3 gap-4">
				<div className="space-y-2">
					<div className="h-20 w-20 rounded-lg bg-primary-subtle" />
					<div className="space-y-1">
						<p className="text-sm font-medium">bg-primary-subtle</p>
					</div>
				</div>
				<div className="space-y-2">
					<div className="h-20 w-20 rounded-lg bg-gradient-primary" />
					<div className="space-y-1">
						<p className="text-sm font-medium">bg-gradient-primary</p>
					</div>
				</div>
				<div className="space-y-2">
					<div className="h-20 w-20 rounded-lg bg-primary" />
					<div className="space-y-1">
						<p className="text-sm font-medium">bg-primary</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ColorSection
