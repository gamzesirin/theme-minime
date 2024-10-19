'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
	ChevronDown,
	ChevronRight,
	Menu,
	Home,
	Calendar,
	MessageSquare,
	FolderOpen,
	ShoppingCart,
	Mail,
	FileText,
	Users,
	Lock,
	Settings,
	Layers,
	FormInput,
	Table,
	BarChart,
	MapPin
} from 'lucide-react'

const sidebarSections = [
	{
		title: 'Menu',
		items: [{ icon: Home, label: 'Dashboard', href: '/' }]
	},
	{
		title: 'Apps',
		items: [
			{ icon: Calendar, label: 'Calendar', href: '/calendar' },
			{ icon: MessageSquare, label: 'Chat', href: '/chat' },
			{ icon: FolderOpen, label: 'File Manager', href: '/file-manager' },
			{
				icon: ShoppingCart,
				label: 'Ecommerce',
				href: '/ecommerce',
				submenu: [
					{ label: 'Products', href: '/ecommerce/products' },
					{ label: 'Orders', href: '/ecommerce/orders' },
					{ label: 'Customers', href: '/ecommerce/customers' }
				]
			},
			{
				icon: Mail,
				label: 'Email',
				href: '/email',
				submenu: [
					{ label: 'Inbox', href: '/email/inbox' },
					{ label: 'Compose', href: '/email/compose' },
					{ label: 'Read', href: '/email/read' }
				]
			},
			{
				icon: FileText,
				label: 'Invoices',
				href: '/invoices',
				submenu: [
					{ label: 'List', href: '/invoices/list' },
					{ label: 'Create', href: '/invoices/create' },
					{ label: 'Detail', href: '/invoices/detail' }
				]
			},
			{
				icon: Users,
				label: 'Contacts',
				href: '/contacts',
				submenu: [
					{ label: 'User Grid', href: '/contacts/grid' },
					{ label: 'User List', href: '/contacts/list' },
					{ label: 'Profile', href: '/contact/profile' }
				]
			}
		]
	},
	{
		title: 'Pages',
		items: [
			{
				icon: Lock,
				label: 'Authentication',
				href: '/auth',
				submenu: [
					{ label: 'Login', href: '/auth/login' },
					{ label: 'Register', href: '/auth/register' },
					{ label: 'Forgot Password', href: '/auth/forgot-password' },
					{ label: 'Lock Screen', href: '/auth/lock-screen' }
				]
			},
			{
				icon: Settings,
				label: 'Utility',
				href: '/utility',
				submenu: [
					{ label: 'Start Page', href: '/utility/start-page' },
					{ label: 'Maintenance', href: '/utility/maintenance' },
					{ label: 'Coming Soon', href: '/utility/coming-soon' },
					{ label: 'Timeline', href: '/utility/timeline' },
					{ label: 'FAQs', href: '/utility/faqs' },
					{ label: 'Pricing', href: '/utility/pricing' },
					{ label: 'Error 404', href: '/utility/error-404' },
					{ label: 'Error 500', href: '/utility/error-500' }
				]
			}
		]
	},
	{
		title: 'Components',
		items: [
			{
				icon: Layers,
				label: 'UI Elements',
				href: '/ui-elements',
				submenu: [
					{ label: 'Buttons', href: '/ui-elements/buttons' },
					{ label: 'Cards', href: '/ui-elements/cards' },
					{ label: 'Avatars', href: '/ui-elements/avatars' },
					{ label: 'Badges', href: '/ui-elements/badges' },
					{ label: 'Alerts', href: '/ui-elements/alerts' },
					{ label: 'Toasts', href: '/ui-elements/toasts' },
					{ label: 'Modals', href: '/ui-elements/modals' },
					{ label: 'Dropdowns', href: '/ui-elements/dropdowns' },
					{ label: 'Tabs & Accordions', href: '/ui-elements/tabs-accordions' },
					{ label: 'Progress Bars', href: '/ui-elements/progress-bars' },
					{ label: 'Pagination', href: '/ui-elements/pagination' },
					{ label: 'Tooltip & Popover', href: '/ui-elements/tooltip-popover' },
					{ label: 'Carousel', href: '/ui-elements/carousel' },
					{ label: 'Range Slider', href: '/ui-elements/range-slider' },
					{ label: 'Session Timeout', href: '/ui-elements/session-timeout' },
					{ label: 'Lightbox', href: '/ui-elements/lightbox' },
					{ label: 'Grid', href: '/ui-elements/grid' },
					{ label: 'Images', href: '/ui-elements/images' },
					{ label: 'Video', href: '/ui-elements/video' },
					{ label: 'Typography', href: '/ui-elements/typography' },
					{ label: 'Colors', href: '/ui-elements/colors' },
					{ label: 'Rating', href: '/ui-elements/rating' },
					{ label: 'Notifications', href: '/ui-elements/notifications' },
					{ label: 'Placeholders', href: '/ui-elements/placeholders' }
				]
			},
			{
				icon: FormInput,
				label: 'Forms',
				href: '/forms',
				submenu: [
					{ label: 'Basic Elements', href: '/forms/basic-elements' },
					{ label: 'Validation', href: '/forms/validation' },
					{ label: 'Advanced Plugins', href: '/forms/advanced-plugins' },
					{ label: 'Editors', href: '/forms/editors' },
					{ label: 'File Upload', href: '/forms/file-upload' },
					{ label: 'Xeditable', href: '/forms/xeditable' },
					{ label: 'Repeater', href: '/forms/repeater' },
					{ label: 'Wizard', href: '/forms/wizard' },
					{ label: 'Mask', href: '/forms/mask' }
				]
			},
			{
				icon: Table,
				label: 'Tables',
				href: '/tables',
				submenu: [
					{ label: 'Basic Tables', href: '/tables/basic' },
					{ label: 'Data Tables', href: '/tables/data' },
					{ label: 'Responsive Tables', href: '/tables/responsive' },
					{ label: 'Editable Tables', href: '/tables/editable' },
					{ label: 'Advanced Tables', href: '/tables/advanced' },
					{ label: 'Data Export', href: '/tables/export' }
				]
			},
			{
				icon: BarChart,
				label: 'Charts',
				href: '/charts',
				submenu: [
					{ label: 'Line Charts', href: '/charts/line' },
					{ label: 'Bar Charts', href: '/charts/bar' },
					{ label: 'Pie Charts', href: '/charts/pie' },
					{ label: 'Donut Charts', href: '/charts/donut' },
					{ label: 'Radar Charts', href: '/charts/radar' },
					{ label: 'Polar Area Charts', href: '/charts/polar-area' },
					{ label: 'Bubble Charts', href: '/charts/bubble' },
					{ label: 'Scatter Charts', href: '/charts/scatter' },
					{ label: 'Mixed Charts', href: '/charts/mixed' },
					{ label: 'Apex Charts', href: '/charts/apex' },
					{ label: 'Chartjs', href: '/charts/chartjs' },
					{ label: 'Flot Charts', href: '/charts/flot' },
					{ label: 'Jquery Knob', href: '/charts/knob' },
					{ label: 'Sparkline Charts', href: '/charts/sparkline' }
				]
			},
			{
				icon: Layers,
				label: 'Icons',
				href: '/icons',
				submenu: [
					{ label: 'Unicons', href: '/icons/unicons' },
					{ label: 'Boxicons', href: '/icons/boxicons' },
					{ label: 'Material Design', href: '/icons/material-design' },
					{ label: 'Dripicons', href: '/icons/dripicons' },
					{ label: 'Font Awesome', href: '/icons/font-awesome' }
				]
			},
			{
				icon: MapPin,
				label: 'Maps',
				href: '/maps',
				submenu: [
					{ label: 'Google Maps', href: '/maps/google' },
					{ label: 'Vector Maps', href: '/maps/vector' },
					{ label: 'Leaflet Maps', href: '/maps/leaflet' }
				]
			}
		]
	}
]

