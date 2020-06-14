import styled from 'styled-components'

export const Navbar = styled.nav`
	width: calc(100% - 40px);
	height: 50px;
	padding: 0 20px;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	> svg {
		display: none;
	}

	@media(max-width: 900px) {
		justify-content: flex-start;
		height: 60px;

		> svg {
			display: block;
		}
	}
`

export const MenuContainer = styled.div`
	width: auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 100%;

	> a {
		padding: 0 12px;
		opacity: 0.7;
		color: #fff;
		font-size: 24px;
		height: 100%;
		display: flex;
		align-items: center;
		transition: all 300ms;
		font-family: "Raleway", sans-serif;
		font-weight: lighter;
		font-size: 14px;

		&:hover {
			border-bottom: solid 2px #fff;
		}

		&.active {
			border-bottom: solid 1px #ddd;
		}
	}

	@media(max-width: 900px) {
		display: none;
	}
`