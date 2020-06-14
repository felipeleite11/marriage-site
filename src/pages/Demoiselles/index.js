import React from 'react'

import Header from '../../components/Header'
import Photo from '../../components/Photo'

import { MainContent, TextContainer, PhotoContainer } from './styles'

import helaiane from '../../assets/img/helaiane.png'
import regianne from '../../assets/img/regianne.jpg'
import fulana from '../../assets/img/fulana.png'
import beltrana from '../../assets/img/beltrana.png'

const godParents = [
	{ image: helaiane, name: 'Helaiane' },
	{ image: regianne, name: 'Regianne' },
	{ image: fulana, name: 'Fulana' },
	{ image: beltrana, name: 'Beltrana' }
]

export default function() {
	return (
		<>
			<Header title="Demoiselles" />

			<MainContent className="animate__animated animate__fadeIn">

				<TextContainer className="animate__animated animate__fadeInUp animate__slow">
					<p>...</p>
				</TextContainer>

				<PhotoContainer className="animate__animated animate__fadeIn animate__slow animate__delay-1s">
					{godParents.map(parent => (
						<Photo key={parent.name} src={parent.image} alt="" legend={parent.name} />
					))}
				</PhotoContainer>
				
			</MainContent>
		</>
	)
}
