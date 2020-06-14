import styled from 'styled-components'

export const MainContent = styled.main`
	width: 100%;
	color: #424242;
	padding: 30px 0 50px 0;
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-family: "Raleway", sans-serif;
		font-weight: lighter;
		font-size: 34px;
		margin-bottom: 20px;
	}

	> img {
		width: 65%;
		border-radius: 10%;

		&.icon {
			width: 100px;
			margin-bottom: 30px;
		}

		@media(max-width: 600px) {
			width: 100%;
			border-radius: 0;
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
		margin: 50px 26px 0;
	}
`

export const PhotoContainer = styled.div`
	display: grid;
	grid-gap: 7px;
	grid-template-columns: 1fr 1fr;

	img {
		border-radius: ${props => props.rounded ? '50%' : '20%'};
		width: 200px;
	}
`

export const LargeText = styled.h2`
	font-size: 30px;
`