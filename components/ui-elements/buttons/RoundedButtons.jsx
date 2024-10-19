import { Button } from '@/components/ui/button'

const RoundedButtons = () => {
	return (
		<div className="flex flex-wrap gap-2">
			<Button variant="primary" rounded="full">
				Primary
			</Button>
			<Button variant="light" rounded="full">
				Light
			</Button>
			<Button variant="success" rounded="full">
				Success
			</Button>
			<Button variant="info" rounded="full">
				Info
			</Button>
			<Button variant="warning" rounded="full">
				Warning
			</Button>
			<Button variant="danger" rounded="full">
				Danger
			</Button>
			<Button variant="dark" rounded="full">
				Dark
			</Button>
			<Button variant="link" rounded="full">
				Link
			</Button>
		</div>
	)
}
export default RoundedButtons
