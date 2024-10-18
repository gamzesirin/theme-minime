'use client'

import { useState } from 'react'
import { Info, XCircle } from 'lucide-react'
import { Alert } from '@/components/ui/alert'

export default function SquareInfoAlert() {
	const [isVisible, setIsVisible] = useState(true)

	if (!isVisible) return null

	return (
		<Alert variant="info" className="max-w-sm mx-auto p-4 relative">
			<button
				onClick={() => setIsVisible(false)}
				className="absolute top-2 right-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-full"
				aria-label="Close alert"
			>
				<XCircle className="h-5 w-5 " />
			</button>
			<div className="flex flex-col items-center text-center pt-4">
				<Info className="h-6 w-6 text-blue-600 mb-2" />
				<h5 className="font-semibold mb-1">Information</h5>
				<p className="text-sm">Heres some important information for you.</p>
			</div>
		</Alert>
	)
}
