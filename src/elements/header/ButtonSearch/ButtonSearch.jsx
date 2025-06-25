
import "./ButtonSearch.css"
import { useState } from "react"


export default function ButtonSearch() {

	const [popupActive, setPopupActive] = useState(false)

	function handleClick() {
		setPopupActive(!popupActive)
	}

	return (
		<>
			<div className="btn__search-wrapper">
				<a onClick={handleClick} href="#popup__search" className={`btn__search popup-link`}>Search</a>
			</div>
			<div id="popup__search" className={`popup${popupActive ? ' open' : ''} lock-padding`}>
				<div className="popup__body">
					<div className="popup__content popup-search__content">
						<div className="popup__close close-popup">
							<a onClick={handleClick} href="#">X</a>
						</div>
						<div className="popup__title">
							<title>Search</title>
						</div>
						<div className="popup-search__input-container">
							<input placeholder="Enter text" className="popup__search-input" type="text" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}