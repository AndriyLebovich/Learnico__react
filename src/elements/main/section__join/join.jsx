import './join.css'
import join__content from '../../../../public/join/join__content.png'
import point_1 from '../../../../public/join/points/point_1.svg'
import point_2 from '../../../../public/join/points/point_2.svg'
import point_3 from '../../../../public/join/points/point_3.svg'
import ButtonRegister from '../../header/ButtonRegister/ButtonRegister'


export default function Join() {
	return (
		<section className="join">
			<div className="join__container container">
				<div className="join__top">
					<div className="join__info">
						<div className="join__title wrapper__title">
							<title>Join us</title>
						</div>
						<div className="join__sub-title wrapper__sub-title">
							<title>Join more than 17,000+ students all over the world</title>
						</div>
						<div className="join__text">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
								elementum tristique. Duis cursus, mi quis viverra ornare.</p>
						</div>
						<ButtonRegister wrapperClass={"wrapper__register-btn"} linkClass={"join__btn btn-active"} btnText={"Get started"}/>
					</div>
					<div className="join__img">
						<img src={join__content} alt="" />
					</div>
				</div>
				<div className="join__points">
					<div className="points__item">
						<div className="point__icon">
							<img src={point_1} alt="" />
						</div>
						<div className="point__title">
							<title>Browse our courses</title>
						</div>
						<div className="point__text">
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic porro quos, facilis sapiente
								fuga asperiores libero vero! </p>
						</div>
					</div>
					<div className="points__item">
						<div className="point__icon">
							<img src={point_2} alt="" />
						</div>
						<div className="point__title">
							<title>Purchase quickly and securely</title>
						</div>
						<div className="point__text">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam veniam qui incidunt inventore
								odio unde, accusantium non sapiente</p>
						</div>
					</div>
					<div className="points__item">
						<div className="point__icon">
							<img src={point_3} alt="" />
						</div>
						<div className="point__title">
							<title>Start learning right away</title>
						</div>
						<div className="point__text">
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod nemo amet dolorem odit autem
								totam in quae nesciunt optio? </p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

