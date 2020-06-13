import React from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'

import { Navbar, MenuContainer } from './styles'

export default function () {
	const options = [
		{ label: 'Home', to: '/' },
		{ label: 'Os noivos', to: '/noivos' },
		{ label: 'Local', to: '/local' },
		{ label: 'Presentes', to: '/presentes' },
		{ label: 'Confirme sua presença', to: '/presenca' },
		{ label: 'Padrinhos', to: '/padrinhos' },
		{ label: 'Demoiselles', to: '/demoiselles' },
		{ label: 'Aos pais', to: '/pais' },
		{ label: 'Recados', to: '/recados' }
	]

	return (
		<Navbar>
			<FiMenu size={30} color="#fff" className="animate__animated animate__fadeInLeft animate__delay-3s" />

			<MenuContainer>
				{options.map(option => (
					<Link key={option.label} to={option.to}>
						{option.label}
					</Link>
				))}
			</MenuContainer>
		</Navbar>
	)
}