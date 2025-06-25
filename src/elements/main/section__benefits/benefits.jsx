import './benefits.css'
import img__content from '../../../../public/benefits/image_content.png'
import point_one from '../../../../public/benefits/benefits__icon/icon_1.svg'
import point_two from '../../../../public/benefits/benefits__icon/icon_2.svg'
import point_three from '../../../../public/benefits/benefits__icon/icon_3.svg'
import point_four from '../../../../public/benefits/benefits__icon/icon_4.svg'
import ButtonRegister from '../../header/ButtonRegister/ButtonRegister'



export default function Benefits() {
	return (
		<section className="benefits">
			<div className="benefits__container container">
				<div className="benefits__top">
					<div className="benefits__title wrapper__title">
						<title>Benefits</title>
					</div>
					<div className="benefits__sub-title wrapper__sub-title">
						<title>Grow your knowledge from best teachers in the industry</title>
					</div>
					<div className="benefits__text">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
							elementum tristique. Duis cursus, mi quis viverra ornare.</p>
					</div>
				</div>
				<div className="benefits__points">
					<div className="points__left">
						<div className="points__item points__item--1">
							<div className="point__icon">
								<img src={point_one} alt="" />
							</div>
							<div className="point__title">
								<title>Over 430+ hours of lessons</title>
							</div>
							<div className="point__text">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam veniam qui incidunt
									inventore
									odio unde, accusantium non sapiente</p>
							</div>
						</div>
						<div className="points__item points__item--2">
							<div className="point__icon">
								<img src={point_two} alt="" />
							</div>
							<div className="point__title">
								<title>40+ teachers</title>
							</div>
							<div className="point__text">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam veniam qui incidunt
									inventore
									odio unde, accusantium non sapiente</p>
							</div>
						</div>
					</div>
					<div className="benefits__img">
						<img src={img__content} alt="" />
					</div>
					<div className="points__right">
						<div className="points__item points__item--3">
							<div className="point__icon">
								<img src={point_three} alt="" />
							</div>
							<div className="point__title">
								<title>Online community</title>
							</div>
							<div className="point__text">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam veniam qui incidunt
									inventore
									odio unde, accusantium non sapiente</p>
							</div>
						</div>
						<div className="points__item points__item--4">
							<div className="point__icon">
								<img src={point_four} alt="" />
							</div>
							<div className="point__title">
								<title>1-on-1 coaching</title>
							</div>
							<div className="point__text">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam veniam qui incidunt
									inventore
									odio unde, accusantium non sapiente</p>
							</div>
						</div>
					</div>
				</div>
										<ButtonRegister wrapperClass={"wrapper__register-btn benefits__btn-container"} linkClass={"benefits__btn btn-active"} btnText={"Get started"}/>
			</div>
		</section>
	)
}