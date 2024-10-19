import { Button } from '@/components/ui/button'

export default function BlockButtons() {
	return (
		<div className="space-y-2 w-full">
			<Button variant="default" className="w-full">
				Block level button
			</Button>
			<Button variant="light" className="w-full">
				Block level button
			</Button>
		</div>
	)
}
