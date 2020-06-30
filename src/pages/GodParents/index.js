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
	{ image: padrinho1, name: 'Andrey Correa', text: 'Um guerreiro, que, mesmo no início cometendo erros, como todos nós, se reergueu e hoje mostra o quanto alguém é capaz de mudar, crescer e ser uma versão melhor do que antes era. Meu irmão em todos os sentidos, me ensinou a ter coragem no meio das dificuldades e acreditar que no final, se a gente se empenhar e colocar Deus na frente, tudo dará certo no final. Obrigado pelas lições, obrigado pelo tempo que me doou e tudo que ainda hoje se dispõe a sacrificar por mim. Eu te amo mano.' },
	{ image: padrinho2, name: 'Christopher Yentl', text: 'Teu nome do meio deveria “excêntrico”, e pra mim é o faz a tua presença ser tão marcante. Uma pessoa que naturalmente quer ser amigo de todos, amar a todos e ser bem quisto por todo mundo, isso é a qualidade de alguém que na essência é incomum nesse mundo tão egocêntrico. E nessa conjuntura foste aquele que fez a primeira conexão entre mim e a pessoa que amo e vou me casar, nesse desfecho, você foi o amigo que se tornou a ponte pra que esse sonho fosse realidade.' },
	{ image: padrinho3, name: 'Cinthia Santana', text: 'Cinthia, a pessoa que mais orou por nós desde antes mesmo de sermos um casal. Amiga, te adimiro pela tua fé enorme e inabalável... pela tua história de vida e por seres tão dedicada em tudo que faz! Em meio a tantas dificuldades que André e eu enfrentamos no início do relacionamento tu foi uma conselheira e intercessora incanssável. Desde que chegaste na minha vida eu pude ver que o propósito de Deus na nossa amizade é grandioso. E hoje sinto uma enorme gratidão por cada vez que estavas disponível e tão presente na minha vida. Nada mais justo que te ter ao nosso lado em posição de honra nesse dia em que veremos as nossas orações serem atendidas por Deus' },
	{ image: padrinho4, name: 'Helaiane Ramos', text: 'Helaiane é uma amiga verdadeira e preocupada com o nosso bem estar, tem um dos corações mais dispostos a aprender que conheço. Ela me fez aprender a cuidar e discipular, alguém tão parecida comigo em tantos aspéctos e ao mesmo tempo tão diferente em outros e isso faz a gente crescer ainda mais uma com a outra. Ela foi nosso cupído desde o início. uma das primeiras a saber que a noiva estava interessada pelo menino da mídia. Ajudou a saber mais sobre aquele rapaz que não havíamos notado antes e também nas primeiras aproximações de amizade entre os dois. Sabemos que ela estará sempre disposta a nos ajudar como fez desde o início!' },
	{ image: padrinho5, name: 'Lilian Barroso', text: 'Lilian é uma mulher adimirável em todos os sentidos, linda por dentro e por fora. Fomos nomeadas no concurso juntas, quando foi preciso mudamos de escola juntas, ela é um dos presentes que a Semec me deu. Uma amiga que topa qualquer coisa pra ver a felicidade da gente. Estava ao meu lado nas minhas piores e melhores fases. Viu minha mudança de perto durante o período de conversão e nunca me julgou, pelo contrário sempre me deu todo apoio! Mais que torcer ela acompanhou de perto cada fase do nosso relacionamento ajudando pra que hoje tudo fosse real!' },
	{ image: padrinho6, name: 'Regianne de Deus', text: 'Nanni, a irmã que nasceu na mesma barriga e que literalmente estava desde o nascimento da noiva! A mais velha que nesse momento está vibrando tanto com a felicidade dela.. Vivemos cada etapa da vida grudadas... da pré escola até a pós graduação... brigávamos feito cão e gato, mas sempre que uma precisava a outra estava lá pra defender e ajudar no que quer que fosse. Hoje mais do que nunca ela é uma das maiores incetivadoras pra que essa nova família se construa e cresça cada vez mais em amor e em quantidade!' },
	{ image: padrinho7, name: 'Silas Nascimento', text: 'A melhor descrição que eu poderia resumir o Silas é AMIGO. Amigo que compartilhou as primeiras responsabilidades dentro de um ministério cristão, o sonho de ter uma banda, tocar um instrumento, mesmo eu não sendo tão bom musico assim (kkkk). A maturidade veio, a família veio, as contas vieram, e outras responsabilidades também, entretanto a parceria permanece firme e forte como sempre foi. Obrigado meu amigo, sua persistência e aptidão de acreditar que tudo que a gente começar dará certo, é o que me fez acreditar no meu talento.' },
	{ image: padrinho8, name: 'Wellington Oliveira', text: 'As estradas que percorremos durante a vida as vezes nos separam de muitos que cruzam nosso caminho, com a gente não foi diferente, porém nada me deixa mais satisfeito de dizer que eu tenho um parceiro que sempre que a gente se encontra, a sensação de ter uma amizade pura, é o que retrata o nosso vínculo. Apesar de termos o sobrenome Oliveira, somos irmãos de mães diferentes, conte comigo sempre, porque eu sei que no que eu precisar, eu posso contar contigo. Obrigado tudo meu irmão.' }
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
