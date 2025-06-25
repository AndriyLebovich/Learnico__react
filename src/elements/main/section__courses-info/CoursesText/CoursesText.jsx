import { useState } from "react"
import ButtonRegister from "../../../header/ButtonRegister/ButtonRegister";


export default function CoursesText({text}) {
	const [active, setActive] = useState(false)

	const handleButtonClick = () => {
		setActive(!active);
	}

	return (
		<>
			<div className="courses-info__text adaptive-text__content">
				<p>{text} <span className={`courses-info__hidden-text${active ? ' show' : ''}`}>Lorem
						ipsum
						dolor sit amet consectetur, adipisicing elit.
						Corporis, repellendus pariatur! Incidunt ipsam perferendis nemo modi repudiandae
						doloremque
						eaque. Molestias mollitia quasi sunt, atque aliquid exercitationem. Distinctio maxime id
						beatae?</span></p>
			</div>
			<div className="courses-info__buttons">
				<ButtonRegister wrapperClass={"wrapper__register-btn"} linkClass={"courses-info__start btn-active"} btnText={"Get started"}/>
				<div className="wrapper__courses-link">
					<button onClick={handleButtonClick} className="courses-info__more btn-more">Learn
						more</button>
				</div>
			</div>
		</>
	)
}
