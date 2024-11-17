import { LargeAvatar } from '@/components/ui-elements/avatars/LargeAvatar'
import { LargeSquareAvatar } from '@/components/ui-elements/avatars/LargeSquareAvatar'
import { MediumAvatar } from '@/components/ui-elements/avatars/MediumAvatar'
import { MediumSquareAvatar } from '@/components/ui-elements/avatars/MediumSquareAvatar'
import { SmallAvatar } from '@/components/ui-elements/avatars/SmallAvatar'
import { SmallSquareAvatar } from '@/components/ui-elements/avatars/SmallSquareAvatar'
import React from 'react'

const AvatarPage = () => {
	return (
		<div className="p-6 space-y-8">
			<div>
				<h2 className="text-2xl font-semibold mb-4">Avatar Sizes</h2>
				<div className="p-6 rounded-lg bg-white border">
					<div className="flex items-center gap-8">
						<SmallAvatar src="/images/a.jpg" fallback="SM" />
						<MediumAvatar src="/images/a.jpg" fallback="MD" />
						<LargeAvatar src="/images/a.jpg" fallback="LG" />
					</div>
				</div>
			</div>

			<div>
				<h2 className="text-2xl font-semibold mb-4">Square Avatar Sizes</h2>
				<div className="p-6 rounded-lg bg-white border">
					<div className="flex items-center gap-8">
						<SmallSquareAvatar src="/images/a.jpg" fallback="SM" />
						<MediumSquareAvatar src="/images/a.jpg" fallback="MD" />
						<LargeSquareAvatar src="/images/a.jpg" fallback="LG" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default AvatarPage
