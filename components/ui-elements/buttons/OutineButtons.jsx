import { Button } from '@/components/ui/button'

const OutlineButtons = () => {
	return (
		<div className="flex flex-wrap gap-2">
			<Button variant="outline-primary">Primary</Button>
			<Button variant="outline-light">Light</Button>
			<Button variant="outline-success">Success</Button>
			<Button variant="outline-info">Info</Button>
			<Button variant="outline-warning">Warning</Button>
			<Button variant="outline-danger">Danger</Button>
			<Button variant="outline-dark">Dark</Button>
			<Button variant="outline-link">Link</Button>
		</div>
	)
}
export default OutlineButtons
