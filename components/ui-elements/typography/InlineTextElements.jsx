import React from 'react'

const InlineTextElements = () => {
	return (
		<div>
			<section className="space-y-4">
				<h2 className="text-2xl font-semibold mb-4">Inline text elements</h2>
				<p className="text-muted-foreground">Styling for common inline HTML5 elements.</p>
				<div className="space-y-2">
					<p>
						You can use the mark tag to <mark className="bg-yellow-200 rounded-sm px-1">highlight</mark> text.
					</p>
					<p className="line-through">This line of text is meant to be treated as deleted text.</p>
					<p className="underline">This line of text will render as underlined.</p>
					<p className="italic">This line rendered as italicized text.</p>
					<p className="font-bold">This line rendered as bold text.</p>
				</div>
			</section>
		</div>
	)
}

export default InlineTextElements
