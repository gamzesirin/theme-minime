'use client'

import { useState } from 'react'
import { Bell, Search, Settings } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Header({ onMenuClick }) {
	const [searchQuery, setSearchQuery] = useState('')

	return (
		<header className="sticky top-0 z-10 bg-background border-b h-14 flex items-center px-4">
			<div className="flex-1 flex items-center">
				<Input
					type="search"
					placeholder="Search..."
					className="max-w-sm outline-none border-none"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</div>
			<nav className="flex items-center space-x-4">
				<Button variant="ghost" size="icon">
					<Bell className="h-4 w-4" />
				</Button>
				<Button variant="ghost" size="icon">
					<Settings className="h-4 w-4" />
				</Button>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="relative h-8 w-8 rounded-full">
							<Avatar className="h-8 w-8">
								<AvatarImage src="/avatars/01.png" alt="@username" />
								<AvatarFallback>US</AvatarFallback>
							</Avatar>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-56" align="end" forceMount>
						<DropdownMenuLabel className="font-normal">
							<div className="flex flex-col space-y-1">
								<p className="text-sm font-medium leading-none">username</p>
								<p className="text-xs leading-none text-muted-foreground">user@example.com</p>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Profile</DropdownMenuItem>
						<DropdownMenuItem>Settings</DropdownMenuItem>
						<DropdownMenuItem>Log out</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</nav>
		</header>
	)
}
