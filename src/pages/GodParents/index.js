import React from 'react'

import Header from '../../components/Header'
import Photo from '../../components/Photo'

import { MainContent, TextContainer, PhotoContainer } from './styles'

import padrinho1 from '../../assets/img/PADRINHOS/Andrey Correa.jpg'
import padrinho2 from '../../assets/img/PADRINHOS/Christopher Yentl.jpg'
import padrinho3 from '../../assets/img/PADRINHOS/Cinthia Santana.png'
import padrinho4 from '../../assets/img/PADRINHOS/Helaiane Ramos.png'
import padrinho5 from '../../assets/img/PADRINHOS/Lilian Barroso.png'
import padrinho6 from '../../assets/img/PADRINHOS/Regianne de Deus.jpg'
import padrinho7 from '../../assets/img/PADRINHOS/Silas Nascimento.jpg'
import padrinho8 from '../../assets/img/PADRINHOS/Wellington Oliveira.jpg'
import cake from '../../assets/cake.png'
import border from '../../assets/img/classic-border.png'

const godParents = [
	{ image: padrinho1, name: 'Andrey Correa', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Sit amet nulla facilisi morbi tempus iaculis. Tellus elementum sagittis vitae et leo. Diam maecenas ultricies mi eget. Semper risus in hendrerit gravida. Eget dolor morbi non arcu risus quis varius quam quisque. Tristique senectus et netus et malesuada fames. Tempor commodo ullamcorper a lacus. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Convallis aenean et tortor at risus viverra adipiscing.' },
	{ image: padrinho2, name: 'Christopher Yentl', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Sit amet nulla facilisi morbi tempus iaculis. Tellus elementum sagittis vitae et leo. Diam maecenas ultricies mi eget. Semper risus in hendrerit gravida. Eget dolor morbi non arcu risus quis varius quam quisque. Tristique senectus et netus et malesuada fames. Tempor commodo ullamcorper a lacus. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Convallis aenean et tortor at risus viverra adipiscing.' },
	{ image: padrinho3, name: 'Cinthia Santana', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Sit amet nulla facilisi morbi tempus iaculis. Tellus elementum sagittis vitae et leo. Diam maecenas ultricies mi eget. Semper risus in hendrerit gravida. Eget dolor morbi non arcu risus quis varius quam quisque. Tristique senectus et netus et malesuada fames. Tempor commodo ullamcorper a lacus. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Convallis aenean et tortor at risus viverra adipiscing.' },
	{ image: padrinho4, name: 'Helaiane Ramos', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Sit amet nulla facilisi morbi tempus iaculis. Tellus elementum sagittis vitae et leo. Diam maecenas ultricies mi eget. Semper risus in hendrerit gravida. Eget dolor morbi non arcu risus quis varius quam quisque. Tristique senectus et netus et malesuada fames. Tempor commodo ullamcorper a lacus. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Convallis aenean et tortor at risus viverra adipiscing.' },
	{ image: padrinho5, name: 'Lilian Barroso', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Sit amet nulla facilisi morbi tempus iaculis. Tellus elementum sagittis vitae et leo. Diam maecenas ultricies mi eget. Semper risus in hendrerit gravida. Eget dolor morbi non arcu risus quis varius quam quisque. Tristique senectus et netus et malesuada fames. Tempor commodo ullamcorper a lacus. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Convallis aenean et tortor at risus viverra adipiscing.' },
	{ image: padrinho6, name: 'Regianne de Deus', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Sit amet nulla facilisi morbi tempus iaculis. Tellus elementum sagittis vitae et leo. Diam maecenas ultricies mi eget. Semper risus in hendrerit gravida. Eget dolor morbi non arcu risus quis varius quam quisque. Tristique senectus et netus et malesuada fames. Tempor commodo ullamcorper a lacus. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Convallis aenean et tortor at risus viverra adipiscing.' },
	{ image: padrinho7, name: 'Silas Nascimento', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Sit amet nulla facilisi morbi tempus iaculis. Tellus elementum sagittis vitae et leo. Diam maecenas ultricies mi eget. Semper risus in hendrerit gravida. Eget dolor morbi non arcu risus quis varius quam quisque. Tristique senectus et netus et malesuada fames. Tempor commodo ullamcorper a lacus. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Convallis aenean et tortor at risus viverra adipiscing.' },
	{ image: padrinho8, name: 'Wellington Oliveira', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Sit amet nulla facilisi morbi tempus iaculis. Tellus elementum sagittis vitae et leo. Diam maecenas ultricies mi eget. Semper risus in hendrerit gravida. Eget dolor morbi non arcu risus quis varius quam quisque. Tristique senectus et netus et malesuada fames. Tempor commodo ullamcorper a lacus. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Convallis aenean et tortor at risus viverra adipiscing.' }
]

export default function() {
	return (
		<>
			<Header title="Padrinhos" />

			<MainContent className="animate__animated animate__fadeIn">

				<img src={cake} alt="" className="icon animate__animated animate__fadeInUp animate__delay-1s" />

				<TextContainer className="animate__animated animate__fadeInUp animate__slow">
					<p style={{ textAlign: 'center' }}>...</p>
					<p>Aos nossos queridos padrinhos,</p>
					<p>A escolha dos padrinhos foi, sem dúvida, uma das missões mais difíceis. São muitas as pessoas que amamos e que queríamos ao nosso lado nesse momento.</p>
					<p>Têm pessoas que não apenas participam das nossas vidas, mas também às completam. Existem amigos que são mais do que amigos, são irmãos... E têm irmãos que são muito mais do que irmãos, são anjos que Deus nos enviou para nos alegrarem e dividirem conosco cada momento de nossas vidas...</p>
					<p>É uma emoção única e indescritível tê-los ao nosso lado e poder partilhar com vocês toda felicidade dessa nova etapa em nossas vidas: nosso casamento! Por isso, desejamos tê-los como testemunhas do nosso sonho e do nosso amor!</p>
				</TextContainer>

				<PhotoContainer className="animate__animated animate__fadeIn animate__slow animate__delay-1s">
					{godParents.map(parent => (
						<div key={parent.name}>
							<Photo src={parent.image} alt="" legend={parent.name} />
							<span>{parent.text}</span>
							<img src={border} alt=""/>
						</div>
					))}
				</PhotoContainer>
				
			</MainContent>
		</>
	)
}
