import { Toast, ToastClose, ToastDescription, ToastTitle } from '@/components/ui/toast'
export const StackingToast = () => {
	return (
		<div className="relative">
			<Toast variant="default" className="mb-2 opacity-50">
				<div className="grid gap-1">
					<ToastTitle>Previous Toast</ToastTitle>
					<ToastDescription>This toast will stack.</ToastDescription>
				</div>
			</Toast>
			<Toast variant="default">
				<div className="grid gap-1">
					<ToastTitle>Latest Toast</ToastTitle>
					<ToastDescription>This is the most recent toast.</ToastDescription>
				</div>
				<ToastClose />
			</Toast>
		</div>
	)
}
