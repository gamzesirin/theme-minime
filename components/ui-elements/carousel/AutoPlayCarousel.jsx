'use client'

import * as React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const images = ['/images/a.jpg', '/images/b.jpg', '/images/c.jpg', '/images/d.jpg']

export function AutoPlayCarousel() {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

	return (
		<Carousel ref={emblaRef} opts={{ loop: true }} plugins={[Autoplay()]} className="w-full max-w-xl mx-auto">
			<CarouselContent>
				{images.map((src, index) => (
					<CarouselItem key={index}>
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
