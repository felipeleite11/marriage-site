import styled from 'styled-components'

export const BlockQuote = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`

export const Quote = styled.p`
	font-size: 22px;
	font-family: "Raleway", sans-serif;
	display: flex;
	justify-content: space-between;
	width: 100%;
	max-width: 320px;
	margin-bottom: 0;

	span {
		width: 20px;
		font-size: 60px;
		font-family: 'Times New Roman', Times, serif;
		margin-top: -20px;
	}

	+ p {
		font-size: 16px;
		font-family: "Raleway", sans-serif;
		margin-bottom: 50px;
	}
`