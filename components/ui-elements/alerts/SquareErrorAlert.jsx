'use client'

import { useState } from 'react'
import { AlertCircle, XCircle } from 'lucide-react'
import { Alert } from '@/components/ui/alert'

export default function SquareErrorAlert() {
	const [isVisible, setIsVisible] = useState(true)

	if (!isVisible) return null

	return (
		<Alert variant="card-error" className="flex flex-col items-center justify-center">
			<button onClick={() => setIsVisible(false)} className="absolute top-2 right-2" aria-label="Close alert">
				<XCircle className="h-5 w-5 " />
			</button>
			<div className="flex flex-col items-center text-center pt-4">
				<AlertCircle className="h-6 w-6 text-red-600 mb-2" />
				<h5 className=" font-semibold mb-1">Error</h5>
				<p className=" text-sm">An error occurred. Please try again.</p>
			</div>
		</Alert>
	)
}
