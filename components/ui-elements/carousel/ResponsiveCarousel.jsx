'use client'

import * as React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'

const images = ['/images/a.jpg', '/images/b.jpg', '/images/c.jpg', '/images/d.jpg']

export function ResponsiveCarousel() {
	return (
		<Carousel
			opts={{
				align: 'start',
				loop: true
			}}
			className="w-full max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
		>
			<CarouselContent>
				{images.concat(images).map((src, index) => (
					<CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
						<div className="p-1">
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
	)
}
