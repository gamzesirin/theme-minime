import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const SuccessCard = () => (
	<Card variant="success">
		<CardHeader>
			<CardTitle>Warning Card</CardTitle>
		</CardHeader>
		<CardContent>
			<p>This is a warning message.</p>
		</CardContent>
	</Card>
)
export default SuccessCard
