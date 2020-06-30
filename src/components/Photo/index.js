import React from 'react'

import { ImageContainer } from './styles'

export default function({ src, legend, style = {} }) {
	return (
		<ImageContainer>
			<img src={src} alt="" style={style} />
			<span>{legend}</span>
		</ImageContainer>
	)
}