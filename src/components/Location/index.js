import React from 'react'
import { TileLayer, Marker } from 'react-leaflet'

import place from '../../assets/img/place.png'

import { Map, Popup } from './styles'

export default function({ centerPosition, markerPosition, title, description }) {
	return (
		<Map 
			center={centerPosition} 
			zoom={17}
		>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

			<Marker position={markerPosition}>
				<Popup>
					<img src={place} alt="" style={{ width: '100%', marginTop: 14 }} />
					<h1>{title}</h1>
					<p>{description}</p>
				</Popup>
			</Marker>
		</Map>
	)
}