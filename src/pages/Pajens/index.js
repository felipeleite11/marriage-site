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
					<p>Sem dúvida a fofura e os suspiros de "ouunnn" estarão garantidos com a beleza dos sorrisos deles! Nossas crianças vocês sem dúvida trarão ao nosso cortejo mais da pureza e da presença de Deus... Alguns que acompanhamos  cada momento da vida, a gravidez, o nascimento e vários aniversários e até mesmo os que chegaram a menos tempo e já são tão importantes...</p>
					<p>Queremos que tenham na lembrança de infância esse dia tão importante na vida da tia Kati e do tio André!</p>
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