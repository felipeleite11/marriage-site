import React, { useState } from 'react'

import Header from '../../components/Header'
import Form from '../../components/Form'
import Input from '../../components/Form/Input'
import Toast from '../../components/Toast'

import { MainContent, TextContainer } from './styles'

import baloon from '../../assets/love-baloon.svg'

export default function() {
	const [data, setData] = useState({ name: '', message: '' })
	const [toast, setToast] = useState(null)

	function handleChangeInput(event) {
		const { name, value } = event.target

		setData({
			...data,
			[name]: value
		})
	}

	async function handleSubmit(event) {
		event.preventDefault()

		document.querySelector('.submit-button').disabled = true

		const { name, message } = data

		try {
			let formData = new FormData()
			formData.append('table', 'scraps')
			formData.append('name', name)
			formData.append('message', message)

			await fetch('https://painel.robot.rio.br/marriage.php', {
				method: 'post',
				body: formData,
				mode: 'no-cors'
			})

			setToast({ message: 'Recado enviado!', type: 'success' })

			setData({ name: '', message: '' })

			document.querySelector('input[name=name]').value = ''
			document.querySelector('textarea[name=message]').value = ''
			document.querySelector('.submit-button').disabled = false
		} catch(e) {
			setToast({ message: 'Ocorreu um erro! Tente novamente.', type: 'error' })
		}
	}

	return (
		<>
			<Header title="Recados para o casal" />

			<MainContent className="animate__animated animate__fadeIn">

				<img src={baloon} alt="" className="icon animate__animated animate__fadeInUp animate__delay-1s" />
			
				<TextContainer className="animate__animated animate__fadeInUp animate__slow">
					<p style={{ textAlign: 'center' }}>...</p>
					<p>Aqui você pode deixar um recadinho carinhoso para o casal.</p>
				</TextContainer>

				<Form>
					<Input name="name" onChange={handleChangeInput} value={data.name} placeholder="Seu nome" />
					<Input name="message" multiline onChange={handleChangeInput} value={data.message} placeholder="Sua mensagem" />

					<button type="submit" className="submit-button" onClick={handleSubmit}>Enviar</button>
				</Form>

				{toast && <Toast type={toast.type} onClose={() => setToast(null)}>{toast.message}</Toast>}

			</MainContent>
		</>
	)
}