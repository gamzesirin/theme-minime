'use client'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const VerticalNavTabs = () => {
	return (
		<div>
			<section className="space-y-4">
				<p className="text-muted-foreground">Example of Vertical Nav tabs</p>
				<Tabs defaultValue="home" className="w-full">
					<div className="grid grid-cols-[200px,1fr] gap-4 bg-white rounded-lg border p-4">
						<TabsList className="flex flex-col h-full space-y-2">
							<TabsTrigger className="justify-start" value="home">
								Home
							</TabsTrigger>
							<TabsTrigger className="justify-start" value="profile">
								Profile
							</TabsTrigger>
							<TabsTrigger className="justify-start" value="messages">
								Messages
							</TabsTrigger>
							<TabsTrigger className="justify-start" value="settings">
								Settings
							</TabsTrigger>
						</TabsList>
						<div>
							<TabsContent value="home">
								<p className="text-muted-foreground">
									Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro
									synth master cleanse.
								</p>
							</TabsContent>
							<TabsContent value="profile">
								<p className="text-muted-foreground">Profile information and settings appear here.</p>
							</TabsContent>
							<TabsContent value="messages">
								<p className="text-muted-foreground">Your messages and notifications appear here.</p>
							</TabsContent>
							<TabsContent value="settings">
								<p className="text-muted-foreground">Account and application settings appear here.</p>
							</TabsContent>
						</div>
					</div>
				</Tabs>
			</section>
		</div>
	)
}

export default VerticalNavTabs
