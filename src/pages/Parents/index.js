import React from 'react'

import Header from '../../components/Header'
import Photo from '../../components/Photo'

import { MainContent, TextContainer, PhotoContainer } from './styles'

import car from '../../assets/car.png'
import katia_reginaldo from '../../assets/img/PAIS/Katia e Reginaldo.JPG'
import marta_andre from '../../assets/img/PAIS/Marta e Andre.jpg'

export default function() {
	return (
		<>
			<Header title="Aos pais" />

			<MainContent className="animate__animated animate__fadeInUp">

				<img src={car} alt="" className="icon animate__animated animate__fadeInUp animate__delay-1s" />

				<TextContainer>
					<p style={{ textAlign: 'center' }}>...</p>
					<p>Queridos Pais,</p>
					<p>Obrigado por terem nos ensinado a importância do amor à Deus e o respeito ao próximo através do exemplo diário da vida de vocês.</p>
					<p>Por se fazerem tão presentes e necessários, nos ajudando gradativamente a sermos a pessoa que somos. Por serem a nossa luz nos momentos de indecisões, pelo espaço que ocupamos no coração e por tantos anos viverem em função das nossas vidas. Por serem os melhores pais que poderíamos ter. Pelo sim que disseram à Deus quando aceitaram ser nossos pais desde o primeiro momento em que viemos ao mundo. Vocês são um presente de Deus pra nós e agradecemos à Ele por ter nos dado pais maravilhosos.</p>
					<p>E agora, vamos iniciar a construção de uma nova família, na qual pretendemos levar todos esses valores aprendidos. Por isso queremos que testemunhem o nosso amor e nos abençoem, diante de Deus.</p>
					<p>Amamos vocês!</p>
					<p>Com carinho,</p>
					<p>Katiane e André</p>
				</TextContainer>

				<PhotoContainer className="animate__animated animate__fadeIn animate__slow animate__delay-1s">
					<Photo src={katia_reginaldo} alt="" legend="Kátia e Reginaldo" style={{ width: 300 }} />
					<Photo src={marta_andre} alt="" legend="Marta e André" style={{ width: 200 }} />
				</PhotoContainer>

			</MainContent>
		</>
	)
}