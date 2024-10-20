import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const DangerCard = () => (
	<Card variant="danger">
		<CardHeader>
			<CardTitle>Danger Card</CardTitle>
		</CardHeader>
		<CardContent>
			<p>This is a danger message.</p>
		</CardContent>
	</Card>
)
export default DangerCard
