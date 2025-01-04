'use client'

import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { CustomSkeleton } from '@/components/ui/skeleton'

const ProfileSkeletons = () => {
	return (
		<div className="max-w-4xl mx-auto flex flex-row space-x-4">
			<Card className="flex-1 flex flex-col">
				<CardHeader className="flex flex-row items-center gap-4">
					<CustomSkeleton className="h-16 w-16 rounded-full" />
					<div className="space-y-2 flex-1">
						<CustomSkeleton className="h-6 w-1/4" />
						<CustomSkeleton className="h-4 w-1/3" />
					</div>
					<CustomSkeleton className="h-10 w-24" />
				</CardHeader>
				<CardContent className="space-y-4 flex-grow">
					<CustomSkeleton className="h-4 w-full" />
					<CustomSkeleton className="h-4 w-5/6" />
					<CustomSkeleton className="h-4 w-4/6" />
				</CardContent>
			</Card>

			<Card className="flex-1 flex flex-col">
				<CardHeader>
					<CustomSkeleton className="h-6 w-1/3 mb-2" />
				</CardHeader>
				<CardContent className="space-y-4 flex-grow">
					{[...Array(3)].map((_, index) => (
						<div key={index} className="flex items-center gap-3">
							<CustomSkeleton className="h-10 w-10 rounded-full" />
							<div className="space-y-2 flex-1">
								<CustomSkeleton className="h-4 w-1/4" />
								<CustomSkeleton className="h-3 w-1/3" />
							</div>
						</div>
					))}
				</CardContent>
			</Card>
		</div>
	)
}

export default ProfileSkeletons
