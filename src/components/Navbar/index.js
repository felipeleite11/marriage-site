import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiChevronLeft } from 'react-icons/fi'

import { Navbar, MenuContainer } from './styles'

import MobileMenu from '../MobileMenu'

export default function () {
	const [menuOpen, setMenuOpen] = useState(false)

	const token = sessionStorage.getItem('marriage-token')

	const options = [
		{ label: 'Home', to: '/' },
		{ label: 'Os noivos', to: '/noivos' },
		{ label: 'Local', to: '/local' },
		{ label: 'Presentes', to: '/presentes' },
		{ label: 'Confirme sua presença', to: '/presenca' },
		{ label: 'Pajens e Daminhas', to: '/pajens_daminhas' },
		{ label: 'Padrinhos', to: '/padrinhos' },
		{ label: 'Demoiselles', to: '/demoiselles' },
		{ label: 'Aos pais', to: '/pais' },
		{ label: 'Recados', to: '/recados' },
		{ label: token ? 'Sair' : 'Login', to: '/login' }
	]

	const { pathname: currentRoute } = useLocation()

	function handleLoginClick() {
		if(token) {
			sessionStorage.removeItem('marriage-token')
		}
	}

	return (
		<Navbar>
			{React.createElement(menuOpen ? FiChevronLeft : FiMenu, {
				style: { zIndex: 2, cursor: 'pointer' },
				onClick: () => setMenuOpen(!menuOpen),
				size: 30,
				color: (menuOpen ? '#424242' : '#fff')
			}, null)}
			
			<MobileMenu isOpen={menuOpen}>
				{options.map(option => (
					<Link key={option.label} to={option.to} onClick={() => setMenuOpen(false)}>
						{option.label}
					</Link>
				))}
			</MobileMenu>

			<MenuContainer>
				{options.map(option => (
					<Link 
						key={option.label} 
						to={option.to}
						onClick={handleLoginClick} 
						className={`hvr-sweep-to-top ${option.to === currentRoute ? 'active' : ''}`}
					>
						{option.label}
					</Link>
				))}
			</MenuContainer>
		</Navbar>
	)
}