import './ts__slider.css'
import { useState } from 'react'
import { IconButton } from '../../../section__trending/slider/controls-component/arrows'

export default function Slider({ data }) {
	const [activedId, setActiveId] = useState(0)


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
			<div className="ts-slider__wrapper">
				<IconButton direction="left" onClick={prev} />
				<div className="ts-slider">
					{data.map((slide, idx) => (
						<div key={idx} className={`ts-slide${idx === activedId ? ' active' : ''}`}>
							<div className="ts-slide__info">
								<img className="ts-slide__stars" src={slide.stars}></img>
								<div className="ts-slide__text">{slide.text}</div>
								<div className="ts-slide__autor">
									<img className="autor__icon" src={slide.autor_icon}></img>
									<div className="autor__name">{slide.autor_name}</div>
									<div className="autor__position">{slide.autor_position}</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<IconButton direction="right" onClick={next} />
			</div>
		</>
	)
}

