import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const OutlineCards = () => (
	<>
		<Card variant="outline">
			<CardHeader>
				<CardTitle>Outlined Card</CardTitle>
			</CardHeader>
			<CardContent>
				<p>This is an outlined card.</p>
			</CardContent>
		</Card>

		<Card variant="outline-danger">
			<CardHeader>
				<CardTitle>Outlined Card</CardTitle>
			</CardHeader>
			<CardContent>
				<p>This is an outlined card.</p>
			</CardContent>
		</Card>
	</>
)
export default OutlineCards
