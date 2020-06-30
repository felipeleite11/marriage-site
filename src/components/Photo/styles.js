import styled from 'styled-components'

export const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	border-radius: 10px;
	transition: 400ms;

	img {
		border-radius: ${props => props.rounded ? '50%' : '20%'};
		width: 200px;
	}

	span {
		font-size: 26px;
		margin-top: 20px;
	}

	&:hover {
		transform: scale(1.05);

		span {
			font-weight: 800;
		}
	}
`