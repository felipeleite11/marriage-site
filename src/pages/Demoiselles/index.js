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
					<p>Às minhas queridas amigas,</p>
					<p>Ao longo da minha vida sempre fui presenteada com pessoas que acrescentaram na minha história mais do que eu posso descrever em palavras nesse breve texto. Porém quero que sintam nessa escolha um pouco do amor, cuidado e irmandade que cada uma de vocês representa.</p>
					<p>Uma a uma foram escolhidas para serem as que anunciarão a chegada da noiva durante a cerimônia e dizer ao mundo que ela deixou de ser solteira. Mas premanece sendo uma amiga que precisa do carinho e amizade vocês. </p>
					<p>É com imensa gratidão a Deus por tudo que fizeram ao longo do tempo e por cada momento vivido, que nós confiamos a vocês esse lugar para testemunharem mais uma vez uma fase importante de nossas vidas!</p>
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
