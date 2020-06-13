import React from 'react'

import { BlockQuote, Quote } from './styles'

export default function({ children, reference }) {
	return (
		<BlockQuote>
			<Quote>
				<span>“</span>
				{children}
				<span>”</span>
			</Quote>

			<p>{reference}</p>
		</BlockQuote>
	)
}