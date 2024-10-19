import { Button } from '@/components/ui/button'

const SizesButtons = () => {
	return (
		<div className="flex flex-wrap items-center gap-2">
			<Button size="lg">Large button</Button>
			<Button>Default button</Button>
			<Button size="sm">Small button</Button>
		</div>
	)
}

export default SizesButtons
