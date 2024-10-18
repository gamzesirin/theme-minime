import { AlertCircle, AlertOctagon, Info } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function WithBackgroundInfoAlert() {
	return (
		<Alert variant="info" className="flex items-start p-4  border-l-4 rounded-lg shadow-lg">
			<Info className="h-5 w-5 mr-3" />
			<div>
				<AlertTitle className="text-lg font-bold">İnfo</AlertTitle>
				<AlertDescription className="text-sm text-gray-700">
					Your session has expired. Please log in again.
				</AlertDescription>
			</div>
		</Alert>
	)
}
