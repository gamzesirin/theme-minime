import { Toast, ToastClose, ToastDescription, ToastTitle } from '@/components/ui/toast'

export const DangerToast = () => {
	return (
		<Toast variant="danger">
			<div className="flex items-center gap-3">
				<div className="grid gap-1">
					<ToastTitle>Danger Toast</ToastTitle>
					<ToastDescription>An error occurred while processing your request.</ToastDescription>
				</div>
			</div>
			<ToastClose />
		</Toast>
	)
}
