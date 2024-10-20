import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const HorizontalCard = () => (
	<Card className="flex">
		<Image src="/images/b.jpg" alt="Horizontal card image" objectFit="cover" width={300} height={300} />
		<div className="w-2/3">
			<CardContent>
				<CardTitle>Horizontal Card</CardTitle>
				<CardDescription>A card with image on the left</CardDescription>
			</CardContent>
		</div>
	</Card>
)
export default HorizontalCard
