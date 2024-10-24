'use client'

import * as React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const images = ['/images/a.jpg', '/images/b.jpg', '/images/c.jpg', '/images/d.jpg']

export function ThumbnailCarousel() {
	const [mainApi, setMainApi] = React.useState(null)

	const [thumbApi, setThumbApi] = React.useState(null)
	const [current, setCurrent] = React.useState(0)

	React.useEffect(() => {
		if (!mainApi || !thumbApi) {
			return
		}

		mainApi.on('select', () => {
			setCurrent(mainApi.selectedScrollSnap())
			thumbApi.scrollTo(mainApi.selectedScrollSnap())
		})
	}, [mainApi, thumbApi])

	const onThumbClick = React.useCallback(
		(index) => {
			if (!mainApi || !thumbApi) return
			mainApi.scrollTo(index)
		},
		[mainApi, thumbApi]
	)

	return (
		<div className="w-full max-w-xl mx-auto space-y-2">
			<Carousel setApi={setMainApi}>
				<CarouselContent>
					{images.map((src, index) => (
						<CarouselItem key={index}>
							<Image
								src={src}
								alt={`Slide ${index + 1}`}
								width={400}
								height={300}
								className="w-full rounded-md object-cover"
							/>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			<Carousel setApi={setThumbApi} opts={{ containScroll: 'keepSnaps', dragFree: true }}>
				<CarouselContent className="flex-row">
					{images.map((src, index) => (
						<CarouselItem key={index} className="basis-1/4 p-1">
							<Button
								onClick={() => onThumbClick(index)}
								className={`p-0 w-full h-full ${index === current ? 'ring-2 ring-primary' : ''}`}
							>
								<Image
									src={src}
									alt={`Thumbnail ${index + 1}`}
									width={75}
									height={50}
									className="w-full h-full object-cover rounded-md"
								/>
							</Button>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	)
}
