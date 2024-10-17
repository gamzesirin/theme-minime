import { ErrorAlert } from '@/components/ui-elements/alerts/ErrorAlert'
import { SuccessAlert } from '@/components/ui-elements/alerts/SuccesAlert'
import { WarningAlert } from '@/components/ui-elements/alerts/WarningAlert'
import { WithBackgroundErrorAlert } from '@/components/ui-elements/alerts/WithBackgroundErrorAlert'
import { WithBackgroundSuccesslert } from '@/components/ui-elements/alerts/WithBackgroundSuccesAlert'
import { WithBackgroundWarningAlert } from '@/components/ui-elements/alerts/WithBackgroundWarningAlert'
import { WithIconErrorAlert } from '@/components/ui-elements/alerts/WithIconErrorAlert'
import { WithIconSuccessAlert } from '@/components/ui-elements/alerts/WithIconSuccesAlert'
import { WithIconWarningAlert } from '@/components/ui-elements/alerts/WithIconWarningAlert'
import React from 'react'

const Alerts = () => {
	return (
		<div className="space-y-5">
			<div className="flex flex-wrap space-x-4 -mx-2 ">
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h1> Default Alerts</h1>
					<p>
						Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use
						one of the four required contextual classes (e.g., .alert-success). For inline dismissal, use the alerts
						jQuery plugin.
					</p>
					<ErrorAlert />
					<WarningAlert />
					<SuccessAlert />
				</div>
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h1> Default Alerts</h1>
					<p>
						Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use
						one of the four required contextual classes (e.g., .alert-success). For inline dismissal, use the alerts
						jQuery plugin.
					</p>
					<WithBackgroundErrorAlert />
					<WithBackgroundWarningAlert />
					<WithBackgroundSuccesslert />
				</div>
			</div>
			<div className="flex flex-wrap space-x-4 -mx-2">
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h1> Default Alerts</h1>
					<p>
						Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use
						one of the four required contextual classes (e.g., .alert-success). For inline dismissal, use the alerts
						jQuery plugin.
					</p>
					<WithIconErrorAlert />
					<WithIconWarningAlert />
					<WithIconSuccessAlert />
				</div>
				<div className=" flex-1 space-y-4 p-5 rounded-md bg-white border">
					<h1> Default Alerts</h1>
					<p>
						Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use
						one of the four required contextual classes (e.g., .alert-success). For inline dismissal, use the alerts
						jQuery plugin.
					</p>
					<WithBackgroundErrorAlert />
					<WithBackgroundWarningAlert />
					<WithBackgroundSuccesslert />
				</div>
			</div>
		</div>
	)
}

export default Alerts
