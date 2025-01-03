import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
const NavPillsJustify = () => {
	return (
		<div>
			<section className="space-y-4">
				<p className="text-muted-foreground">Example of Nav pills justified</p>
				<Tabs defaultValue="home" className="w-full">
					<TabsList className="grid w-full grid-cols-4">
						<TabsTrigger value="home" className="rounded-full">
							Home
						</TabsTrigger>
						<TabsTrigger value="profile" className="rounded-full">
							Profile
						</TabsTrigger>
						<TabsTrigger value="messages" className="rounded-full">
							Messages
						</TabsTrigger>
						<TabsTrigger value="settings" className="rounded-full">
							Settings
						</TabsTrigger>
					</TabsList>
					<TabsContent value="home" className="p-4">
						Raw denim you probably haven&apos;t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua.
					</TabsContent>
					<TabsContent value="profile" className="p-4">
						Profile information and customization options.
					</TabsContent>
					<TabsContent value="messages" className="p-4">
						Message center and notifications.
					</TabsContent>
					<TabsContent value="settings" className="p-4">
						System and account settings.
					</TabsContent>
				</Tabs>
			</section>
		</div>
	)
}

export default NavPillsJustify
