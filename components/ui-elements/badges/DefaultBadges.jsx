import { Badge } from '@/components/ui/badge'

export const DefaultBadges = () => {
	return (
		<div className="flex flex-wrap gap-3">
			<Badge variant="default">Default</Badge>
			<Badge variant="secondary">Secondary</Badge>
			<Badge variant="success">Success</Badge>
			<Badge variant="info">Info</Badge>
			<Badge variant="warning">Warning</Badge>
			<Badge variant="danger">Danger</Badge>
			<Badge variant="dark">Dark</Badge>
		</div>
	)
}
