
import './header.css'
import header_foto from '../../../public/header/header__content.png'
import reviews__autors from '../../../public/header/reviews.png'
import ButtonRegister from './ButtonRegister/ButtonRegister';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import ButtonSearch from './ButtonSearch/ButtonSearch';
import ButtonVideo from './ButtonVideo/ButtonVideo';
import ButtonScroll from './ButtonScroll/ButtonScroll';





export default function Header({coursesRef, homeRef, aboutRef, blogRef, contactRef}) {
	return (
		<header className="header">
			<div ref={homeRef} className="header__container container">
				<div className="header__inner">
					<div className="header__top">
						<div className="header__logo">
						</div>
						<HeaderMenu 
						homeRef={homeRef}
      				aboutRef={aboutRef} 
      				blogRef={blogRef} 
      				contactRef={contactRef} 
      				coursesRef={coursesRef}
						/>
						<div className="header__btn">
							<ButtonSearch />
							{/* <div className="btn__basket-wrapper">
								<a href="#" className="btn__basket">Cart</a>
							</div> */}
							<ButtonRegister wrapperClass={"btn__register-wrapper"} linkClass={"btn__register"} btnText={"Sign up"}/>
						</div>
					</div>
					<div className="header__greeting">
						<div className="greeting__main-content">
							<div className="greeting__info">
								<div className="greeting__title adaptive-text__big-title">
									<title>Become an No-Code expert and find a job</title>
								</div>
								<div className="greeting__text adaptive-text__content">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel molestie magna
										curabitur tincidunt nunc sit amet.</p>
								</div>
								<div className="greeting__btn">
									<ButtonScroll coursesRef={coursesRef}/>
									<ButtonVideo/>
								</div>
								<div className="greeting__reviews">
									<img src={reviews__autors} alt="" className="reviews__autors" />
									<div className="reviews__stars">
										<img src="" alt="" className="stars__img" />
										<p className="stars__text">From 3k+ reviews</p>
									</div>
								</div>
							</div>
							<div className="greeting__img">
								<img src={header_foto} alt="" />
							</div>
						</div>
					</div>
					<div className="header__bottom-text">
						<p>Trusted by the world's best companies</p>
					</div>
				</div>
			</div>
		</header>
	)
}