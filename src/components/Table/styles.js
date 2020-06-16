import styled, { keyframes } from 'styled-components'

const flash = keyframes`
	from {
		opacity: 1;
	}
	to {
		opacity: 0.2;
	}
`

export const TableContainer = styled.div`
	width: 90%;
	font-family: 'Raleway', sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;

	h1 {
		font-size: 36px;
	}

	.preload-text {
		font-size: 24px;
		animation: ${flash} 0.8s alternate infinite;
	}
`

export const Table = styled.table`
	width: 100%;
	max-width: 1000px;

	thead {
		th {
			border-right: solid 1px #ddd;
			border-bottom: solid 3px #ddd;
			border-top: none;
			border-left: none;
			line-height: 30px;

			@media(max-width: 600px) {
				&:nth-child(${props => props.hidableColumnIndex}) {
					display: none;
				}
			}
		}	
	}
	
	tbody {
		tr {
			border-bottom: solid 1px #ddd;
			line-height: 30px;

			td {
				text-align: left;
				padding: 6px;
				vertical-align: top;

				@media(max-width: 600px) {
					&:nth-child(${props => props.hidableColumnIndex}) {
						display: none;
					}
				}
			}
		}
	}

	tfoot {
		tr {
			td {
				border-top: solid 2px #ddd;
				padding: 6px;
				font-size: 16px;
				font-weight: 700;
				line-height: 30px;

				&:nth-child(2) {
					text-align: right;
				}

				&:last-child {
					text-align: left;
				}

				@media(max-width: 600px) {
					&:first-child {
						display: none;
					}
				}
			}
		}
	}
`