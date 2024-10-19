'use client'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function VerticalButtons() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="inline-flex flex-col space-y-2">
			<Button variant="default">Button</Button>
			<div className="relative">
				<Button variant="default" onClick={() => setIsOpen(!isOpen)} className="w-full justify-between">
					Dropdown
					<svg
						className={`w-4 h-4 ml-2 transform ${isOpen ? 'rotate-180' : ''}`}
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
					</svg>
				</Button>
				{isOpen && (
					<div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded shadow-lg">
						<Button variant="ghost" className="w-full justify-start">
							Item 1
						</Button>
						<Button variant="ghost" className="w-full justify-start">
							Item 2
						</Button>
					</div>
				)}
			</div>
			<Button variant="default">Button</Button>
		</div>
	)
}
