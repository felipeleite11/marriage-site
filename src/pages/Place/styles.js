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
		margin: 0 26px;
	}
`

export const ClothesContainer = styled.div`
	margin: 0 100px;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		margin-right: 30px;
	}

	p {
		text-align: left;

		&.default-font {
			font-family: "Raleway", sans-serif;
			font-size: 16px;
		}
	}

	@media(max-width: 600px) {
		flex-direction: column;
		margin: 0 26px;

		img {
			margin-right: 0;
		}
	}
`

export const MapContainer = styled.div`
	margin: 0 100px 50px;

	@media(max-width: 600px) {
		margin: 0 0 30px;
	}
`