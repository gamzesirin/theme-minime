'use client'

import BaseSlider from './BaseSlider'
import { cn } from '@/lib/utils'

const CustomValuesSlider = ({ value, onChange }) => {
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

	return (
		<div className="space-y-4">
			<BaseSlider value={value} onChange={onChange} min={0} max={11} step={1} />
			<div className="grid grid-cols-12 gap-1 text-xs text-muted-foreground">
				{months.map((month, i) => (
					<div key={i} className={cn('text-center', value === i && 'font-medium text-primary')}>
						{month}
					</div>
				))}
			</div>
		</div>
	)
}

export default CustomValuesSlider
