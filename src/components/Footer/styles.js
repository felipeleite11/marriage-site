import styled, { css } from 'styled-components'

const striped = css`
	background: repeating-linear-gradient(
		-45deg,
		#c97d85,
		#c97d85 10px,
		#d99199 10px,
		#d99199 20px
	);
`

export const Footer = styled.footer`
	font-family: "Open Sans", Roboto, Helvetica, sans-serif;
	width: 100%;
	background-color: #d99199;
	color: #132043;
	padding-top: 30px;
	/* ${striped} */
`

export const Content = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	h1 {
		font-size: 30px;
		font-family: "Great Vibes";
		margin-bottom: 30px;
	}
`

export const Copyright = styled.div`
	background-color: #c97d85;
	font-size: 11px;
	padding: 10px 0;
`