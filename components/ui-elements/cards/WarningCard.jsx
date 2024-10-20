import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const WarningCard = () => (
	<Card variant="warning">
		<CardHeader>
			<CardTitle>Warning Card</CardTitle>
		</CardHeader>
		<CardContent>
			<p>This is a warning message.</p>
		</CardContent>
	</Card>
)
export default WarningCard
