import { AlertTriangle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function WithBackgroundWarningAlert() {
	return (
		<Alert
			variant="warning"
			className="flex items-start p-4 bg-yellow-100 border-l-4 border-yellow-600 rounded-lg shadow-lg"
		>
			<AlertTriangle className="h-5 w-5 mr-3" />
			<div>
				<AlertTitle className="text-lg font-bold">Warning</AlertTitle>
				<AlertDescription className="text-sm text-gray-700">
					Please check your input. There might be some issues.
				</AlertDescription>
			</div>
		</Alert>
	)
}
