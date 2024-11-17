import { DefaultBadges } from '@/components/ui-elements/badges/DefaultBadges'
import { OutlineBadges } from '@/components/ui-elements/badges/OutlineBadges'
import { SoftBadges } from '@/components/ui-elements/badges/SoftBadges'
import { SizeBadges } from '@/components/ui-elements/badges/SizeBadges'

const BadgePage = () => {
	return (
		<div className="space-y-4 ">
			<div>
				<h2 className="text-xl font-semibold text-slate-900 mb-6">Default Badges</h2>
				<div className="p-8 rounded-xl bg-white border border-slate-200">
					<DefaultBadges />
				</div>
			</div>

			<div>
				<h2 className="text-xl font-semibold text-slate-900 mb-6">Outline Badges</h2>
				<div className="p-8 rounded-xl bg-white border border-slate-200">
					<OutlineBadges />
				</div>
			</div>

			<div>
				<h2 className="text-xl font-semibold text-slate-900 mb-6">Soft Badges</h2>
				<div className="p-8 rounded-xl bg-white  border border-slate-200">
					<SoftBadges />
				</div>
			</div>

			<div>
				<h2 className="text-xl font-semibold text-slate-900 mb-6">Badge Sizes</h2>
				<div className="p-8 rounded-xl bg-white border border-slate-200">
					<SizeBadges />
				</div>
			</div>
		</div>
	)
}

export default BadgePage
