import { Card, CardContent } from '@/components/ui/card'

const QuoteCard = () => (
	<Card variant="quote" className="p-6">
		<CardContent>
			<p className="text-lg mb-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
			</p>
			<footer className="text-sm text-gray-600">
				— Someone famous in <cite title="Source Title">Source Title</cite>
			</footer>
		</CardContent>
	</Card>
)

export default QuoteCard
