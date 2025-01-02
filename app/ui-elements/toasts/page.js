'use client'

import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

export default function TestPage() {
	const { toast } = useToast()

	const showToast = () => {
		toast({
			variant: 'success',
			title: 'Başarılı!',
			description: 'İşlem başarıyla tamamlandı.'
		})
	}

	return (
		<div className="p-4">
			<Button onClick={showToast}>Show Toast</Button>
		</div>
	)
}
