import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Header from '../../components/Header'
import Form from '../../components/Form'
import Input from '../../components/Form/Input'
import Toast from '../../components/Toast'

import { Container, Box, TextContainer } from './styles'

import key from '../../assets/love-key.svg'

export default function() {
	const [password, setPassword] = useState('')
	const [toast, setToast] = useState(null)

	const history = useHistory()

	function handleSubmit(event) {
		event.preventDefault()

		if(password !== 'casal30') {
			setToast({ message: 'Senha incorreta!', type: 'error' })
		}
		else {
			sessionStorage.setItem('marriage-token', new Date().getTime())
			history.push('/informacoes')
		}
	}

	return (
		<>
			<Header title="Área restrita" />

			<Container>

				<img src={key} alt="" />

				<TextContainer className="animate__animated animate__fadeInUp animate__slow">
					<p style={{ textAlign: 'center' }}>...</p>
				</TextContainer>

				<h1>Olá, esta é uma área exclusiva para o casal.</h1>

				<Box>
					<Form>
						<Input name="password" type="password" onChange={event => setPassword(event.target.value)} value={password} placeholder="Senha de acesso"  />
						<button type="submit" onClick={handleSubmit}>Entrar</button>
						
						{toast && <Toast 
							type={toast.type} 
							onClose={() => setToast(null)}
							timeout={800}
							style={{ width: '100%' }}
						>
								{toast.message}
							</Toast>
						}
					</Form>
				</Box>
			</Container>
		</>
	)
}