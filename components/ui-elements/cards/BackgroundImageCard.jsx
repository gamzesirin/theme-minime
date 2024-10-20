import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const ImageBackgroundCard = () => (
	<Card variant="background" className="w-full">
		<Image
			src="/images/a.jpg"
			alt="Background Image"
			width={800}
			height={400}
			objectFit="cover"
			className="w-full h-full absolute inset-0"
		/>
		<div className="relative z-10 bg-black bg-opacity-50 text-white p-6">
			<CardTitle className="text-2xl font-bold mb-2">Card title</CardTitle>
			<CardDescription className="text-gray-200 mb-4">
				This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
				little bit longer.
			</CardDescription>
			<CardContent className="p-0">
				<p className="text-sm text-gray-300">Last updated 3 mins ago</p>
			</CardContent>
		</div>
	</Card>
)
export default ImageBackgroundCard
