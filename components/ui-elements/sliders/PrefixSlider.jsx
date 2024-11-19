'use client'

import BaseSlider from './BaseSlider'

const PrefixSlider = ({ value, onChange, prefix = '$' }) => {
	return (
		<div className="space-y-4">
			<div className="flex justify-between text-sm text-muted-foreground">
				<span>{prefix}0</span>
				<span>{prefix}1000</span>
			</div>
			<BaseSlider value={value} onChange={onChange} min={0} max={1000} />
			<div className="text-sm text-muted-foreground">
				Value: {prefix}
				{value}
			</div>
		</div>
	)
}

export default PrefixSlider
