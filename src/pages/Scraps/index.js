import React, { useState } from 'react'

import Header from '../../components/Header'
import Form from '../../components/Form'
import Input from '../../components/Form/Input'

import { MainContent, TextContainer } from './styles'

import baloon from '../../assets/love-baloon.svg'

export default function() {
	const [data, setData] = useState({ name: '', message: '' })

	function handleChangeInput(event) {
		const { name, value } = event.target

		setData({
			...data,
			[name]: value
		})
	}

	function handleSubmit(event) {
		event.preventDefault()

		console.log(data)

		alert('Ok')

		setData({ name: '', message: '' })

		document.querySelector('input[name=name]').value = ''
		document.querySelector('textarea[name=message]').value = ''
	}

	return (
		<>
			<Header title="Recados para o casal" />

			<MainContent className="animate__animated animate__fadeIn">

				<img src={baloon} alt="" className="icon" />
			
				<TextContainer className="animate__animated animate__fadeInUp animate__slow">
					<p style={{ textAlign: 'center' }}>...</p>
					<p>Aqui você pode deixar um recadinho carinhoso para o casal.</p>
				</TextContainer>

				<Form>
					<Input name="name" onChange={handleChangeInput} value={data.name} placeholder="Seu nome" />
					<Input name="message" multiline onChange={handleChangeInput} value={data.message} placeholder="Sua mensagem" />

					<button type="submit" onClick={handleSubmit}>Enviar</button>
				</Form>

			</MainContent>
		</>
	)
}