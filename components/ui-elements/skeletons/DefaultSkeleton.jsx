import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { CustomSkeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
const DefaultSkeleton = () => {
	return (
		<div className="grid  gap-4 md:grid-cols-3">
			<Card>
				<CardHeader className="space-y-2">
					<Image src="/images/a.jpg" alt="Example" width={400} height={200} className="rounded-lg object-cover" />
					<h3 className="text-2xl font-bold">Card title</h3>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground">
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</p>
				</CardContent>
				<CardFooter>
					<Button>Go somewhere</Button>
				</CardFooter>
			</Card>

			<Card>
				<CardHeader className="space-y-2">
					<CustomSkeleton className="h-[200px]" />
				</CardHeader>
				<CardContent className="space-y-2">
					<CustomSkeleton />
					<CustomSkeleton />
					<CustomSkeleton width="md" />
				</CardContent>
				<CardFooter>
					<CustomSkeleton width="md" height="lg" />
				</CardFooter>
			</Card>
		</div>
	)
}

export default DefaultSkeleton
