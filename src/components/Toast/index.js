import React, { useEffect } from 'react'

import { Toast } from './styles'

export default function({ children, type, onClose, timeout = 1200, style }) {

	useEffect(() => {
		setTimeout(() => {
			const toast = document.querySelector('.toast')

			toast.classList.remove('animate__bounceIn')
			toast.classList.add('animate__bounceOut')

			setTimeout(() => {
				onClose()
				toast.classList.remove('animate__bounceOut')
			}, 1000)
		}, timeout)
	}, [onClose, timeout])

	return (
		<Toast type={type} style={style}>
			{children}
		</Toast>
	)
}