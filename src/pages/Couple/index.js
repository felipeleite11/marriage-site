import React from 'react'

import { MainContent, TextContainer, PhotoContainer, LargeText } from './styles'

import heartHome from '../../assets/heart-home.svg'
import loveKey from '../../assets/love-key.svg'
import andre from '../../assets/img/5.png'
import kat from '../../assets/img/6.png'
import casal from '../../assets/img/7.jpg'
import casal2 from '../../assets/img/8.jpg'
import casal3 from '../../assets/img/9.jpg'
import casal4 from '../../assets/img/10.jpg'
import casal5 from '../../assets/img/11.jpg'

import Header from '../../components/Header'
import BlockQuote from '../../components/BlockQuote'

export default function () {
	return (
		<>
			<Header title="Os noivos" />

			<MainContent className="animate__animated animate__fadeIn">
				<BlockQuote reference="Ec. 3:14">
					Tudo quanto Deus faz, durará eternamente.
				</BlockQuote>

				<img src={heartHome} alt="" className="icon animate__animated animate__fadeInUp animate__delay-1s" />

				<PhotoContainer rounded forceGridTemplate>
					<img src={kat} alt=""/>
					<img src={andre} alt=""/>
				</PhotoContainer>

				<TextContainer>
					<p>Histórias de amor existem, e, às vezes, nem nós mesmos acreditamos que tudo aconteceu em tão pouco tempo. Porém, o brilho intenso e apaixonado dos nossos olhares nos fazem lembrar o porquê de chegarmos até aqui ....</p>
					<p>Vamos nos casar! Estamos preparando tudo com muito carinho para curtirmos cada momento com nossos amigos e familiares queridos!</p>
				</TextContainer>

				<img src={loveKey} className="icon" alt="" />

				<img src={casal} className="scalable" alt="" />

				<LargeText>
					Desde 2018.... para Sempre!!!
				</LargeText>

				<PhotoContainer>
					<img src={casal2} alt=""/>
					<img src={casal3} alt=""/>
					<img src={casal4} alt=""/>
					<img src={casal5} alt=""/>
				</PhotoContainer>
			</MainContent>
		</>
	)
}