import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Header from '../../components/Header'
import Table from '../../components/Table'

import clipboard from '../../assets/clipboard.png'

import { MainContent, TextContainer } from './styles'

export default function() {
	const [presences, setPresences] = useState(null)
	const [scraps, setScraps] = useState(null)

	const history = useHistory()

	useEffect(() => {
		const token = sessionStorage.getItem('marriage-token')

		if(!token) {
			history.push('/login')
		}
	})

	useEffect(() => {
		fetch('https://painel.robot.rio.br/marriage.php?table=presence')
		.then(response => response.json())
		.then(response => {
			setPresences(response)
		})
	}, [])

	useEffect(() => {
		fetch('https://painel.robot.rio.br/marriage.php?table=scraps')
		.then(response => response.json())
		.then(response => {
			setScraps(response)
		})
	}, [])

	return (
		<>
			<Header title="Recados e Presenças" />

			<MainContent className="animate__animated animate__fadeIn">

				<img src={clipboard} alt="" className="icon animate__animated animate__fadeInUp animate__delay-1s" />

				<TextContainer className="animate__animated animate__fadeInUp animate__slow">
					<p>...</p>
				</TextContainer>

				<TextContainer className="animate__animated animate__fadeInUp animate__slow">
					<p className="title">
						Total em presentes
						<span>(atualizado em 22/09/2020)</span>
					</p>
					<p>
						<b>R$ 1.710,90</b>
						<span>Apenas pagamentos confirmados.</span>
					</p>
				</TextContainer>
			
				<Table 
					title="Presenças confirmadas"
					headers={[
						{ name: 'Nome', prop: 'name' }, 
						{ name: 'Fone', prop : 'phone' }, 
						{ name: 'E-mail', prop: 'email' }
					]}
					hidableColumnIndex={3}
					lines={presences}
					footer
				/>

				<Table 
					title="Recados"
					headers={[
						{ name: 'Nome', prop: 'name' }, 
						{ name: 'Recado', prop : 'message' },
					]}
					lines={scraps}
				/>
				
			</MainContent>
		</>
	)
}