import DisplayHeadings from '@/components/ui-elements/typography/DisplayHeadings'
import Headings from '@/components/ui-elements/typography/Headings'
import InlineTextElements from '@/components/ui-elements/typography/InlineTextElements'
import Lists from '@/components/ui-elements/typography/Lists'
import React from 'react'

const TypographyPage = () => {
	return (
		<div className="space-y-4">
			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-2xl font-bold mb-4">Display Headings</h2>
					<DisplayHeadings />
				</div>
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-2xl font-bold mb-4">Headings</h2>
					<Headings />
				</div>
			</div>

			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-2xl font-bold mb-4">Inline Text Elements</h2>
					<InlineTextElements />
				</div>
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-2xl font-bold mb-4">Lists</h2>
					<Lists />
				</div>
			</div>
		</div>
	)
}

export default TypographyPage
