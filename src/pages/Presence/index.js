import React from 'react'

import Header from '../../components/Header'

import { MainContent, TextContainer } from './styles'

import aliancas from '../../assets/aliancas.png'

export default function() {
	return (
		<>
			<Header title="Confirme sua presença" />

			<MainContent className="animate__animated animate__fadeIn">

				<img src={aliancas} alt="" className="icon animate__animated animate__fadeInUp animate__delay-1s" />

				<TextContainer className="animate__animated animate__fadeInUp animate__slow">
					<p style={{ textAlign: 'center' }}>...</p>
					<p>Em construção...</p>
				</TextContainer>
			</MainContent>
		</>
	)
}