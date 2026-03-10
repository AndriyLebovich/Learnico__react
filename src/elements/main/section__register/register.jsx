
import ButtonRegister from '../../header/ButtonRegister/ButtonRegister'
import './register.css'

export default function Register({contactRef}) {
	return (
		<>
			<section className="register">
				<div ref={contactRef} className="register__container container">
					<div className="register__title wrapper__sub-title">
						<title>Start learning today</title>
					</div>
					<div className="register__text">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
							tristique.</p>
					</div>
					<div className="register__buttons">
						<ButtonRegister wrapperClass={"register__buttons"} linkClass={"register__btn-start"} btnText={"Get started"} />
						<button href="#popup-contact" className="register__btn-contact popup-link">Contact us</button>
					</div>
				</div>
			</section>
		</>
	)
}