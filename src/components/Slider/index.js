import React, { useState, useEffect, useCallback } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { SlidesContainer } from './styles'

import foto1 from '../../assets/img/SLIDER/Ensaio-1.jpg'
import foto2 from '../../assets/img/SLIDER/Ensaio-2.jpg'
import foto3 from '../../assets/img/SLIDER/Ensaio-3.jpg'
import foto4 from '../../assets/img/SLIDER/Ensaio-4.jpg'
import foto5 from '../../assets/img/SLIDER/Ensaio-5.jpg'
import foto6 from '../../assets/img/SLIDER/Ensaio-6.jpg'
import foto7 from '../../assets/img/SLIDER/Ensaio-7.jpg'
import foto8 from '../../assets/img/SLIDER/Ensaio-8.jpg'
import foto9 from '../../assets/img/SLIDER/Ensaio-9.jpg'
import foto11 from '../../assets/img/SLIDER/Ensaio-11.jpg'
import foto12 from '../../assets/img/SLIDER/Ensaio-12.jpg'
import foto13 from '../../assets/img/SLIDER/Ensaio-13.jpg'
import foto14 from '../../assets/img/SLIDER/Ensaio-14.jpg'
import foto15 from '../../assets/img/SLIDER/Ensaio-15.jpg'
import foto17 from '../../assets/img/SLIDER/Ensaio-17.jpg'
import foto18 from '../../assets/img/SLIDER/Ensaio-18.jpg'
import foto19 from '../../assets/img/SLIDER/Ensaio-19.jpg'
import foto20 from '../../assets/img/SLIDER/Ensaio-20.jpg'
import foto21 from '../../assets/img/SLIDER/Ensaio-21.jpg'
import foto22 from '../../assets/img/SLIDER/Ensaio-22.jpg'

const slides = [foto1, foto2, foto3, foto4, foto6, foto7, foto9, foto11, foto13, foto14, foto15, foto17, foto18, foto19, foto20, foto21, foto22]

// Adiciona as fotos que ficam adequadas apenas no desktop
if(window.innerWidth >= 600) {
	slides.push(foto5, foto8, foto12)
}

export default function() {
	const [offset, setOffset] = useState(0)

	const prev = useCallback(() => {
		const isFirstSlide = offset === 0
		setOffset(isFirstSlide ? -100 * (slides.length - 1) : offset + 100)
	}, [offset])

	const next = useCallback(() => {
		const isLastSlide = offset === -100 * (slides.length - 1)
		setOffset(isLastSlide ? 0 : offset - 100)
	}, [offset])

	useEffect(() => {
		const interval = setInterval(next, 4000)

		return () => clearInterval(interval)
	}, [next])

	return (
		<SlidesContainer>
			{slides.map(slide => (
				<div key={slide} className="slide" style={{ transform: `translateX(${offset}%)`, backgroundImage: `url(${slide})` }} />
			))}

			<button id="go-left" onClick={prev}>
				<FiChevronLeft size={54} />
			</button>

			<button id="go-right" onClick={next}>
				<FiChevronRight size={54} />
			</button>

		</SlidesContainer>
	)
}