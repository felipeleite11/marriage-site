import React, { useEffect, useState } from 'react'

import { Menu } from './styles'

import drink from '../../assets/drink.png'
import aliancas from '../../assets/aliancas.png'

export default function({ children, isOpen = false }) {
	const [optionsVisible, setOptionsVisible] = useState(false)
	const [intro, setIntro] = useState(true)

	useEffect(() => {
		setTimeout(() => { 
			setIntro(false)

			setTimeout(() => {
				setOptionsVisible(true)
			}, 1200)
		}, 3000)
	}, [])

	return (
		<Menu isOpen={isOpen} className={`mobile-menu animate__animated ${!intro ? !isOpen ? 'animate__slideOutLeft' : 'animate__slideInLeft' : ''}`}>
			{optionsVisible ? (
				<>
					<img src={drink} alt="" />

					{children}

					<p>...</p>
				</>
			) : (
				<>
					<img src={aliancas} alt="" className="animate__animated animate__jackInTheBox animate__slow" />
					<p className="loading animate__animated animate__pulse animate__slow">Carregando...</p>
				</>
			)}
      	</Menu>
	)
}