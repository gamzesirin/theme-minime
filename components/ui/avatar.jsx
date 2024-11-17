import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cn } from '@/lib/utils'

// Base Avatar (Round)
const Avatar = React.forwardRef(({ size = 'md', className, ...props }, ref) => {
	const sizeClasses = {
		sm: 'h-8 w-8',
		md: 'h-12 w-12',
		lg: 'h-16 w-16'
	}

	return (
		<AvatarPrimitive.Root
			ref={ref}
			className={cn('relative flex shrink-0 overflow-hidden rounded-full', sizeClasses[size], className)}
			{...props}
		/>
	)
})
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
	<AvatarPrimitive.Image ref={ref} className={cn('aspect-square h-full w-full', className)} {...props} />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
	<AvatarPrimitive.Fallback
		ref={ref}
		className={cn('flex h-full w-full items-center justify-center rounded-full bg-muted', className)}
		{...props}
	/>
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

// Square Avatar
const SquareAvatar = React.forwardRef(({ size = 'md', className, ...props }, ref) => {
	const sizeClasses = {
		sm: 'h-8 w-8',
		md: 'h-12 w-12',
		lg: 'h-16 w-16'
	}

	return (
		<AvatarPrimitive.Root
			ref={ref}
			className={cn('relative flex shrink-0 overflow-hidden rounded-lg', sizeClasses[size], className)}
			{...props}
		/>
	)
})
SquareAvatar.displayName = AvatarPrimitive.Root.displayName

const SquareAvatarImage = React.forwardRef(({ className, ...props }, ref) => (
	<AvatarPrimitive.Image ref={ref} className={cn('aspect-square h-full w-full', className)} {...props} />
))
SquareAvatarImage.displayName = AvatarPrimitive.Image.displayName

const SquareAvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
	<AvatarPrimitive.Fallback
		ref={ref}
		className={cn('flex h-full w-full items-center justify-center rounded-lg bg-muted', className)}
		{...props}
	/>
))
SquareAvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback, SquareAvatar, SquareAvatarImage, SquareAvatarFallback }
