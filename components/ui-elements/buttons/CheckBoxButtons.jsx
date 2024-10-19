'use client'
import { Button, ButtonGroup } from '@/components/ui/button'
import React, { useState } from 'react'

const CheckBoxButtons = () => {
	const [checkedItems, setCheckedItems] = useState([false, false, false])

	const toggleCheckbox = (index) => {
		setCheckedItems((prev) => prev.map((item, i) => (i === index ? !item : item)))
	}

	return (
		<ButtonGroup>
			{['Checkbox 1', 'Checkbox 2', 'Checkbox 3'].map((label, index) => (
				<Button key={label} variant={checkedItems[index] ? 'default' : 'outline'} onClick={() => toggleCheckbox(index)}>
					{label}
				</Button>
			))}
		</ButtonGroup>
	)
}

export default CheckBoxButtons
