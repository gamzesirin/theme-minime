import CustomTabs from '@/components/ui-elements/tabs-accordions/CustomTabs'
import DefaultTabs from '@/components/ui-elements/tabs-accordions/DefaultTabs'
import MultipleTargets from '@/components/ui-elements/tabs-accordions/MultipleTargets'
import NavPillsJustify from '@/components/ui-elements/tabs-accordions/NavPillsJustify'
import VerticalNavTabs from '@/components/ui-elements/tabs-accordions/VerticalNavTabs'
import React from 'react'
import BorderedAcorions from '@/components/ui-elements/tabs-accordions/BorderedAcorions'
import FilledAcordions from '@/components/ui-elements/tabs-accordions/FilledAcordions'
import ExampleAccordion from '@/components/ui-elements/tabs-accordions/ExampleAcordions'

const TabsAcorsionsPage = () => {
	return (
		<div className="space-y-4">
			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-2xl font-bold mb-4">Default Tabs</h2>
					<DefaultTabs />
				</div>
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-2xl font-bold mb-4">Custom Tabs</h2>
					<CustomTabs />
				</div>
			</div>

			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-2xl font-bold mb-4">Multiple Targets</h2>
					<MultipleTargets />
				</div>
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-2xl font-bold mb-4">Vertical Nav Tabs</h2>
					<VerticalNavTabs />
				</div>
			</div>
			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-2xl font-bold mb-4">Nav Pills Justify</h2>
					<NavPillsJustify />
				</div>
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-2xl font-bold mb-4">Example Accordions</h2>
					<ExampleAccordion />
				</div>
			</div>
			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-2xl font-bold mb-4">Bordered Accordions</h2>
					<BorderedAcorions />
				</div>
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-2xl font-bold mb-4">Filled Accordions</h2>
					<FilledAcordions />
				</div>
			</div>
		</div>
	)
}

export default TabsAcorsionsPage
