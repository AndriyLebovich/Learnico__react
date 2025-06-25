
import './testimonials.css'
import TsSliderWrapper from '../section__testimonials/ts__sliderWrapper/ts__sliderWrapper.jsx'

export default function Testimonials() {
	return (
		<section className="testimonials">
			<div className="testimonials__container container">
				<div className="testimonials__title wrapper__title">
					<title>Testimonials</title>
				</div>
				<div className="testimonials__sub-title wrapper__sub-title">
					<title>What our students say</title>
				</div>
				<div className="testimonials__text">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
						tristique.</p>
				</div>
				<div className="testimonials__coments swider-container">
					<TsSliderWrapper />
				</div>
			</div>
		</section>
	)
}


