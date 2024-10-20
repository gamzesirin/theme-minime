import ImageBackgroundCard from '@/components/ui-elements/cards/BackgroundImageCard'
import ColoredCard from '@/components/ui-elements/cards/ColoredCard'
import DangerCard from '@/components/ui-elements/cards/DangerCard'
import FeaturedCard from '@/components/ui-elements/cards/FuturedCard'
import CardGroup from '@/components/ui-elements/cards/GroupsCard'
import HorizontalCard from '@/components/ui-elements/cards/HorizantalCard'
import HoverableCard from '@/components/ui-elements/cards/HoverableCard'
import ImageCard from '@/components/ui-elements/cards/ImageCard'
import OutlinedCard from '@/components/ui-elements/cards/OutlineCard'
import QuoteCard from '@/components/ui-elements/cards/QuoteCard'
import StandardCard from '@/components/ui-elements/cards/StandardCard'
import SuccessCard from '@/components/ui-elements/cards/SuccessCard'
import WarningCard from '@/components/ui-elements/cards/WarningCard'
import React from 'react'
const CardsPage = () => {
	return (
		<div className="p-8 space-y-8">
			<h1 className="text-3xl font-bold mb-6">Card Examples</h1>
			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<StandardCard />
				<ImageCard />
				<HorizontalCard />
				<ColoredCard />
			</div>
			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<DangerCard />
				<SuccessCard />
				<WarningCard />
			</div>
			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<OutlinedCard />
				<HoverableCard />
				<CardGroup />
				<ImageBackgroundCard />
			</div>
			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<FeaturedCard />
				<QuoteCard />
			</div>
		</div>
	)
}

export default CardsPage
