import React from 'react'

import { MainContent, TextContainer, ClothesContainer, MapContainer } from './styles'

import marker from '../../assets/love-marker.svg'
import place from '../../assets/img/place.png'
import roupas from '../../assets/img/clothes2.png'

import Header from '../../components/Header'
import Location from '../../components/Location'

export default function () {
	const centerPosition = [-1.4552186, -48.4998313]
	const placePosition = [-1.456023, -48.499842]

	return (
		<>
			<Header title="Cerimônia e Festa" />

			<MainContent className="animate__animated animate__fadeIn">
				<img src={marker} alt="" className="icon animate__animated animate__fadeInUp animate__delay-1s" />,

				<TextContainer>
					<p style={{ textAlign: 'center' }}>...</p>
				</TextContainer>

				<img src={place} alt=""/>

				<TextContainer>
					<p>Temos a honra de convidar vocês para participarem da celebração pela nossa união, que será realizada no dia 02 de outubro de 2020, sexta às 19 h e 30 min, no Espaço Le Lys localizada na Travessa São Francisco, 60, Campina- Belém.</p>
					<p>Contamos com sua honrosa presença em um dos momentos mais especiais de nossas vidas!</p>
				</TextContainer>

				<ClothesContainer>
					<img src={roupas} alt="" style={{ height: 180, width: 100 }} />

					<p className="default-font">
						Cor do vestido das madrinhas: Rosê.<br/>
						Evite usar esta cor no dia da recepção.<br/><br/>
						PS: Sugerimos chegarem com 30 minutos de antecedência.
					</p>
				</ClothesContainer>

				<TextContainer>
					<p>Será um prazer ter a presença de vocês!</p>
				</TextContainer>
			</MainContent>

			<MapContainer>
				<Location 
					centerPosition={centerPosition}
					markerPosition={placePosition} 
					title="Espaço Le Lys"
					description="Travessa São Francisco, 60, Campina- Belém"
				/>
			</MapContainer>
		</>
	)
}