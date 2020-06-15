import styled, { css } from 'styled-components'

function getStyle(type) {
	switch(type) {
		case 'success':
			return css`
				background: #4caf50;
				color: #fff;
			`
		case 'error':
			return css`
				background: #f44336;
				color: #fff;
			`
		default: 
			return css`
				background: #fff;
				color: #424242;
			`
	}
}

export const Toast = styled.p.attrs({
	className: 'toast animate__animated animate__bounceIn'
})`
	padding: 16px;
	font-family: 'Raleway', sans-serif;
	border-radius: 8px;

	${props => getStyle(props.type)}
`