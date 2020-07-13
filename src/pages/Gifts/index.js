import React from 'react'

import { MainContent, TextContainer, GiftsContainer, Gifts } from './styles'

import Header from '../../components/Header'

import gift from '../../assets/gift.png'

export default function() {
	return (
		<>
			<Header title="Lista de presentes" style={{height: 490, border: '0 none', width: 619, marginTop: -60, marginLeft: -24}} />

			<MainContent>
				
				<img src={gift} alt="" className="icon animate__animated animate__fadeInUp animate__delay-1s" />

				<TextContainer className="animate__animated animate__fadeInUp animate__slow">
					<p style={{ textAlign: 'center' }}>...</p>
					<p>Família e amigos, ter vocês em nosso casamento é nosso maior presente! Inclusive, agradecemos a todos que já nos ajudaram e continuam nos presenteando com tanto carinho!</p>
					<p>Caso queiram nos presentear com algo mais, para sua maior comodidade disponibilizamos listas virtuais neste site e lojas físicas.</p>
					<p>Basta clicar nos itens logo abaixo, escolher o presente desejado e fazer a compra. Ou se preferir, disponibilizamos listas em lojas físicas, como Le Biscuit e Magazan Doca.</p>
					<p>Desde já, nosso sincero agradecimento! ♥</p>
				</TextContainer>
			</MainContent>

			<GiftsContainer>
				<Gifts src="https://sites.icasei.com.br/andreekatiane/pt_br/store/9/2/1" frameborder="0" />

				<a target="_blank" rel="noopener noreferrer" href="https://sites.icasei.com.br/andreekatiane/pt_br/store/9/2/1" className="button">
					Lista de Presentes
				</a>
			</GiftsContainer>
		</>
	)
}