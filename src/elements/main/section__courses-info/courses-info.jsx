import './courses-info.css'
import image_1 from '../../../../public/Courses-info/image_1.png'
import image_2 from '../../../../public/Courses-info/image_2.png'

import CoursesText from './CoursesText/CoursesText'

export default function CoursesInfo() {
	return (
		<section className="courses-info">
			<div className="courses-info__container container">
				<div className="courses-info__content-wrapper--1">
					<div className="courses-info__image--one courses-info__image">
						<img src={image_1} alt="" />
					</div>
					<div className="courses-info__content--one courses-info__content">
						<div className="courses-info__title adaptive-text__big-title wrapper__sub-title">
							<title>Premium courses from the industry leaders</title>
						</div>
						<CoursesText 
							text={"Immerse yourself in knowledge with premium courses from top industry experts. Each program is designed by professionals who are shaping the future of their field. You’ll gain up-to-date skills, real business case studies, and exclusive access to expert insights. Learning is delivered in a convenient format with personalized support. Invest in your growth — choose quality backed by experience."}
						/>
					</div>
				</div>
				<div className="courses-info__content-wrapper--2">
					<div className="courses-info__image--two courses-info__image">
						<img src={image_2} alt="" />
					</div>
					<div className="courses-info__content--two courses-info__content">
						<div className="courses-info__title adaptive-text__big-title wrapper__sub-title">
							<title>Easily find the perfect course for you</title>
						</div>
						<CoursesText 
							text={"Your perfect course is just a click away. Find the course that fits you — fast, easy, and tailored. Discover the course that unlocks your potential. The right course. The right expert. Right now. Level up faster — find your perfect course in seconds."} 
						/>
					</div>
				</div>
			</div>
		</section>
	)
}