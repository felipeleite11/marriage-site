import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		width: 80px;
		margin-top: 50px;
	}
`

export const Box = styled.div`
	max-width: 315px;
	width: 80%;
	height: 220px;

	form {
		padding: 0;
		display: flex;
		justify-content: center;

		button {
			width: 100%;
			min-width: unset;
		}				
	}
`

export const TextContainer = styled.div`
	margin: 0 100px;

	p {
		text-align: justify;
		font-size: 30px;
	}

	img {
		width: 100px;
	}

	@media(max-width: 600px) {
		margin: 0 26px;
	}
`