import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export const SmallAvatar = ({ src, fallback }) => {
	return (
		<div className="flex flex-col items-center gap-2">
			<Avatar size="sm">
				<AvatarImage src={src} alt="Avatar" />
				<AvatarFallback>{fallback}</AvatarFallback>
			</Avatar>
			<span className="text-sm text-pink-500">.avatar-sm</span>
		</div>
	)
}
