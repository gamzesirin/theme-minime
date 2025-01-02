import { Toast, ToastTitle, ToastDescription, ToastClose } from '@/components/ui/toast'
export const PrimaryToast = () => {
	return (
		<Toast variant="primary">
			<div className="flex items-center gap-3">
				<div className="grid gap-1">
					<ToastTitle>Primary Toast</ToastTitle>
					<ToastDescription>Hello, world! This is a toast message.</ToastDescription>
				</div>
			</div>
			<ToastClose />
		</Toast>
	)
}
