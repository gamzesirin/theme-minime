import { SquareAvatar, SquareAvatarFallback, SquareAvatarImage } from '@/components/ui/avatar'

export const MediumSquareAvatar = ({ src, fallback }) => {
	return (
		<div className="flex flex-col items-center gap-2">
			<SquareAvatar size="md">
				<SquareAvatarImage src={src} alt="Square Avatar" />
				<SquareAvatarFallback>{fallback}</SquareAvatarFallback>
			</SquareAvatar>
			<span className="text-sm text-pink-500">.square-avatar-md</span>
		</div>
	)
}
