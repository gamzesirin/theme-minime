'use client'
import React, { useState } from 'react'
import { XCircle } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

export const WithIconWarningAlert = () => {
	const [isVisible, setIsVisible] = useState(true)

	if (!isVisible) return null

	return (
		<Alert variant="warning" className="border-t-4 border-yellow-600 p-4 rounded-md relative">
			<button onClick={() => setIsVisible(false)} className="absolute top-2 right-2">
				<XCircle className="h-5 w-5" />
			</button>
			<AlertDescription className="">Please check your input. There might be some issues.</AlertDescription>
		</Alert>
	)
}
