import { CheckCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function WithBackgroundSuccesslert() {
	return (
		<Alert
			variant="success"
			className="flex items-start p-4 bg-green-100 border-l-4 border-green-600 rounded-lg shadow-lg"
		>
			<CheckCircle className="h-5 w-5 text-green-600 mr-3" />
			<div>
				<AlertTitle className="text-lg font-bold text-green-800">Success</AlertTitle>
				<AlertDescription className="text-sm text-gray-700">Your action was completed successfully!</AlertDescription>
			</div>
		</Alert>
	)
}
