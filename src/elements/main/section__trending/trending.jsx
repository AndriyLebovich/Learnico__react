import './trending.css'

import SliderWrapper from './slider/sliderWrapper'


export default function Trending({coursesRef}) {

	return (
		<section className="trending">
			<div ref={coursesRef} className="trending__container container">
				<div className="trending__title wrapper__title">
					<title>Trending</title>
				</div>
				<div className="trending__sub-title wrapper__sub-title">
					<title>The most popular courses</title>
				</div>
				<div className="trending__text">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
						tristique. Duis cursus, mi quis viverra ornare.</p>
				</div>
				<div className="tending__tables courses__example--scroll">
					<SliderWrapper />
				</div>
			</div>
		</section>
	)
}


