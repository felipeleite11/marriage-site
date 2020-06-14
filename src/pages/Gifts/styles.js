import styled from 'styled-components'

export const MainContent = styled.main`
	width: 100%;
	color: #424242;
`

export const TextContainer = styled.div`
	margin: 60px 100px;

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
`

export const Gifts = styled.iframe`
	width: calc(100% + 20px);
	height: 98.2%;
`