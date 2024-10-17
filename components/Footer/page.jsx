export default function Footer() {
	return (
		<footer className="bg-background border-t h-14 flex items-center justify-between px-4">
			<p className="text-sm text-muted-foreground">© 2024 Minible. All rights reserved.</p>
			<nav className="flex space-x-4 text-sm">
				<a href="/privacy" className="text-muted-foreground hover:text-foreground">
					Privacy Policy
				</a>
				<a href="/terms" className="text-muted-foreground hover:text-foreground">
					Terms of Service
				</a>
				<a href="/contact" className="text-muted-foreground hover:text-foreground">
					Contact Us
				</a>
			</nav>
		</footer>
	)
}
