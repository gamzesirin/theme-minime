'use client'

import { useState } from 'react'
import localFont from 'next/font/local'
import '@/app/globals.css'
import Sidebar from '@/components/Sidebar/page'
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900'
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900'
})

export default function RootLayout({ children }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true)

	return (
		<html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
			<body className="bg-background font-sans">
				<div className="flex h-screen">
					<Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
					<div
						className="flex flex-col flex-1 overflow-hidden transition-all duration-300 ease-in-out"
						style={{ marginLeft: isSidebarOpen ? '250px' : '65px' }}
					>
						<Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
						<main className="flex-1 overflow-auto p-6 bg-gray-100">{children}</main>
						<Footer />
					</div>
				</div>
			</body>
		</html>
	)
}
