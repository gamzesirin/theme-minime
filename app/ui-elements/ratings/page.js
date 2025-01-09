import { BarRating } from '@/components/ui-elements/ratings/barRating'
import { PillRating } from '@/components/ui-elements/ratings/pillRating'
import { SquareRating } from '@/components/ui-elements/ratings/squareRating'
import { StarRating } from '@/components/ui-elements/ratings/starRating'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function RatingDemo() {
	return (
		<div className="p-4 grid gap-4 md:grid-cols-2">
			<Card>
				<CardHeader>
					<CardTitle>Star Rating</CardTitle>
				</CardHeader>
				<CardContent>
					<StarRating defaultValue={3} onChange={(value) => console.log('Star rating:', value)} />
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Bar Rating</CardTitle>
				</CardHeader>
				<CardContent>
					<BarRating defaultValue={7} onChange={(value) => console.log('Bar rating:', value)} />
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Square Rating</CardTitle>
				</CardHeader>
				<CardContent>
					<SquareRating defaultValue={3} onChange={(value) => console.log('Square rating:', value)} />
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Pill Rating</CardTitle>
				</CardHeader>
				<CardContent>
					<PillRating defaultValue="B" onChange={(value) => console.log('Pill rating:', value)} />
				</CardContent>
			</Card>
		</div>
	)
}
