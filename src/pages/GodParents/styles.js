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

export const PhotoContainer = styled.div`
	margin: 0 100px;

> div {
	display: grid;
	grid-gap: 0 20px;
	grid-template-columns: 200px auto;
	padding: 18px 0;
	
	@media(max-width: 600px) {
		grid-template-columns: 1fr;
	}

	> span {
		font-size: 14px;
		font-family: 'Raleway', sans-serif;
		text-align: left;
		margin: 20px 50px;
		line-height: 30px;
		grid-column: 2;

		@media(max-width: 600px) {
			margin: 20px 0;
			grid-column: 1;
		}
	}

	> img {
		grid-column: 1/3;
		height: 21px;
		justify-self: center;
		opacity: 0.4;
	}

	> p {
		font-size: 30px;
		grid-column: 1/3;
		margin: 0;
	}
}

@media(max-width: 800px) {
	margin: 0 26px;
}
`
