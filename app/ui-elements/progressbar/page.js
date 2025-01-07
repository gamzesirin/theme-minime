'use client'

import { Progress } from '@/components/ui/progress'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { useState, useEffect } from 'react'

function ProgressbarPage() {
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prev) => (prev >= 100 ? 0 : prev + 10))
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	return (
		<div className="container mx-auto p-6 space-y-8">
			{/* Renk Varyantları */}
			<Card>
				<CardHeader>
					<CardTitle>İlerleme Çubuğu Renk Varyantları</CardTitle>
					<CardDescription>Farklı bağlamlar için farklı renk varyantları</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="space-y-2">
						<div className="text-sm font-medium">Varsayılan</div>
						<Progress value={progress} />
					</div>

					<div className="space-y-2">
						<div className="text-sm font-medium">Başarı</div>
						<Progress value={progress} className="bg-green-100 [&>div]:bg-green-600" />
					</div>

					<div className="space-y-2">
						<div className="text-sm font-medium">Bilgi</div>
						<Progress value={progress} className="bg-blue-100 [&>div]:bg-blue-600" />
					</div>

					<div className="space-y-2">
						<div className="text-sm font-medium">Uyarı</div>
						<Progress value={progress} className="bg-yellow-100 [&>div]:bg-yellow-600" />
					</div>

					<div className="space-y-2">
						<div className="text-sm font-medium">Tehlike</div>
						<Progress value={progress} className="bg-red-100 [&>div]:bg-red-600" />
					</div>
				</CardContent>
			</Card>

			{/* Boyut Varyantları */}
			<Card>
				<CardHeader>
					<CardTitle>İlerleme Çubuğu Boyutları</CardTitle>
					<CardDescription>İlerleme çubuğunun farklı boyut varyasyonları</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="space-y-2">
						<div className="text-sm font-medium">Küçük</div>
						<Progress value={progress} className="h-2" />
					</div>

					<div className="space-y-2">
						<div className="text-sm font-medium">Varsayılan</div>
						<Progress value={progress} />
					</div>

					<div className="space-y-2">
						<div className="text-sm font-medium">Büyük</div>
						<Progress value={progress} className="h-6" />
					</div>
				</CardContent>
			</Card>

			{/* Kombine Varyantlar */}
			<Card>
				<CardHeader>
					<CardTitle>Kombine Varyantlar</CardTitle>
					<CardDescription>Farklı renk ve boyutların kombinasyonu</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="space-y-2">
						<div className="text-sm font-medium">Küçük Başarı</div>
						<Progress value={progress} className="h-2 bg-green-100 [&>div]:bg-green-600" />
					</div>

					<div className="space-y-2">
						<div className="text-sm font-medium">Varsayılan Uyarı</div>
						<Progress value={progress} className="bg-yellow-100 [&>div]:bg-yellow-600" />
					</div>

					<div className="space-y-2">
						<div className="text-sm font-medium">Büyük Tehlike</div>
						<Progress value={progress} className="h-6 bg-red-100 [&>div]:bg-red-600" />
					</div>
				</CardContent>
			</Card>
		</div>
	)
}

export default ProgressbarPage
