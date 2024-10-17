'use client'
import React, { useState } from 'react'
import { XCircle } from 'lucide-react'

export const WithIconSuccessAlert = () => {
	const [isVisible, setIsVisible] = useState(true)

	if (!isVisible) return null

	return (
		<div className="border-t-4 border-green-600 p-4 rounded-md relative">
			<button onClick={() => setIsVisible(false)} className="absolute top-2 right-2">
				<XCircle className="h-5 w-5 text-green-600" />
			</button>
			<p className="text-green-600">Your action was completed successfully!</p>
		</div>
	)
}
