import { Toast, ToastTitle, ToastDescription, ToastClose } from '@/components/ui/toast'

export const SuccessToast = () => {
	return (
		<Toast variant="success" className="absolute bottom-4 right-4">
			<div className="flex items-center gap-3">
				<div className="grid gap-1">
					<ToastTitle>Success Toast</ToastTitle>
					<ToastDescription>Your action has been completed successfully.</ToastDescription>
				</div>
			</div>
			<ToastClose />
		</Toast>
	)
}
