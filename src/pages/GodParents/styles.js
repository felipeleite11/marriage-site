import styled from 'styled-components'

export const MainContent = styled.main`
	width: 100%;
	color: #424242;
	padding-bottom: 50px;
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
			margin-top: 40px;
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
		margin: 0 26px;
	}
`

export const PhotoContainer = styled.div`
	display: grid;
	grid-gap: 20px;
	grid-template-columns: repeat(4, 1fr);

	@media(max-width: 1000px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media(max-width: 800px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media(max-width: 600px) {
		grid-template-columns: 1fr;
	}
`
