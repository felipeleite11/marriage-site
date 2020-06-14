import React from 'react'

import { Header, HeaderContent, Title } from './styles'

export default function({ title }) {
	return (
		<Header>
			<HeaderContent>
				<Title className="animate__animated animate__fadeIn animate__slow">
					{title}
				</Title>
			</HeaderContent>
		</Header>
	)
}