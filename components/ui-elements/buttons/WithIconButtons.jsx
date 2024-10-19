import { Button } from '@/components/ui/button'
import { ArrowRight, Check, AlertTriangle, AlertCircle } from 'lucide-react'

const WithIconButtons = () => {
	return (
		<div className="flex flex-wrap gap-2">
			<Button variant="primary">
				Primary <ArrowRight className="ml-2 h-4 w-4" />
			</Button>
			<Button variant="success">
				Success <Check className="ml-2 h-4 w-4" />
			</Button>
			<Button variant="warning">
				Warning <AlertTriangle className="ml-2 h-4 w-4" />
			</Button>
			<Button variant="danger">
				Danger <AlertCircle className="ml-2 h-4 w-4" />
			</Button>
		</div>
	)
}

export default WithIconButtons
