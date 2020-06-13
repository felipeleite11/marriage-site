import styled, { keyframes } from 'styled-components'

import backgroundImage from '../../assets/img/1.png'

const slide = keyframes`
	from {
		background-position: top left;
	}
	to {
		background-position: top right;
	}
`

const pulse = keyframes`
	from {
		transform: scale(0.8);
	}
	to {
		transform: scale(1.1);
	}
`

export const Header = styled.header`
	background-blend-mode: saturation;
	background-image: linear-gradient(black, black), url(${backgroundImage});
	background-repeat: no-repeat;
	background-position: top left;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	animation: ${slide} 15s linear alternate infinite;
	margin-top: -60px;
`

export const HeaderContent = styled.div`
	color: #fff;
	min-height: 400px;
	padding: 100px 0 50px 0;
	width: 90%;
`

export const Title = styled.h1`
	font-family: "Chalisa Octavia", Helvetica, sans-serif;
	font-size: 50px;
	margin: 50px 0;
	display: flex;
	flex-direction: column;
	border-top: solid 1px #fff;
	border-bottom: solid 1px #fff;
	padding: 40px 0;
	width: 100%;

	img {
		height: 40px;
		animation: ${pulse} 2s linear alternate infinite;
		margin-top: -14px;
	}
`

export const RemaingDays = styled.span`
	font-size: 25px;
	font-weight: 400;
`

export const MarriageDate = styled.span`
	font-size: 15px;
	font-weight: 400;
	display: flex;
	flex-direction: column;
	align-items: center;

	svg {
		margin-bottom: 10px;
	}
`

export const MainContent = styled.main`
	width: 100%;
	color: #424242;
	padding: 30px 0 50px 0;

	h1 {
		font-family: "Raleway", sans-serif;
		font-weight: lighter;
		font-size: 34px;
		margin-bottom: 20px;
	}

	> img {
		width: 100px;
	}
`

export const TextContainer = styled.div`
	margin: 50px 100px 0;

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