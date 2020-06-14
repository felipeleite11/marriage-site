import styled from 'styled-components'

export const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	padding: 0 100px;
	display: flex;
	align-items: flex-end;

	@media(max-width: 600px) {
		padding: 0 26px;
	}
`