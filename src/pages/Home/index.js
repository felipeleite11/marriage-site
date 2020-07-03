import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { GoCalendar } from 'react-icons/go'

import { Header, HeaderContent, Title, RemaingDays, MarriageDate, MainContent, TextContainer } from './styles'

import heart from '../../assets/heart.svg'
import heartHand from '../../assets/heart-hands.svg'
import love from '../../assets/love.svg'

import Slider from '../../components/Slider'

export default function () {
	const marriageDay = 2
	const marriageMonth = 9
	const marriageDate = new Date(2020, marriageMonth, marriageDay) 

	const [remaingDays, setRemaingDays] = useState(0)

	useEffect(() => {
		const oneDayDuration = 1000 * 60 * 60 * 24
		
		const today = new Date()
		
		if (today.getMonth() === marriageMonth && today.getDate() > marriageDay) {
			marriageDate.setFullYear(marriageDate.getFullYear() + 1) 
		}
		
		const result = Math.round(marriageDate.getTime() - today.getTime()) / oneDayDuration + 1
		
		setRemaingDays(result.toFixed(0))
	}, [marriageDate])

	return (
		<>
			<Header>
				<HeaderContent>
					{remaingDays > 0 && (
						<RemaingDays className="animate__animated animate__fadeIn animate__delay-1s">
							Falta{remaingDays > 1 && 'm'} {remaingDays} dia{remaingDays > 1 && 's'}
						</RemaingDays>
					)}

					<Title className="animate__animated animate__fadeIn animate__slow">
						Katiane 
						<img src={heart} alt=""/>
						André
					</Title>

					<MarriageDate className="animate__animated animate__fadeIn animate__delay-1s">
						<GoCalendar size={30} />
						{format(marriageDate, 'dd/MM/yyyy')}
					</MarriageDate>

				</HeaderContent>
			</Header>

			<MainContent className="animate__animated animate__fadeIn animate__delay-2s">
				<h1>Sejam bem-vindos, familiares e amigos queridos!</h1>

				<img src={heartHand} alt="" className="animate__animated animate__fadeInUp animate__delay-1s" />

				<Slider />

				<TextContainer>
					<p>Sintam-se abraçados e aproveitem para conhecer mais sobre a nossa história, além de se inteirar sobre os preparativos do nosso grande dia.</p>
					<p></p>
					<p>Aguardamos vocês!!!</p>
					<p>Até lá!</p>

					<img src={love} alt="" />
				</TextContainer>

			</MainContent>
		</>
	)
}