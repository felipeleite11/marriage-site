import React from 'react'

import Header from '../../components/Header'
import Photo from '../../components/Photo'

import { MainContent, TextContainer, PhotoContainer } from './styles'

import demoiselle1 from '../../assets/img/DEMOISELLES/Ana carolina Queiroz.jpg'
import demoiselle2 from '../../assets/img/DEMOISELLES/Glenda Meguins.png'
import demoiselle3 from '../../assets/img/DEMOISELLES/Kassia Leticia Dourado.jpg'
import demoiselle4 from '../../assets/img/DEMOISELLES/Layla Oliveira.jpg'
import demoiselle5 from '../../assets/img/DEMOISELLES/Thayanne Monteiro.jpg'
import demoiselle6 from '../../assets/img/DEMOISELLES/Thayara Pereira.jpg'
import mail from '../../assets/love-mail.svg'

const godParents = [
	{ image: demoiselle1, name: 'Ana Carolina Queiroz' },
	{ image: demoiselle2, name: 'Glenda Meguins' },
	{ image: demoiselle3, name: 'Kássia Letícia Dourado' },
	{ image: demoiselle4, name: 'Layla Oliveira' },
	{ image: demoiselle5, name: 'Thayanne Monteiro' },
	{ image: demoiselle6, name: 'Thayara Pereira' }
]

export default function() {
	return (
		<>
			<Header title="Demoiselles" />

			<MainContent className="animate__animated animate__fadeIn">

				<img src={mail} alt="" className="icon animate__animated animate__fadeInUp animate__delay-1s" />

				<TextContainer className="animate__animated animate__fadeInUp animate__slow">
					<p>...</p>
				</TextContainer>

				<PhotoContainer className="animate__animated animate__fadeIn animate__slow animate__delay-1s">
					{godParents.map(demoiselle => (
						<div key={demoiselle.name}>
							<Photo src={demoiselle.image} alt="" legend={demoiselle.name} />
						</div>
					))}
				</PhotoContainer>
				
			</MainContent>
		</>
	)
}
