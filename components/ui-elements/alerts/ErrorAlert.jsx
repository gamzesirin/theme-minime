import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function ErrorAlert() {
	return (
		<Alert variant="error" className="flex items-start p-4 ">
			<AlertCircle className="h-5 w-5  mr-3" />
			<div>
				<AlertTitle className="text-lg font-bold ">Error</AlertTitle>
				<AlertDescription className="text-sm text-gray-700">
					Your session has expired. Please log in again.
				</AlertDescription>
			</div>
		</Alert>
	)
}
