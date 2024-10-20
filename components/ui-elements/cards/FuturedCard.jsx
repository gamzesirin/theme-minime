import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
const FeaturedCard = () => (
	<Card variant="featured" className="p-6">
		<CardHeader>
			<CardTitle className="text-xl font-bold">Special title treatment</CardTitle>
		</CardHeader>
		<CardContent>
			<CardDescription className="mb-4">
				With supporting text below as a natural lead-in to additional content.
			</CardDescription>
			<Button>Go somewhere</Button>
		</CardContent>
		<CardFooter className="text-sm text-gray-600">2 days ago</CardFooter>
	</Card>
)
export default FeaturedCard
