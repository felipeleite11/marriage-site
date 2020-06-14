import React from 'react'

import { ImageContainer } from './styles'

export default function({ src, legend }) {
	return (
		<ImageContainer>
			<img src={src} alt="" />
			<span>{legend}</span>
		</ImageContainer>
	)
}