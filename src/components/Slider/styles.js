import styled from 'styled-components'

export const SlidesContainer = styled.div`
	width: 100%;
	height: 500px;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	display: flex;
	align-items: center;
	position: relative;

	> .slide {
		position: relative;
		min-width: 100%;
		height: 500px;
		transition: 800ms;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 50px;
		font-family: "Raleway";
		background-size: cover;
		background-position: center;
	}

	> button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 10%;
		min-width: 72px;
		height: 500px;
		background: none;
		outline: none;
		transition: 300ms;

		svg {
			background-color: transparent;
		}

		&:hover {
			background-color: #fff3;

			svg {
				border-radius: 50%;
				background-color: #fff;
				padding: 12px;
				cursor: pointer;
			}
		}

		&#go-left {
			left: 0;
		}

		&#go-right {
			right: 0;
		}
	}
`

