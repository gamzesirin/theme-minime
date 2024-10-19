'use client'
import { Button, ButtonGroup } from '@/components/ui/button'
import { useState } from 'react'

export default function RadioButtons() {
	const [radioSelected, setRadioSelected] = useState(0)

	return (
		<div>
			<ButtonGroup>
				{['Radio 1', 'Radio 2', 'Radio 3'].map((label, index) => (
					<Button
						key={label}
						variant={radioSelected === index ? 'default' : 'outline'}
						onClick={() => setRadioSelected(index)}
					>
						{label}
					</Button>
				))}
			</ButtonGroup>
		</div>
	)
}
