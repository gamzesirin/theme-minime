import { Badge } from '@/components/ui/badge'

export const OutlineBadges = () => {
	return (
		<div className="flex flex-wrap gap-3">
			<Badge variant="outline" className="border-slate-900 text-slate-900">
				Primary
			</Badge>
			<Badge variant="outline" className="border-slate-500 text-slate-500">
				Secondary
			</Badge>
			<Badge variant="outline" className="border-emerald-500 text-emerald-500">
				Success
			</Badge>
			<Badge variant="outline" className="border-sky-500 text-sky-500">
				Info
			</Badge>
			<Badge variant="outline" className="border-amber-500 text-amber-500">
				Warning
			</Badge>
			<Badge variant="outline" className="border-rose-500 text-rose-500">
				Danger
			</Badge>
			<Badge variant="outline" className="border-gray-900 text-gray-900">
				Dark
			</Badge>
		</div>
	)
}
