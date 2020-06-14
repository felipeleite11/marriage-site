import styled from 'styled-components'
import { Map as LeafletMap, Popup as LeafletPopup } from 'react-leaflet'

export const Map = styled(LeafletMap)`
	height: 350px;
`

export const Popup = styled(LeafletPopup)`
	max-width: 200px;

	img {
		border-radius: 10px;
	}

	h1 {
		font-size: 13px;
		font-weight: 800;
	}

	p:last-child {
		color: #707070;
		font-size: 11px;
		margin-top: 0;
	}
`