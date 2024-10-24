'use client'

import * as React from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'

const images = ['/images/a.jpg', '/images/b.jpg', '/images/c.jpg', '/images/d.jpg']

export function NavCarousel() {
	return (
		<Carousel className="w-full max-w-md mx-auto relative">
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
			<CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
			<CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
		</Carousel>
	)
}
