import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const HoverableCard = () => (
	<Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
		<CardHeader>
			<CardTitle>Hoverable Card</CardTitle>
		</CardHeader>
		<CardContent>
			<p>This card has a hover effect.</p>
		</CardContent>
	</Card>
)
export default HoverableCard
