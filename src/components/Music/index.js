import React from 'react'

import music1 from '../../assets/audio/thinking-out-loud.mp3'
import music2 from '../../assets/audio/all-of-me.mp3'
import music3 from '../../assets/audio/se-for-com-voce-pode-ser.mp3'

const musics = [
	music1,
	music2,
	music3	
]

export default function () {
	function getRandomMusic() {
		const randomIndex = Math.floor(Math.random() * musics.length)

		return musics[randomIndex]
	}

	return (
		<audio controls autoPlay loop style={{ display: 'none' }}>
			<source src={getRandomMusic()} type="audio/mpeg" />
		</audio>
	)
}
