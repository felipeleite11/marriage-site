import React from 'react'

import Header from '../../components/Header'
import Photo from '../../components/Photo'

import { MainContent, TextContainer, PhotoContainer } from './styles'

import helaiane from '../../assets/img/helaiane.png'
import regianne from '../../assets/img/regianne.jpg'
import fulana from '../../assets/img/fulana.png'
import beltrana from '../../assets/img/beltrana.png'

import cake from '../../assets/cake.png'

const godParents = [
	{ image: helaiane, name: 'Helaiane' },
	{ image: regianne, name: 'Regianne' },
	{ image: fulana, name: 'Fulana' },
	{ image: beltrana, name: 'Beltrana' }
]

export default function() {
	function handlePhotoClick() {
		alert('CLICKED')
	}

	return (
		<>
			<Header title="Padrinhos" />

			<MainContent className="animate__animated animate__fadeIn">

				<img src={cake} alt="" className="icon animate__animated animate__fadeInUp animate__delay-1s" />

				<TextContainer className="animate__animated animate__fadeInUp animate__slow">
					<p style={{ textAlign: 'center' }}>...</p>
					<p>Aos nossos queridos padrinhos,</p>
					<p>A escolha dos padrinhos foi, sem dúvida, uma das missões mais difíceis. São muitas as pessoas que amamos e que queríamos ao nosso lado nesse momento.</p>
					<p>Têm pessoas que não apenas participam das nossas vidas, mas também às completam. Existem amigos que são mais do que amigos, são irmãos... E têm irmãos que são muito mais do que irmãos, são anjos que Deus nos enviou para nos alegrarem e dividirem conosco cada momento de nossas vidas...</p>
					<p>É uma emoção única e indescritível tê-los ao nosso lado e poder partilhar com vocês toda felicidade dessa nova etapa em nossas vidas: nosso casamento! Por isso, desejamos tê-los como testemunhas do nosso sonho e do nosso amor!</p>
				</TextContainer>

				<PhotoContainer className="animate__animated animate__fadeIn animate__slow animate__delay-1s">
					{godParents.map(parent => (
						<Photo key={parent.name} src={parent.image} alt="" legend={parent.name} onClick={handlePhotoClick} />
					))}
				</PhotoContainer>
				
			</MainContent>
		</>
	)
}
