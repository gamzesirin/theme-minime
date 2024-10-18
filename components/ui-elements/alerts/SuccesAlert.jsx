import { CheckCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function SuccessAlert() {
	return (
		<Alert variant="success" className="flex items-start p-4 border border-green-600 rounded-lg shadow-lg">
			<CheckCircle className="h-5 w-5  mr-3" />
			<div>
				<AlertTitle className="text-lg font-bold">Success</AlertTitle>
				<AlertDescription className="text-sm text-gray-700">Your action was completed successfully!</AlertDescription>
			</div>
		</Alert>
	)
}
