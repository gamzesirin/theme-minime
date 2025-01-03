import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const DefaultTabs = () => {
	return (
		<div>
			<section className="space-y-4">
				<p className="text-muted-foreground">Example of Nav Tabs</p>
				<Tabs defaultValue="home" className="w-full">
					<TabsList>
						<TabsTrigger value="home">Home</TabsTrigger>
						<TabsTrigger value="profile">Profile</TabsTrigger>
						<TabsTrigger value="messages">Messages</TabsTrigger>
					</TabsList>
					<TabsContent value="home" className="p-4">
						Raw denim you probably haven&apos;t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro
						synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.
					</TabsContent>
					<TabsContent value="profile" className="p-4">
						Profile content goes here. Craft beer labore wes anderson cred nesciunt sapiente ea proident.
					</TabsContent>
					<TabsContent value="messages" className="p-4">
						Messages and notifications will appear here.
					</TabsContent>
				</Tabs>
			</section>
		</div>
	)
}

export default DefaultTabs
