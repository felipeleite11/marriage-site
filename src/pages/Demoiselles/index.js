import React from 'react'

import Header from '../../components/Header'
import Photo from '../../components/Photo'

import { MainContent, TextContainer, PhotoContainer } from './styles'

import demoiselle1 from '../../assets/img/DEMOISELLES/Ana carolina Queiroz.jpg'
import demoiselle2 from '../../assets/img/DEMOISELLES/Glenda Meguins.png'
import demoiselle3 from '../../assets/img/DEMOISELLES/Kassia Leticia Dourado.jpg'
import demoiselle4 from '../../assets/img/DEMOISELLES/Layla Oliveira.jpg'
import demoiselle5 from '../../assets/img/DEMOISELLES/Thayanne Monteiro.jpg'
import demoiselle6 from '../../assets/img/DEMOISELLES/Thayara Pereira.jpg'
import mail from '../../assets/love-mail.svg'
import border from '../../assets/img/classic-border.png'

const godParents = [
	{ image: demoiselle1, name: 'Ana Carolina Queiroz', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Sit amet nulla facilisi morbi tempus iaculis. Tellus elementum sagittis vitae et leo. Diam maecenas ultricies mi eget. Semper risus in hendrerit gravida. Eget dolor morbi non arcu risus quis varius quam quisque. Tristique senectus et netus et malesuada fames. Tempor commodo ullamcorper a lacus. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Convallis aenean et tortor at risus viverra adipiscing.' },
	{ image: demoiselle2, name: 'Glenda Meguins', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Sit amet nulla facilisi morbi tempus iaculis. Tellus elementum sagittis vitae et leo. Diam maecenas ultricies mi eget. Semper risus in hendrerit gravida. Eget dolor morbi non arcu risus quis varius quam quisque. Tristique senectus et netus et malesuada fames. Tempor commodo ullamcorper a lacus. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Convallis aenean et tortor at risus viverra adipiscing.' },
	{ image: demoiselle3, name: 'Kássia Letícia Dourado', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Sit amet nulla facilisi morbi tempus iaculis. Tellus elementum sagittis vitae et leo. Diam maecenas ultricies mi eget. Semper risus in hendrerit gravida. Eget dolor morbi non arcu risus quis varius quam quisque. Tristique senectus et netus et malesuada fames. Tempor commodo ullamcorper a lacus. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Convallis aenean et tortor at risus viverra adipiscing.' },
	{ image: demoiselle4, name: 'Layla Oliveira', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Sit amet nulla facilisi morbi tempus iaculis. Tellus elementum sagittis vitae et leo. Diam maecenas ultricies mi eget. Semper risus in hendrerit gravida. Eget dolor morbi non arcu risus quis varius quam quisque. Tristique senectus et netus et malesuada fames. Tempor commodo ullamcorper a lacus. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Convallis aenean et tortor at risus viverra adipiscing.' },
	{ image: demoiselle5, name: 'Thayanne Monteiro', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Sit amet nulla facilisi morbi tempus iaculis. Tellus elementum sagittis vitae et leo. Diam maecenas ultricies mi eget. Semper risus in hendrerit gravida. Eget dolor morbi non arcu risus quis varius quam quisque. Tristique senectus et netus et malesuada fames. Tempor commodo ullamcorper a lacus. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Convallis aenean et tortor at risus viverra adipiscing.' },
	{ image: demoiselle6, name: 'Thayara Pereira', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Sit amet nulla facilisi morbi tempus iaculis. Tellus elementum sagittis vitae et leo. Diam maecenas ultricies mi eget. Semper risus in hendrerit gravida. Eget dolor morbi non arcu risus quis varius quam quisque. Tristique senectus et netus et malesuada fames. Tempor commodo ullamcorper a lacus. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Convallis aenean et tortor at risus viverra adipiscing.' }
]

export default function() {
	return (
		<>
			<Header title="Demoiselles" />

			<MainContent className="animate__animated animate__fadeIn">

				<img src={mail} alt="" className="icon animate__animated animate__fadeInUp animate__delay-1s" />

				<TextContainer className="animate__animated animate__fadeInUp animate__slow">
					<p>...</p>
				</TextContainer>

				<PhotoContainer className="animate__animated animate__fadeIn animate__slow animate__delay-1s">
					{godParents.map(demoiselle => (
						<div key={demoiselle.name}>
							<Photo src={demoiselle.image} alt="" legend={demoiselle.name} />
							<span>{demoiselle.text}</span>
							<img src={border} alt=""/>
						</div>
					))}
				</PhotoContainer>
				
			</MainContent>
		</>
	)
}
