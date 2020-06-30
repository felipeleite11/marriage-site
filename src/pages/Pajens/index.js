import React from 'react'

import Header from '../../components/Header'
import Photo from '../../components/Photo'

import { MainContent, TextContainer, PhotoContainer } from './styles'

import car from '../../assets/car.png'
import eliza from '../../assets/img/PAJENS/eliza.jpg'
import murilo from '../../assets/img/PAJENS/murilo.JPG'
import noah from '../../assets/img/PAJENS/Noah.png'
import rebeca from '../../assets/img/PAJENS/rebeca.jpeg'

export default function() {
	return (
		<>
			<Header title="Pajens e Daminhas de honra" />

			<MainContent className="animate__animated animate__fadeInUp">

				<img src={car} alt="" className="icon animate__animated animate__fadeInUp animate__delay-1s" />

				<TextContainer>
					<p style={{ textAlign: 'center' }}>...</p>
				</TextContainer>

				<PhotoContainer className="animate__animated animate__fadeIn animate__slow animate__delay-1s">
					<Photo src={eliza} alt="" legend="Eliza" style={{ height: 200 }} />
					<Photo src={murilo} alt="" legend="Murilo" style={{ height: 200 }} />
					<Photo src={noah} alt="" legend="Noah" style={{ height: 200 }} />
					<Photo src={rebeca} alt="" legend="Rebeca" style={{ height: 200 }} />
				</PhotoContainer>

			</MainContent>
		</>
	)
}