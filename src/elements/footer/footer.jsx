
import './footer.css'

export default function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="footer__container container">
					<div className="footer__content">
						<div className="footer__section-input">
							<p className="input__text-top">Join our newsletter to stay up to date on features and releases.</p>
							<div className="input__container">
								<div className="wrapper__input">
									<input type="text" />
								</div>
								<div className="wrapper__input-btn">
									<button className="input__btn">Subscribe</button>
								</div>
							</div>
							<p className="input__text-bottom">and provide consent to receive updates from our company.</p>
						</div>
						<div className="footer__page-section-list">
							<ul className="footer__page-sections">
								<p className="page-section__title">
									Pages
								</p>
								<li className="footer__link-wrapper link-active">
									<a href="#">Home</a>
								</li>
								<li className="footer__link-wrapper link-active">
									<a href="#">About</a>
								</li>
								<li className="footer__link-wrapper link-active">
									<a href="#">Contact</a>
								</li>
								<li className="footer__link-wrapper link-active">
									<a href="#">Blog</a>
								</li>
								<li className="footer__link-wrapper link-active">
									<a href="#">Courses</a>
								</li>
								<li className="footer__link-wrapper link-active">
									<a href="#">Teachers</a>
								</li>
							</ul>
							<ul className="footer__page-sections">
								<p className="page-section__title">
									CMS Pages
								</p>
								<li className="footer__link-wrapper link-active">
									<a href="#">Blog Post</a>
								</li>
								<li className="footer__link-wrapper link-active">
									<a href="#">Blog Categories</a>
								</li>
								<li className="footer__link-wrapper link-active">
									<a href="#">Courses Single</a>
								</li>
								<li className="footer__link-wrapper link-active">
									<a href="#">Courses Categories</a>
								</li>
								<li className="footer__link-wrapper link-active">
									<a href="#">Product Page</a>
								</li>
								<li className="footer__link-wrapper link-active">
									<a href="#">Product Categories</a>
								</li>
								<li className="footer__link-wrapper link-active">
									<a href="#">Teachers Single</a>
								</li>
								<li className="footer__link-wrapper link-active">
									<a href="#">Episode Single</a>
								</li>
							</ul>
							<ul className="footer__page-sections">
								<p className="page-section__title">
									Account Pages
								</p>
								<li className="footer__link-wrapper link-active">
									<a href="#">Login</a>
								</li>
								<li className="footer__link-wrapper link-active">
									<a href="#">Sign Up</a>
								</li>
								<li className="footer__link-wrapper link-active">
									<a href="#">Forgot Password</a>
								</li>
								<li className="footer__link-wrapper link-active">
									<a href="#">Reset Password</a>
								</li>
								<li className="footer__link-wrapper link-active">
									<a href="#">Email Confirmation</a>
								</li>
							</ul>
							<ul className="footer__page-sections">
								<p className="page-section__title">
									Utility Pages
								</p>
								<li className="footer__link-wrapper link-active">
									<a href="#">Style Guide</a>
								</li>
								<li className="footer__link-wrapper link-active">
									<a href="#">Changelog</a>
								</li>
								<li className="footer__link-wrapper link-active">
									<a href="#">Licenses</a>
								</li>
								<li className="footer__link-wrapper link-active">
									<a href="#">404</a>
								</li>
								<li className="footer__link-wrapper link-active">
									<a href="#">Password</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="footer__bottom">
						<div className="footer__text-bottom">
							<p>@ Learnico by Minimal Square. Powered by Webflow.</p>
						</div>
						<div className="footer__icons-bottom">
							<img src="/fonts/footer/footer__bottom/facebook.svg" alt="" />
							<img src="/fonts/footer/footer__bottom/twitter.svg" alt="" />
							<img src="/fonts/footer/footer__bottom/instagram.svg" alt="" />
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}