export default function Sidebar({ isOpen, onToggle }) {
	const [isCollapsed, setIsCollapsed] = useState(false)
	const pathname = usePathname()

	return (
		<>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="ghost" size="icon" className="md:hidden">
						<Menu />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="w-[300px] sm:w-[400px]">
					<SidebarContent isCollapsed={false} pathname={pathname} />
				</SheetContent>
			</Sheet>
			<aside
				className={`fixed left-0 top-0 h-full bg-background border-r transition-all duration-300 ease-in-out ${
					isOpen ? 'w-[250px]' : 'w-[65px]'
				}`}
			>
				<div className="flex h-14 items-center border-b px-4">
					<Link href="/" className="flex items-center gap-2 font-semibold">
						{isOpen && <span>Minime</span>}
					</Link>
					<button onClick={onToggle} className="absolute top-4 right-4">
						<ChevronRight size={18} className={cn('transition-all duration-300', isOpen && 'rotate-180')} />
					</button>
				</div>
				<ScrollArea className="flex-grow">
					<SidebarContent isCollapsed={!isOpen} pathname={pathname} />
				</ScrollArea>
			</aside>
		</>
	)
}

function SidebarItem({ item, isActive, isCollapsed, isOpen, onToggle }) {
	const Icon = item.icon

	return (
		<div>
			<Link
				href={item.submenu ? '#' : item.href}
				className={cn(
					'flex items-center justify-between rounded-lg px-4 py-2 text-sm transition-colors hover:bg-muted hover:text-primary',
					isActive ? 'bg-muted font-medium text-primary' : 'text-muted-foreground',
					isCollapsed && 'justify-center'
				)}
				onClick={(e) => {
					if (item.submenu) {
						e.preventDefault()
						onToggle()
					}
				}}
			>
				<div className="flex items-center gap-3">
					<Icon size={20} />
					{!isCollapsed && <span>{item.label}</span>}
				</div>
				{!isCollapsed && item.submenu && (
					<ChevronDown size={16} className={cn('transition-transform', isOpen && 'rotate-180')} />
				)}
			</Link>
			{item.submenu && isOpen && !isCollapsed && (
				<div className="mt-2 space-y-1 pl-6">
					{item.submenu.map((subItem, subIndex) => (
						<Link
							key={subIndex}
							href={subItem.href}
							className="block rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-primary"
						>
							{subItem.label}
						</Link>
					))}
				</div>
			)}
		</div>
	)
}

function SidebarContent({ isCollapsed, pathname }) {
	const [openSubmenu, setOpenSubmenu] = useState(null)

	return (
		<nav className="flex flex-col gap-2 p-2">
			{sidebarSections.map((section, sectionIndex) => (
				<div key={sectionIndex} className="mb-4">
					{!isCollapsed && (
						<h3 className="mb-2 px-4 text-xs font-semibold uppercase text-muted-foreground">{section.title}</h3>
					)}
					{section.items.map((item, itemIndex) => (
						<SidebarItem
							key={itemIndex}
							item={item}
							isActive={pathname === item.href}
							isCollapsed={isCollapsed}
							isOpen={openSubmenu === item.href}
							onToggle={() => setOpenSubmenu(openSubmenu === item.href ? null : item.href)}
						/>
					))}
				</div>
			))}
		</nav>
	)
}
