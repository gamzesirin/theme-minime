import AnimationSkeleton from '@/components/ui-elements/skeletons/AnimationSkeleton'
import DefaultSkeleton from '@/components/ui-elements/skeletons/DefaultSkeleton'
import GridSkeleton from '@/components/ui-elements/skeletons/GridSkeleton'
import ProfileSkeletons from '@/components/ui-elements/skeletons/ProfileSkeletons'
import React from 'react'

const SkeletonPage = () => {
	return (
		<div className="space-y-4">
			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-lg font-semibold mb-2">Default Skeletons</h2>
					<p className="text-sm text-gray-600 mb-4">
						In the example below, we take a typical card component and recreate it with placeholders applied to create a
						"loading card". Size and proportions are the same between the two.
					</p>
					<DefaultSkeleton />
				</div>
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-lg font-semibold mb-2">Grid Skeletons</h2>
					<p className="text-sm text-gray-600 mb-4">
						Create placeholders with responsive grid layouts to match your content structure..
					</p>
					<GridSkeleton />
				</div>
			</div>
			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-lg font-semibold mb-2">Animation in Skeletons</h2>
					<p className="text-sm text-gray-600 mb-4">
						Animate placeholders with wave or glow effects to better convey the perception of something being actively
						loaded.
					</p>
					<AnimationSkeleton />
				</div>
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-lg font-semibold mb-2">Profile Skeletons</h2>
					<p className="text-sm text-gray-600 mb-4">Use class .btn-rounded for button round border.</p>
					<ProfileSkeletons />
				</div>
			</div>
		</div>
	)
}

export default SkeletonPage
