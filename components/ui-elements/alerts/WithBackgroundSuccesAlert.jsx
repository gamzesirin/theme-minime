import { CheckCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function WithBackgroundSuccesslert() {
	return (
		<Alert variant="border-success" className="flex items-start p-4 ">
			<CheckCircle className="h-5 w-5 mr-3" />
			<div>
				<AlertTitle className="text-lg font-bold">Success</AlertTitle>
				<AlertDescription className="text-sm text-gray-700">Your action was completed successfully!</AlertDescription>
			</div>
		</Alert>
	)
}
