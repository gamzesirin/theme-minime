import { ErrorAlert } from '@/components/ui-elements/alerts/ErrorAlert'
import { InfoAlert } from '@/components/ui-elements/alerts/InfoAlert'
import SquareErrorAlert from '@/components/ui-elements/alerts/SquareErrorAlert'
import SquareInfoAlert from '@/components/ui-elements/alerts/SquareInfoAlert'
import SquareSuccessAlert from '@/components/ui-elements/alerts/SquareSuccessAlert'
import SquareWarningAlert from '@/components/ui-elements/alerts/SquareWarningAlert'
import { SuccessAlert } from '@/components/ui-elements/alerts/SuccesAlert'
import { WarningAlert } from '@/components/ui-elements/alerts/WarningAlert'
import { WithBackgroundErrorAlert } from '@/components/ui-elements/alerts/WithBackgroundErrorAlert'
import { WithBackgroundInfoAlert } from '@/components/ui-elements/alerts/WithBackgroundInfoAlert'
import { WithBackgroundSuccesslert } from '@/components/ui-elements/alerts/WithBackgroundSuccesAlert'
import { WithBackgroundWarningAlert } from '@/components/ui-elements/alerts/WithBackgroundWarningAlert'
import { WithIconErrorAlert } from '@/components/ui-elements/alerts/WithIconErrorAlert'
import { WithIconInfoAlert } from '@/components/ui-elements/alerts/WithIconInfoAlert'
import { WithIconSuccessAlert } from '@/components/ui-elements/alerts/WithIconSuccesAlert'
import { WithIconWarningAlert } from '@/components/ui-elements/alerts/WithIconWarningAlert'
import React from 'react'

const Alerts = () => {
	return (
		<div className="space-y-5">
			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-lg font-semibold mb-2"> Default Alerts</h2>
					<p>
						Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use
						one of the four required contextual classes (e.g., .alert-success). For inline dismissal, use the alerts
						jQuery plugin.
					</p>
					<InfoAlert />
					<ErrorAlert />
					<WarningAlert />
					<SuccessAlert />
				</div>
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-lg font-semibold mb-2"> With Background Alerts</h2>
					<p>
						Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use
						one of the four required contextual classes (e.g., .alert-success). For inline dismissal, use the alerts
						jQuery plugin.
					</p>
					<WithBackgroundInfoAlert />
					<WithBackgroundErrorAlert />
					<WithBackgroundWarningAlert />
					<WithBackgroundSuccesslert />
				</div>
			</div>
			<div className="flex flex-wrap space-x-4 -mx-2">
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-lg font-semibold mb-2"> With Icon Alerts</h2>
					<p>
						Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use
						one of the four required contextual classes (e.g., .alert-success). For inline dismissal, use the alerts
						jQuery plugin.
					</p>
					<WithIconInfoAlert />
					<WithIconErrorAlert />
					<WithIconWarningAlert />
					<WithIconSuccessAlert />
				</div>
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h2 className="text-lg font-semibold mb-2"> Square Alerts</h2>
					<p>
						Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use
						one of the four required contextual classes (e.g., .alert-success). For inline dismissal, use the alerts
						jQuery plugin.
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<SquareInfoAlert />
						<SquareErrorAlert />
						<SquareWarningAlert />
						<SquareSuccessAlert />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Alerts
