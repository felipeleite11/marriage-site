import styled from 'styled-components'

export const MainContent = styled.main`
	width: 100%;
	color: #424242;
	padding-top: 50px;

	> img {
		border-radius: 10%;

		&.icon {
			width: 100px;
		}

		@media(max-width: 600px) {
			width: 100%;
			border-radius: 0;
		}
	}
`

export const TextContainer = styled.div`
	margin: 0 100px 60px;

	p {
		text-align: justify;
		font-size: 30px;
	}

	@media(max-width: 600px) {
		margin: 0 26px;
	}
`

export const GiftsContainer = styled.div`
	width: 100%;
	height: 630px;
	overflow-y: auto;
	overflow-x: hidden;
	display: flex;
	justify-content: center;

	.button {
		display: none;

		svg {
			margin-left: 6px;
		}
	}

	@media(max-width: 600px) {
		height: 100px;

		.button {
			display: flex;
			justify-content: center;
			font-size: 24px !important;
		}
	}
`

export const Gifts = styled.iframe`
	width: calc(100% + 20px);
	height: 98.2%;

	@media(max-width: 600px) {
		display: none;
	}
`