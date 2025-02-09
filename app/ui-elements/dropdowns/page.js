import DefaultDropdowns from '@/components/ui-elements/dropdowns/DefaultDropdowns'
import SizesDropdowns from '@/components/ui-elements/dropdowns/SizesDropdowns'
import MenuContentDropdowns from '@/components/ui-elements/dropdowns/MenuContentDropdowns'
import HeaderTextFormsDropdowns from '@/components/ui-elements/dropdowns/HeaderTextFormsDropdowns'
import DropupVariationDropdowns from '@/components/ui-elements/dropdowns/DropupVariationDropdowns'
import DroprightVariationDropdowns from '@/components/ui-elements/dropdowns/DroprightVariationDropdowns'
import React from 'react'

const Dropdowns = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap space-x-4 -mx-2">
        <div className="flex-1 space-y-4 p-5 rounded-md bg-white border">
          <h2 className="text-lg font-semibold mb-2">Default Dropdowns</h2>
          <p className="text-sm text-gray-600 mb-4">
            Default dropdown buttons with different variants and styles.
          </p>
          <DefaultDropdowns />
        </div>
        <div className="flex-1 space-y-4 p-5 rounded-md bg-white border">
          <h2 className="text-lg font-semibold mb-2">Dropdown Sizes</h2>
          <p className="text-sm text-gray-600 mb-4">
            Different sizes of dropdown buttons to match your design needs.
          </p>
          <SizesDropdowns />
        </div>
      </div>

      <div className="flex flex-wrap space-x-4 -mx-2">
        <div className="flex-1 space-y-4 p-5 rounded-md bg-white border">
          <h2 className="text-lg font-semibold mb-2">Menu Content</h2>
          <p className="text-sm text-gray-600 mb-4">
            Dropdown menus with headers, separators, and custom content.
          </p>
          <MenuContentDropdowns />
        </div>
        <div className="flex-1 space-y-4 p-5 rounded-md bg-white border">
          <h2 className="text-lg font-semibold mb-2">Header, Text, and Forms</h2>
          <p className="text-sm text-gray-600 mb-4">
            Example of dropdown menu Headers, Text, Forms content.
          </p>
          <HeaderTextFormsDropdowns />
        </div>
      </div>

      <div className="flex flex-wrap space-x-4 -mx-2">
        <div className="flex-1 space-y-4 p-5 rounded-md bg-white border">
          <h2 className="text-lg font-semibold mb-2">Dropup Variation</h2>
          <p className="text-sm text-gray-600 mb-4">
            Trigger dropdown menus above elements by adding dropup variation.
          </p>
          <DropupVariationDropdowns />
        </div>
        <div className="flex-1 space-y-4 p-5 rounded-md bg-white border">
          <h2 className="text-lg font-semibold mb-2">Dropright Variation</h2>
          <p className="text-sm text-gray-600 mb-4">
            Trigger dropdown menus at the right of the elements.
          </p>
          <DroprightVariationDropdowns />
        </div>
      </div>
    </div>
  )
}

export default Dropdowns