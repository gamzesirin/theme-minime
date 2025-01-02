import React from 'react'

const DisplayHeadings = () => {
	return (
		<div>
			<section className="space-y-4">
				<h2 className="text-2xl font-semibold mb-4">Display headings</h2>
				<p className="text-muted-foreground">
					Traditional heading elements are designed to work best in the meat of your page content.
				</p>
				<div className="space-y-4">
					<h1 className="scroll-m-20 text-7xl font-bold tracking-tight">Display 1</h1>
					<h1 className="scroll-m-20 text-6xl font-bold tracking-tight">Display 2</h1>
					<h1 className="scroll-m-20 text-5xl font-bold tracking-tight">Display 3</h1>
					<h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Display 4</h1>
					<h1 className="scroll-m-20 text-3xl font-bold tracking-tight">Display 5</h1>
					<h1 className="scroll-m-20 text-2xl font-bold tracking-tight">Display 6</h1>
				</div>
			</section>
		</div>
	)
}

export default DisplayHeadings
