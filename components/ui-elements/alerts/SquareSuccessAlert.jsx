'use client'

import { useState } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'
import { Alert } from '@/components/ui/alert'

export default function SquareSuccessAlert() {
	const [isVisible, setIsVisible] = useState(true)

	if (!isVisible) return null

	return (
		<Alert variant="card-success" className="flex flex-col items-center justify-center">
			<button onClick={() => setIsVisible(false)} className="absolute top-2 right-2" aria-label="Close alert">
				<XCircle className="h-5 w-50" />
			</button>
			<div className="flex flex-col items-center text-center pt-4">
				<CheckCircle className="h-6 w-6 mb-2" />
				<h5 className=" font-semibold mb-1">Success</h5>
				<p className="text-sm">Your action was completed successfully.</p>
			</div>
		</Alert>
	)
}
