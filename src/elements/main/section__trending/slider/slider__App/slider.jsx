import './Slider.css'
import { useState } from 'react'
import { IconButton, IconButtonTrending } from '../controls-component/arrows'

export const Slider = ({ data }) => {
	const [activeId, setActiveId] = useState(0)

	const prev = () => {
		setActiveId(activeId => {
			if (activeId > 0) {
				return activeId - 1
			}
			return activeId
		})

	}
	const next = () => {
		setActiveId(activeId => {
			if (activeId < data.length - 1) {
				return activeId + 1
			}
			return activeId
		})
	}

	return (
		<>
			<div className="slider__wrap">
				<IconButtonTrending direction="left" onClick={prev} />
				<div className="slider">
					{data.map((slide, idx) => (
						<div key={idx} className={`slide${idx === activeId ? ' active' : ''}`}>
							<div className="slide__info">
								<div className="slide__label">{slide.label}</div>
								<div className="slide__title">{slide.title}</div>
								<div className="slide__price">{slide.price}</div>
								<img src={slide.img} alt={`Slide ${idx + 1}`} />
							</div>
						</div>
					))}
				</div>
				<IconButtonTrending direction="right" onClick={next} />
			</div>
		</>
	)
}