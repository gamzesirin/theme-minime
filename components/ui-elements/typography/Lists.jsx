import React from 'react'

const Lists = () => {
	return (
		<div>
			<section className="space-y-4">
				<h2 className="text-2xl font-semibold mb-4">Lists</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-2">Unordered List</h3>
						<ul className="list-disc list-inside space-y-1">
							<li>Integer molestie lorem at massa</li>
							<li>
								Nulla volutpat aliquam velit
								<ul className="list-disc list-inside ml-4 space-y-1">
									<li>Phasellus iaculis neque</li>
									<li>Vestibulum laoreet porttitor sem</li>
									<li>Ac tristique libero volutpat at</li>
								</ul>
							</li>
							<li>Faucibus porta lacus fringilla vel</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-2">Ordered List</h3>
						<ol className="list-decimal list-inside space-y-1">
							<li>Integer molestie lorem at massa</li>
							<li>Nulla volutpat aliquam velit</li>
							<li>Faucibus porta lacus fringilla vel</li>
							<li>Aenean sit amet erat nunc</li>
						</ol>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Lists
