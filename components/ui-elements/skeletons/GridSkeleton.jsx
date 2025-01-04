import { CustomSkeleton } from '@/components/ui/skeleton'
import React from 'react'

const GridSkeleton = () => {
	return (
		<div className="space-y-4 bg-white p-4 rounded-lg">
			<CustomSkeleton className="h-8 w-full" />
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				{Array.from({ length: 4 }).map((_, i) => (
					<CustomSkeleton key={i} className="h-40" />
				))}
			</div>
			<div className="space-y-2">
				<CustomSkeleton />
				<CustomSkeleton width="xl" />
				<CustomSkeleton width="lg" />
			</div>
		</div>
	)
}

export default GridSkeleton
