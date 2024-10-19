import { Button, ButtonToolbar } from '@/components/ui/button'

export default function ButtonToolbarComponent() {
	return (
		<ButtonToolbar>
			{[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
				<Button key={num} variant="outline">
					{num}
				</Button>
			))}
		</ButtonToolbar>
	)
}
