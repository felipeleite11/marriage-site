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
`