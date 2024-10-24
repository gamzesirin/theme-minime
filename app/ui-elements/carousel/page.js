'use client'
import React, { useEffect, useState } from 'react'

import { SimpleCarousel } from '@/components/ui-elements/carousel/SimpleCarousel'
import { NavCarousel } from '@/components/ui-elements/carousel/NavCarousel'
import { DotsCarousel } from '@/components/ui-elements/carousel/DotsCarousel'
import { InfiniteCarousel } from '@/components/ui-elements/carousel/InfiniteCarousel'
import { AutoPlayCarousel } from '@/components/ui-elements/carousel/AutoPlayCarousel'
import { ThumbnailCarousel } from '@/components/ui-elements/carousel/ThumbnailCarousel'
import { ResponsiveCarousel } from '@/components/ui-elements/carousel/ResponsiveCarousel'

const CoruselPage = () => {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	if (!isClient) {
		return null
	}
	return (
		<div className="space-y-4">
			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-2xl font-bold mb-4">1. Simple Carousel</h2>
					<SimpleCarousel />
				</div>
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-2xl font-bold mb-4">2. Carousel with Navigation Buttons</h2>
					<NavCarousel />
				</div>
			</div>

			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-2xl font-bold mb-4">3. Carousel with Dots</h2>
					<DotsCarousel />
				</div>
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-2xl font-bold mb-4">4. Infinite Loop Carousel</h2>
					<InfiniteCarousel />
				</div>
			</div>

			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-2xl font-bold mb-4">5. Auto-play Carousel</h2>
					<AutoPlayCarousel />
				</div>
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-2xl font-bold mb-4">6. Thumbnail Carousel</h2>
					<ThumbnailCarousel />
				</div>
			</div>

			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<div className="  space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-2xl font-bold mb-4">7. Responsive Carousel</h2>
					<ResponsiveCarousel />
				</div>
				{/* <div className=" flex-1 space-y-4 p-5 rounded-md bg-white border"></div> */}
			</div>

			<section></section>
		</div>
	)
}

export default CoruselPage
