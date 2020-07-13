import React from 'react'

import { MainContent, TextContainer, PhotoContainer, LargeText } from './styles'

import heartHome from '../../assets/heart-home.svg'
import loveKey from '../../assets/love-key.svg'
import andre from '../../assets/img/5.png'
import kat from '../../assets/img/6.png'
// import casal1 from '../../assets/img/8.jpg'
// import casal2 from '../../assets/img/9.jpg'
// import casal3 from '../../assets/img/10.jpg'
// import casal4 from '../../assets/img/11.jpg'

import casal1 from '../../assets/img/NOIVOS/1.jpg'
import casal2 from '../../assets/img/NOIVOS/2.jpg'
import casal3 from '../../assets/img/NOIVOS/3.jpg'
import casal4 from '../../assets/img/NOIVOS/4.jpg'

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
					<p>Histórias de amor existem, e, às vezes, nem nós mesmos acreditamos que tudo aconteceu em tão pouco tempo. Porém, o brilho intenso e apaixonado dos nossos olhares nos faz lembrar o porquê de chegarmos até aqui...</p>
					<p>Nas primeiras trocas de mensagens, cheias de risos, já descobrimos que gostávamos os dois de quibe. Isso fez a gente levar em consideração que talvez fôssemos almas gêmeas (rsrs). Na primeira saída, só os dois pra almoçar caranguejo, não tinha caranguejo, mas teve uma conversa tão cheia de conexão que ali ela já sabia que "era ele"... Era ele com quem ela havia literalmente sonhado meses antes.</p>
					<p>O André demorou um pouco mais pra ver que ali já tinha tudo traçado por Deus. Foi preciso meses de convivência e oração pro rapaz se preparar e, enfim, ter certeza de que passaria o resto da vida ao lado dela. E glorificamos a Deus por cada período pré-namoro que vivemos, sendo amigos, nos conhecendo e fortalecendo a certeza que queríamos ser um casal. Desde o dia do nosso primeiro "sim", lá em setembro de 2018, traçamos metas, oramos a Deus com propósito de nossa família se iniciar para glória dEle e fazermos um ao outro feliz!</p>
					<p>Vamos nos casar! Nossa família irá começar e nada mais justo que celebrar toda essa felicidade ao lado das pessoas que amamos e viveram conosco cada fase e viverão essa nova que virá. Estamos preparando tudo com muito carinho para curtirmos cada momento com vocês, nossos amigos e familiares queridos!</p>
				</TextContainer>

				<img src={loveKey} className="icon" alt="" />

				<LargeText>
					O dia em que ela disse sim!
				</LargeText>

				<iframe width="560" height="338" title="O dia em que ela disse SIM!" src="https://www.youtube.com/embed/y8Wt-IHta38" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope" allowFullScreen></iframe>

				<LargeText>
					Desde 2018.... para Sempre!!!
				</LargeText>

				<PhotoContainer>
					<img src={casal1} alt=""/>
					<img src={casal2} alt=""/>
					<img src={casal3} alt=""/>
					<img src={casal4} alt=""/>
				</PhotoContainer>
			</MainContent>
		</>
	)
}