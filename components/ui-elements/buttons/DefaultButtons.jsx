import { Button } from '@/components/ui/button'
import React from 'react'

const DefaultButtons = () => {
	return (
		<div className="flex flex-wrap gap-2">
			<Button variant="primary">Primary</Button>
			<Button variant="light">Light</Button>
			<Button variant="success">Success</Button>
			<Button variant="info">Info</Button>
			<Button variant="warning">Warning</Button>
			<Button variant="danger">Danger</Button>
			<Button variant="dark">Dark</Button>
			<Button variant="link">Link</Button>
		</div>
	)
}

export default DefaultButtons
