import React from 'react'

const ColorsPage = () => {
	return (
		<>
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-bold tracking-tight">Colors</h2>
			</div>
			<div className="space-y-8">
				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-medium">Colors</h3>
						<span className="text-sm text-muted-foreground">#5b73e8</span>
					</div>
					<div className="grid grid-cols-3 gap-4">
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-primary-subtle" />
							<div className="space-y-1">
								<p className="text-sm font-medium">bg-primary-subtle</p>
							</div>
						</div>
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-gradient-primary" />
							<div className="space-y-1">
								<p className="text-sm font-medium">bg-gradient-primary</p>
							</div>
						</div>
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-primary" />
							<div className="space-y-1">
								<p className="text-sm font-medium">bg-primary</p>
							</div>
						</div>
					</div>
				</div>

				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-medium">Success</h3>
						<span className="text-sm text-muted-foreground">#34c38f</span>
					</div>
					<div className="grid grid-cols-3 gap-4">
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-success-subtle" />
							<div className="space-y-1">
								<p className="text-sm font-medium">bg-success-subtle</p>
							</div>
						</div>
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-gradient-success" />
							<div className="space-y-1">
								<p className="text-sm font-medium">bg-gradient-success</p>
							</div>
						</div>
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-success" />
							<div className="space-y-1">
								<p className="text-sm font-medium">bg-success</p>
							</div>
						</div>
					</div>
				</div>

				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-medium">Warning</h3>
						<span className="text-sm text-muted-foreground">#f1b44c</span>
					</div>
					<div className="grid grid-cols-3 gap-4">
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-warning-subtle" />
							<div className="space-y-1">
								<p className="text-sm font-medium">bg-warning-subtle</p>
							</div>
						</div>
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-gradient-warning" />
							<div className="space-y-1">
								<p className="text-sm font-medium">bg-gradient-warning</p>
							</div>
						</div>
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-warning" />
							<div className="space-y-1">
								<p className="text-sm font-medium">bg-warning</p>
							</div>
						</div>
					</div>
				</div>

				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-medium">Danger</h3>
						<span className="text-sm text-muted-foreground">#f46a6a</span>
					</div>
					<div className="grid grid-cols-3 gap-4">
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-danger-subtle" />
							<div className="space-y-1">
								<p className="text-sm font-medium">bg-danger-subtle</p>
							</div>
						</div>
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-gradient-danger" />
							<div className="space-y-1">
								<p className="text-sm font-medium">bg-gradient-danger</p>
							</div>
						</div>
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-danger" />
							<div className="space-y-1">
								<p className="text-sm font-medium">bg-danger</p>
							</div>
						</div>
					</div>
				</div>

				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-medium">Secondary</h3>
						<span className="text-sm text-muted-foreground">#74788d</span>
					</div>
					<div className="grid grid-cols-3 gap-4">
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-secondary-subtle" />
							<div className="space-y-1">
								<p className="text-sm font-medium">bg-secondary-subtle</p>
							</div>
						</div>
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-gradient-secondary" />
							<div className="space-y-1">
								<p className="text-sm font-medium">bg-gradient-secondary</p>
							</div>
						</div>
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-secondary" />
							<div className="space-y-1">
								<p className="text-sm font-medium">bg-secondary</p>
							</div>
						</div>
					</div>
				</div>

				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-medium">Body</h3>
					</div>
					<div className="grid grid-cols-3 gap-4">
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-body" />
							<div className="space-y-1">
								<p className="text-sm font-medium">bg-body</p>
							</div>
						</div>
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-body-tertiary" />
							<div className="space-y-1">
								<p className="text-sm font-medium">bg-body-tertiary</p>
							</div>
						</div>
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-body-secondary" />
							<div className="space-y-1">
								<p className="text-sm font-medium">bg-body-secondary</p>
							</div>
						</div>
					</div>
				</div>

				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-medium">Opacity</h3>
					</div>
					<div className="grid grid-cols-3 gap-4">
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-primary opacity-75" />
							<div className="space-y-1">
								<p className="text-sm font-medium">opacity-75</p>
							</div>
						</div>
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-primary opacity-50" />
							<div className="space-y-1">
								<p className="text-sm font-medium">opacity-50</p>
							</div>
						</div>
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-primary opacity-25" />
							<div className="space-y-1">
								<p className="text-sm font-medium">opacity-25</p>
							</div>
						</div>
					</div>
				</div>

				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-medium">Other</h3>
					</div>
					<div className="grid grid-cols-3 gap-4">
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-black" />
							<div className="space-y-1">
								<p className="text-sm font-medium">bg-black</p>
							</div>
						</div>
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-white border" />
							<div className="space-y-1">
								<p className="text-sm font-medium">bg-white</p>
							</div>
						</div>
						<div className="space-y-2">
							<div className="h-20 w-20 rounded-lg bg-transparent border" />
							<div className="space-y-1">
								<p className="text-sm font-medium">bg-transparent</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ColorsPage
