'use client'

import * as React from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'

const images = ['/images/a.jpg', '/images/b.jpg', '/images/c.jpg', '/images/d.jpg']

export function DotsCarousel() {
	const [api, setApi] = React.useState(null)
	const [current, setCurrent] = React.useState(0)

	React.useEffect(() => {
		if (!api) {
			return
		}

		setCurrent(api.selectedScrollSnap())

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap())
		})
	}, [api])

	return (
		<div className="w-full max-w-md mx-auto relative">
			<Carousel setApi={setApi}>
				<CarouselContent>
					{images.map((src, index) => (
						<CarouselItem key={index}>
							<div className="relative">
								<Image
									src={src}
									alt={`Slide ${index + 1}`}
									width={400}
									height={300}
									className="w-full rounded-md object-cover"
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
				{images.map((_, index) => (
					<Button
						key={index}
						variant="outline"
						size="sm"
						className={`w-2 h-2 rounded-full p-0 ${index === current ? 'bg-white' : 'bg-white/50'}`}
						onClick={() => api?.scrollTo(index)}
					/>
				))}
			</div>
		</div>
	)
}
