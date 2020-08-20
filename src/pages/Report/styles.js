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

	table {
		thead tr th:first-child {
			min-width: 150px;

			@media(max-width: 600px) {
				min-width: 100px;
			}
		}
	}
`

export const TextContainer = styled.div`
	margin: 0 100px;

	p {
		text-align: justify;
		font-size: 30px;
		font-family: 'Raleway', sans-serif;
		font-weight: lighter;
		font-size: 34px;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;

		&.title > span {
			font-size: 16px;
		}

		&.title > a {
			color: #0084FE;
		}

		&.title + p {
			font-size: 14px;

			b {
				margin-bottom: 10px;
				font-weight: 700;
				font-size: 20px;
			}
		}
	}

	img {
		width: 100px;
	}

	@media(max-width: 600px) {
		margin: 0 26px;
	}
`