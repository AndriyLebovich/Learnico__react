import { useState } from "react";
import './Blog__items.css';

export const BlogItems = ({ data }) => {
	const [isActive, setIsActive] = useState(false);

	const handleButtonClick = () => {
		setIsActive(!isActive);
	}

	return (
		<>
			<button onClick={handleButtonClick} className="blog__btn btn-view__active">View all</button>
			<div className={`blog__items${isActive ? ' active' : ''}`}>
				{data.map((item, idx) => (
					<div key={idx} className="blog__item">
						<div className="blog__item-img">
							<img src={item.img} alt="" />
						</div>
						<div className="blog__item-info">
							<div className="blog__info-text">
								<div className="blog__item-title">
									<title>{item.title}</title>
								</div>
								<div className="blog__item-sub-title">
									<title>{item.sub_title}</title>
								</div>
								<div className="blog__item-text">
									<p>{item.text}</p>
								</div>
							</div>
							<div className="blog__item-link blog__link-active link-active">
								<a href="#">{item.link}</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}