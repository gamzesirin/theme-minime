'use client'

import BaseSlider from './BaseSlider'

const DefaultSlider = ({ value, onChange }) => {
	return (
		<div className="space-y-4">
			<BaseSlider value={value} onChange={onChange} min={0} max={100} />
			<div className="text-sm text-muted-foreground">Value: {value}</div>
		</div>
	)
}

export default DefaultSlider
