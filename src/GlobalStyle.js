import { createGlobalStyle } from 'styled-components'

import ChalisaOctavia from './assets/ChalisaOctavia.otf'

export const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'Chalisa Octavia';
		src: url(${ChalisaOctavia}) format('opentype');
	}

  	.App {
		text-align: center;
		font-family: "Great Vibes";
	}

	html, body {
		margin: 0;
		padding: 0;
		outline: 0;
		overflow-x: hidden;
	}

	body {
		font-family: "Great Vibes";
		height: 100vh;
		justify-content: center;
		text-rendering: optimizeLegibility;
	}

	*, *::after, *::before {
		box-sizing: border-box;
	}

	a {
		color: #000;
		text-decoration: none;
		transition: all 300ms;
	}

	button {
		border: none;
		padding: 10px;
		background-color: #C97D85;
		color: #fff;
		border-radius: 6px;
		transition: 300ms;
		min-width: 160px;

		&:hover {
			opacity: 0.8;
			cursor: pointer;
		}

		&:disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}
	}

	input, textarea {
		outline: 0;
		width: 100%;
		border-radius: 6px;
		padding: 10px;
		border: solid 1px #bbb;
		font-family: 'Raleway', sans-serif;
		font-weight: 600;

		&::placeholder {
			color: #aaa;
			font-weight: 400;
		}
	}

	/* SCROLLBAR */
	::-webkit-scrollbar {
		width: 7px;
		height: 7px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.2);
		border-radius: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: rgba(0, 0, 0, 0.2); 
		border-radius: 10px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: rgba(0, 0, 0, 0.4); 
	}
`