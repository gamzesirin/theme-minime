import { Button } from '@/components/ui/button'

const HoverBackgroundButtons = () => {
	return (
		<div className="flex flex-wrap gap-2">
			<Button variant="hover-primary">Primary</Button>
			<Button variant="hover-light">Light</Button>
			<Button variant="hover-success">Success</Button>
			<Button variant="hover-info">Info</Button>
			<Button variant="hover-warning">Warning</Button>
			<Button variant="hover-danger">Danger</Button>
			<Button variant="hover-dark">Dark</Button>
		</div>
	)
}

export default HoverBackgroundButtons
