import React from 'react'

import Header from '../../components/Header'

import { MainContent, TextContainer } from './styles'

export default function() {
	return (
		<>
			<Header title="Aos pais" />

			<MainContent className="animate__animated animate__fadeIn">
				<TextContainer>
					<p>...</p>
					
				</TextContainer>
			</MainContent>
		</>
	)
}