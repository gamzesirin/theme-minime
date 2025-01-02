import { Toast, ToastClose, ToastDescription, ToastTitle } from '@/components/ui/toast'
export const TranslucentToast = () => {
	return (
		<Toast variant="translucent">
			<div className="flex items-center gap-3">
				<div className="grid gap-1">
					<ToastTitle>Translucent Toast</ToastTitle>
					<ToastDescription>This is a translucent toast with blur effect.</ToastDescription>
				</div>
			</div>
			<ToastClose />
		</Toast>
	)
}
