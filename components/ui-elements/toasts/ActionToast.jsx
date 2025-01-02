import { Toast, ToastClose, ToastDescription, ToastTitle } from '@/components/ui/toast'
import { ToastAction } from '@/components/ui/toast'

export const ActionToast = () => {
	return (
		<Toast variant="primary">
			<div className="flex items-center gap-3">
				<div className="grid gap-1">
					<ToastTitle>Action Required</ToastTitle>
					<ToastDescription>Please take action on this notification.</ToastDescription>
				</div>
				<ToastAction altText="Take action">Action</ToastAction>
			</div>
			<ToastClose />
		</Toast>
	)
}
