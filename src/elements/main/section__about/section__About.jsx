import "./section__About.css"

export default function About() {
	return (
		<section className="about">
			<div className="about__container container">
				<div className="about__title wrapper__title">
					<title>About us</title>
				</div>
				<div className="about__sub-title adaptive-text__big-title wrapper__sub-title">
					<title>No-code Education Platform</title>
				</div>
				<div className="about__text adaptive-text__content">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
						tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
						vitae erat.</p>
				</div>
				<div className="about__btn-container">
					<button href="#popup__about-us" className="about__btn btn-active popup-link">About us</button>
				</div>
			</div>
		</section>
	)
}