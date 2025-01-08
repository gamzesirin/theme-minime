'use client'

import SessionTimeoutDialog from '@/components/ui-elements/sessionTimeout/SessionTimeoutDialog'

export default function SessionTimeoutPage() {
	const handleStayConnected = () => {
		console.log('Session extended')
	}

	const handleLogout = () => {
		console.log('Logging out...')
	}

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">Session Timeout Demo</h1>
			<p className="text-muted-foreground mb-4">The session timeout dialog will appear in 5 seconds...</p>

			<SessionTimeoutDialog timeout={60} onStayConnected={handleStayConnected} onLogout={handleLogout} />
		</div>
	)
}
