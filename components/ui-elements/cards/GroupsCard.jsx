import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
const CardGroup = () => {
	const cards = [
		{
			imageSrc: '/images/a.jpg',
			title: 'Card title',
			description:
				'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
			lastUpdated: 'Last updated 3 mins ago'
		},
		{
			imageSrc: '/images/b.jpg',
			title: 'Card title',
			description: 'This card has supporting text below as a natural lead-in to additional content.',
			lastUpdated: 'Last updated 3 mins ago'
		},
		{
			imageSrc: '/images/a.jpg',
			title: 'Card title',
			description:
				'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
			lastUpdated: 'Last updated 3 mins ago'
		}
	]

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-2">
			{cards.map((card, index) => (
				<Card key={index} className="flex flex-col h-full">
					<Image src={card.imageSrc} alt={card.title} width={400} height={200} className="object-cover w-full h-48" />
					<CardContent className="flex-grow flex flex-col justify-between p-6">
						<div>
							<CardTitle className="text-xl font-bold mb-2">{card.title}</CardTitle>
							<CardDescription className="text-gray-600 mb-4">{card.description}</CardDescription>
						</div>
						<p className="text-sm text-gray-500">{card.lastUpdated}</p>
					</CardContent>
				</Card>
			))}
		</div>
	)
}
export default CardGroup
