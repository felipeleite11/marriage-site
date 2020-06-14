import React from 'react'

import Header from '../../components/Header'

import { MainContent, TextContainer } from './styles'

import car from '../../assets/car.png'

export default function() {
	return (
		<>
			<Header title="Aos pais" />

			<MainContent className="animate__animated animate__fadeInUp">

				<img src={car} alt="" className="icon animate__animated animate__fadeInUp animate__delay-1s" />

				<TextContainer>

					<p style={{ textAlign: 'center' }}>...</p>
					
				</TextContainer>
			</MainContent>
		</>
	)
}