import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
const CustomTabs = () => {
	return (
		<div>
			<section className="space-y-4">
				<p className="text-muted-foreground">Example of custom tabs</p>
				<Tabs defaultValue="home" className="w-full">
					<TabsList className="grid w-full grid-cols-4">
						<TabsTrigger value="home">Home</TabsTrigger>
						<TabsTrigger value="profile">Profile</TabsTrigger>
						<TabsTrigger value="messages">Messages</TabsTrigger>
						<TabsTrigger value="settings">Settings</TabsTrigger>
					</TabsList>
					<TabsContent value="home" className="p-4">
						Raw denim you probably haven&apos;t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua.
					</TabsContent>
					<TabsContent value="profile" className="p-4">
						Profile information and settings appear here.
					</TabsContent>
					<TabsContent value="messages" className="p-4">
						Your messages and notifications.
					</TabsContent>
					<TabsContent value="settings" className="p-4">
						Account and application settings.
					</TabsContent>
				</Tabs>
			</section>
		</div>
	)
}

export default CustomTabs
