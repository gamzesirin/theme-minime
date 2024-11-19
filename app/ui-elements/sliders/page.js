'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import DefaultSlider from '@/components/ui-elements/sliders/DefaultSlider'
import RangeSlider from '@/components/ui-elements/sliders/RangeSlider'
import PrefixSlider from '@/components/ui-elements/sliders/PrefixSlider'
import CustomValuesSlider from '@/components/ui-elements/sliders/CustomValueSlider'
import DisabledSlider from '@/components/ui-elements/sliders/DisabledSlider'

export default function SliderPage() {
	const [defaultValue, setDefaultValue] = useState(10)
	const [rangeValues, setRangeValues] = useState([500, 800])
	const [prefixValue, setPrefixValue] = useState(250)
	const [monthValue, setMonthValue] = useState(3)

	return (
		<div className="container py-10">
			<Card className="max-w-4xl mx-auto">
				<CardHeader>
					<CardTitle>Custom Range Sliders</CardTitle>
					<p className="text-sm text-muted-foreground">
						Responsive and customizable range sliders built with Tailwind CSS
					</p>
				</CardHeader>
				<CardContent className="space-y-8">
					<div className="space-y-3">
						<h3 className="font-medium text-sm">Default</h3>
						<DefaultSlider value={defaultValue} onChange={setDefaultValue} />
					</div>

					<div className="space-y-3">
						<h3 className="font-medium text-sm">Range</h3>
						<RangeSlider values={rangeValues} onChange={setRangeValues} />
					</div>

					<div className="space-y-3">
						<h3 className="font-medium text-sm">Prefix</h3>
						<PrefixSlider value={prefixValue} onChange={setPrefixValue} prefix="$" />
					</div>

					<div className="space-y-3">
						<h3 className="font-medium text-sm">Months</h3>
						<CustomValuesSlider value={monthValue} onChange={setMonthValue} />
					</div>

					<div className="space-y-3">
						<h3 className="font-medium text-sm">Disabled</h3>
						<DisabledSlider />
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
