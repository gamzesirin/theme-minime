import { Badge } from '@/components/ui/badge'

export const SoftBadges = () => {
	return (
		<div className="flex flex-wrap gap-3">
			<Badge variant="soft" className="bg-slate-100">
				Primary
			</Badge>
			<Badge variant="soft" className="bg-emerald-50 text-emerald-700">
				Success
			</Badge>
			<Badge variant="soft" className="bg-sky-50 text-sky-700">
				Info
			</Badge>
			<Badge variant="soft" className="bg-amber-50 text-amber-700">
				Warning
			</Badge>
			<Badge variant="soft" className="bg-rose-50 text-rose-700">
				Danger
			</Badge>
			<Badge variant="soft" className="bg-gray-100 text-gray-900">
				Dark
			</Badge>
		</div>
	)
}
