import { Toast, ToastTitle, ToastDescription, ToastClose } from '@/components/ui/toast'

export const WarningToast = () => {
	return (
		<Toast variant="warning">
			<div className="flex items-center gap-3">
				<div className="grid gap-1">
					<ToastTitle>Warning Toast</ToastTitle>
					<ToastDescription>Please check your input and try again.</ToastDescription>
				</div>
			</div>
			<ToastClose />
		</Toast>
	)
}
