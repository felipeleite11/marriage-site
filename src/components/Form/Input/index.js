import React from 'react'

import { Input, Textarea } from './styles'

export default function({ name, onChange, multiline, placeholder, type = 'text' }) {
	return (
		<>
			{multiline ? (
				<Textarea name={name} onChange={onChange} placeholder={placeholder} />
			) : (
				<Input name={name} onChange={onChange} placeholder={placeholder} type={type} />
			)}
		</>
	)
}