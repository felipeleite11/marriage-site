import styled from 'styled-components'

export const Menu = styled.div`
	background-color: #fff;
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	z-index: 1;
	padding: 50px 0;
	display: flex; 
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	height: fit-content;

	img {
		width: 120px;
		margin-bottom: 20px;
	}
	
	a {
		font-size: 26px;
		padding: 10px 16px;
		width: 100%;
		color: #888;

		&:hover {
			background-color: #ddd;
		}
	}

	p {
		font-size: 30px;
		margin: 0;

		&.loading {
			color: #aaa;
		}
	}
`