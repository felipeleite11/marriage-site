import React, { useState, useCallback } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { SlidesContainer } from './styles'

import foto1 from '../../assets/img/2.jpg'
import foto2 from '../../assets/img/3.jpg'
import foto3 from '../../assets/img/4.jpg'

export default function() {
	const slides = [foto1, foto2, foto3]

	const [offset, setOffset] = useState(0)

	const prev = useCallback(() => {
		const isFirstSlide = offset === 0
		setOffset(isFirstSlide ? -100 * (slides.length - 1) : offset + 100)
	}, [offset, slides.length])

	const next = useCallback(() => {
		console.log(offset)
		const isLastSlide = offset === -100 * (slides.length - 1)
		setOffset(isLastSlide ? 0 : offset - 100)
	}, [offset, slides.length])

	return (
		<SlidesContainer>
			{slides.map(slide => (
				<div key={slide} className="slide" style={{ transform: `translateX(${offset}%)`, backgroundImage: `url(${slide})` }} />
			))}

			<button id="go-left" onClick={prev}>
				<FiChevronLeft size={30} />
			</button>

			<button id="go-right" onClick={next}>
				<FiChevronRight size={30} />
			</button>

		</SlidesContainer>
	)
}