'use client'
import React, { useState } from 'react'
import { XCircle } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

export const WithIconSuccessAlert = () => {
	const [isVisible, setIsVisible] = useState(true)

	if (!isVisible) return null

	return (
		<Alert variant="top-success">
			<button onClick={() => setIsVisible(false)} className="absolute top-2 right-2">
				<XCircle className="h-5 w-5" />
			</button>
			<AlertDescription>Your action was completed successfully!</AlertDescription>
		</Alert>
	)
}
