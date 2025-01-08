'use client'
import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export default function SessionTimeoutDialog({ timeout = 60, onStayConnected = () => {}, onLogout = () => {} }) {
	const [open, setOpen] = useState(false)
	const [timeLeft, setTimeLeft] = useState(timeout)

	useEffect(() => {
		let timer

		if (open && timeLeft > 0) {
			timer = setInterval(() => {
				setTimeLeft((prev) => prev - 1)
			}, 1000)
		} else if (timeLeft === 0) {
			onLogout()
		}

		return () => {
			if (timer) clearInterval(timer)
		}
	}, [open, timeLeft, onLogout])

	// Simulate session timeout
	useEffect(() => {
		const timer = setTimeout(() => {
			setOpen(true)
		}, 5000) // Show dialog after 5 seconds for demo purposes

		return () => clearTimeout(timer)
	}, [])

	const handleStayConnected = () => {
		setOpen(false)
		setTimeLeft(timeout)
		onStayConnected()
	}

	const handleLogout = () => {
		setOpen(false)
		onLogout()
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Your Session is About to Expire!</DialogTitle>
					<DialogDescription>Your session is about to expire. Redirecting in {timeLeft} seconds.</DialogDescription>
				</DialogHeader>
				<div className="flex justify-end space-x-2 pt-4">
					<Button variant="outline" onClick={handleLogout}>
						Logout
					</Button>
					<Button onClick={handleStayConnected}>Stay Connected</Button>
				</div>
			</DialogContent>
		</Dialog>
	)
}
