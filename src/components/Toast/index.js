import React, { useEffect } from 'react'

import { Toast } from './styles'

export default function({ children, type, onClose }) {

	useEffect(() => {
		setTimeout(() => {
			const toast = document.querySelector('.toast')

			toast.classList.remove('animate__bounceIn')
			toast.classList.add('animate__bounceOut')

			setTimeout(() => {
				onClose()
				toast.classList.remove('animate__bounceOut')
			}, 1000)
		}, 3000)
	}, [onClose])

	return (
		<Toast type={type}>
			{children}
		</Toast>
	)
}