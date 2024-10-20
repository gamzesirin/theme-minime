import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const StandardCard = () => (
	<Card variant="default">
		<CardHeader>
			<CardTitle>Standard Card</CardTitle>
			<CardDescription>This is a basic card example</CardDescription>
		</CardHeader>
		<CardContent className="flex-grow">
			<p>Card content goes here.</p>
		</CardContent>
		<CardFooter>
			<Button>Action</Button>
		</CardFooter>
	</Card>
)

export default StandardCard
