import DefaultButtons from '@/components/ui-elements/buttons/DefaultButtons'
import OutineButtons from '@/components/ui-elements/buttons/OutineButtons'
import RoundedButtons from '@/components/ui-elements/buttons/RoundedButtons'
import HoverBackgroundButtons from '@/components/ui-elements/buttons/HoverBackgroundButtons'
import React from 'react'
import WithIconButtons from '@/components/ui-elements/buttons/WithIconButtons'
import SizesButtons from '@/components/ui-elements/buttons/SizesButtons'
import BlockButtons from '@/components/ui-elements/buttons/BlockButtons'
import GroupsButtons from '@/components/ui-elements/buttons/GroupButtons'
import RadioButtons from '@/components/ui-elements/buttons/RadioButtons'
import CheckBoxButtons from '@/components/ui-elements/buttons/CheckBoxButtons'
import ButtonToolbarComponent from '@/components/ui-elements/buttons/ToolbarButtons'
import VerticalButtons from '@/components/ui-elements/buttons/VerticalButtons'

const Buttons = () => {
	return (
		<div className="space-y-4">
			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-lg font-semibold mb-2">Default Buttons</h2>
					<p className="text-sm text-gray-600 mb-4">
						Bootstrap includes six predefined button styles, each serving its own semantic purpose.
					</p>
					<DefaultButtons />
				</div>
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-lg font-semibold mb-2">Outline Buttons</h2>
					<p className="text-sm text-gray-600 mb-4">
						Replace the default modifier classes with the .btn-outline-* ones to remove all background images and colors
						on any button.
					</p>
					<OutineButtons />
				</div>
			</div>
			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-lg font-semibold mb-2">Rounded Buttons</h2>
					<p className="text-sm text-gray-600 mb-4">Use class .btn-rounded for button round border.</p>
					<RoundedButtons />
				</div>
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-lg font-semibold mb-2">Soft Background Buttons</h2>
					<p className="text-sm text-gray-600 mb-4">Use class .btn-rounded for button round border.</p>
					<HoverBackgroundButtons />
				</div>
			</div>
			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-lg font-semibold mb-2">With Icon Buttons</h2>
					<p className="text-sm text-gray-600 mb-4">Use class .btn-rounded for button round border.</p>
					<WithIconButtons />
				</div>
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-lg font-semibold mb-2">Buttons Sizes</h2>
					<p className="text-sm text-gray-600 mb-4">Use class .btn-rounded for button round border.</p>
					<SizesButtons />
				</div>
			</div>
			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-lg font-semibold mb-2">Block Buttons</h2>
					<p className="text-sm text-gray-600 mb-4">Use class .btn-rounded for button round border.</p>
					<BlockButtons />
				</div>
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-lg font-semibold mb-2">Radio Buttons </h2>
					<p className="text-sm text-gray-600 mb-4">Use class .btn-rounded for button round border.</p>
					<RadioButtons />
				</div>
			</div>
			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-lg font-semibold mb-2"> Checkbox Buttons</h2>
					<p className="text-sm text-gray-600 mb-4">Use class .btn-rounded for button round border.</p>
					<CheckBoxButtons />
				</div>
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-lg font-semibold mb-2">Buttons Group</h2>
					<p className="text-sm text-gray-600 mb-4">Use class .btn-rounded for button round border.</p>
					<GroupsButtons />
				</div>
			</div>
			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-lg font-semibold mb-2">Toolbar Buttons</h2>
					<p className="text-sm text-gray-600 mb-4">Use class .btn-rounded for button round border.</p>
					<ButtonToolbarComponent />
				</div>
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-lg font-semibold mb-2"> Vertical Buttons </h2>
					<p className="text-sm text-gray-600 mb-4">Use class .btn-rounded for button round border.</p>
					<VerticalButtons />
				</div>
			</div>
		</div>
	)
}

export default Buttons
