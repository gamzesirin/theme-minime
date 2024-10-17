import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function ErrorAlert() {
	return (
		<Alert variant="informative" className="flex items-start p-4 border border-red-600 rounded-lg shadow-lg">
			<AlertCircle className="h-5 w-5 text-red-600 mr-3" />
			<div>
				<AlertTitle className="text-lg font-bold text-red-700">Error</AlertTitle>
				<AlertDescription className="text-sm text-gray-700">
					Your session has expired. Please log in again.
				</AlertDescription>
			</div>
		</Alert>
	)
}
