import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const ImageCard = () => (
	<Card>
		<Image src="/images/a.jpg" alt="Card image" objectFit="cover" width={300} height={300} />
		<CardContent>
			<CardTitle>Image Card</CardTitle>
			<CardDescription>A card with an image at the top</CardDescription>
		</CardContent>
	</Card>
)

export default ImageCard
