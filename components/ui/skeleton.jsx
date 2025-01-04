'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

const skeletonVariants = {
	default: 'bg-muted animate-pulse rounded-md',
	card: 'bg-muted animate-pulse rounded-lg',
	wave: 'bg-muted animate-[wave_2s_infinite] rounded-md',
	glow: 'bg-muted animate-[glow_2s_infinite] rounded-md'
}

const widthVariants = {
	full: 'w-full',
	sm: 'w-16',
	md: 'w-32',
	lg: 'w-64',
	xl: 'w-96'
}

const heightVariants = {
	default: 'h-4',
	sm: 'h-2',
	md: 'h-4',
	lg: 'h-8',
	xl: 'h-16'
}

function CustomSkeleton({ className, variant = 'default', width = 'full', height = 'default', ...props }) {
	return (
		<div
			className={cn(skeletonVariants[variant], widthVariants[width], heightVariants[height], className)}
			{...props}
		/>
	)
}

export { CustomSkeleton }
