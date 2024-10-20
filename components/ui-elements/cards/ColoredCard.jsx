import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const ColoredCard = () => (
	<Card variant="default" className="text-white bg-blue-500 flex flex-col">
		<CardHeader>
			<CardTitle>Colored Card</CardTitle>
		</CardHeader>
		<CardContent className="flex-grow">
			<p>This card has a blue background color.</p>
		</CardContent>
	</Card>
)

export default ColoredCard
