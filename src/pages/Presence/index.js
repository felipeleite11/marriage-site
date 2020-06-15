import React, { useState } from 'react'
import MaskedInput from 'react-text-mask'

import Header from '../../components/Header'
import Form from '../../components/Form'
import Input from '../../components/Form/Input'
import Toast from '../../components/Toast'

import { MainContent, TextContainer } from './styles'

import aliancas from '../../assets/aliancas.png'

export default function() {
	const [data, setData] = useState({ name: '', phone: '', email: '' })
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

		document.querySelector('.submit-buttom').disabled = true

		const { name, phone, email } = data

		try {
			let formData = new FormData()
			formData.append('table', 'presence')
			formData.append('name', name)
			formData.append('phone', phone)
			formData.append('email', email)

			await fetch('http://painel.robot.rio.br/marriage.php', {
				method: 'post',
				body: formData,
				mode: 'no-cors'
			})

			setToast({ message: 'Presença confirmada!', type: 'success' })

			setData({ name: '', phone: '', email: '' })

			document.querySelector('input[name=name]').value = ''
			document.querySelector('input[name=phone]').value = ''
			document.querySelector('input[name=email]').value = ''
			document.querySelector('.submit-buttom').disabled = false
		} catch(e) {
			console.log(e)
			setToast({ message: 'Ocorreu um erro! Tente novamente.', type: 'error' })
		}
	}

	return (
		<>
			<Header title="Confirme sua presença" />

			<MainContent className="animate__animated animate__fadeIn">

				<img src={aliancas} alt="" className="icon animate__animated animate__fadeInUp animate__delay-1s" />

				<TextContainer className="animate__animated animate__fadeInUp animate__slow">
					<p style={{ textAlign: 'center' }}>...</p>
					<p>Preencha abaixo para sabermos se você vai ao nosso casamento.</p>
				</TextContainer>

				<Form>
					<Input name="name" onChange={handleChangeInput} value={data.name} placeholder="Seu nome" />
					<MaskedInput name="phone" onChange={handleChangeInput} value={data.phone} placeholder="Whatsapp para contato" mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} />
					<Input name="email" onChange={handleChangeInput} value={data.email} placeholder="E-mail para contato" />

					<button type="submit" className="submit-buttom" onClick={handleSubmit}>Confirmar</button>
				</Form>

				{toast && <Toast type={toast.type} onClose={() => setToast(null)}>{toast.message}</Toast>}

			</MainContent>
		</>
	)
}