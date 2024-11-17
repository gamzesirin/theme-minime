import { Badge } from '@/components/ui/badge'

export const SizeBadges = () => {
	return (
		<div className="flex flex-wrap items-center gap-3">
			<Badge size="lg" variant="default">
				Large badge
			</Badge>
			<Badge size="default" variant="default">
				Default badge
			</Badge>
			<Badge size="sm" variant="default">
				Small badge
			</Badge>
		</div>
	)
}
