import styled, { keyframes } from 'styled-components'

import backgroundImage from '../../assets/img/background-home.jpg'

const slide = keyframes`
	from {
		background-position: 25% 0%;
	}
	to {
		background-position: 75% 0%;
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
	background-image: url(${backgroundImage});
	background-repeat: no-repeat;
	background-position: top left;
	background-size: 108% auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: -60px;
	animation: ${slide} ${window.innerWidth > 800 ? 10 : 15}s linear alternate infinite;

	@media(max-width: 800px) {
		background-size: cover;
	}
`

export const HeaderContent = styled.div`
	color: #fff;
	min-height: 400px;
	padding: 100px 0 50px 0;
	width: 90%;

	@media(max-width: 600px) {
		width: 100%;
	}
`

export const Title = styled.h1`
	font-family: "Chalisa Octavia", Helvetica, sans-serif;
	font-size: 50px;
	margin: 50px 0;
	display: flex;
	flex-direction: column;
	padding: 40px 0;
	width: 100%;
	background-image: linear-gradient(to right, #0001, #f003, #0001);

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