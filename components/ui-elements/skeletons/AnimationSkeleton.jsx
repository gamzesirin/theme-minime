import { CustomSkeleton } from '@/components/ui/skeleton'
import React from 'react'

const AnimationSkeleton = () => {
	return (
		<div className="space-y-4 bg-white p-4 rounded-lg">
			<CustomSkeleton variant="wave" className="h-8" />
			<CustomSkeleton variant="glow" className="h-8" />
			<div className="space-y-2">
				<CustomSkeleton variant="wave" />
				<CustomSkeleton variant="wave" width="xl" />
				<CustomSkeleton variant="wave" width="lg" />
			</div>
		</div>
	)
}

export default AnimationSkeleton
