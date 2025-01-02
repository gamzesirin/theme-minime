import React from 'react'

const Blockquotes = () => {
	return (
		<div>
			<section className="space-y-4">
				<h2 className="text-2xl font-semibold mb-4">Blockquotes</h2>
				<blockquote className="mt-6 border-l-2 pl-6 italic">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
					<footer className="mt-2 text-sm text-muted-foreground">
						— Someone famous in <cite>Source Title</cite>
					</footer>
				</blockquote>
			</section>
		</div>
	)
}

export default Blockquotes
