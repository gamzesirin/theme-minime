'use client'

import BaseSlider from './BaseSlider'

const DisabledSlider = () => {
	return (
		<div className="space-y-4">
			<BaseSlider value={850} min={0} max={2000} disabled />
			<div className="text-sm text-muted-foreground">Value: 850</div>
		</div>
	)
}

export default DisabledSlider
