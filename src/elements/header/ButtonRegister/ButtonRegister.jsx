
import './ButtonRegister.css'
import { useState } from 'react'


export default function ButtonRegister({wrapperClass, linkClass, btnText}) {
	const [popupActive, setPopupActive] = useState(false)
	const [heightInput, setHeightInput] = useState(false)

	function handleClick() {
		setPopupActive(!popupActive)
	}

	function openInput() {
		setHeightInput(!heightInput)
	}





	return (
		<>
			<div className={`${wrapperClass}`}>
				<a onClick={handleClick} className={`${linkClass} popup-link`}>{btnText}</a>
			</div>
			<div id="popup_register" className={`popup${popupActive ? ' open' : ''} lock-padding`}>
				<div className="popup__body">
					<div className="popup__content popup-regidter__content">
						<div className="popup__close">
							<a onClick={handleClick} className="popup__close close-popup">X</a>
						</div>
						<form action="#">
							<div className="form__container">
								<title className="popup-register__title">Login</title>
								<label onClick={openInput} className={`label__popup${heightInput ? ' grow' : ''} username`}>USERNAME</label>
								<input className={`username${heightInput ? ' grow' : ''}`} type="text" placeholder="Enter your username" />
								<label onClick={openInput} className={`label__popup${heightInput ? ' grow' : ''} password`}>PASSWORD</label>
								<input className={`password${heightInput ? ' grow' : ''}`} type="password" placeholder="Enter your password" />
								<button>SUBMIT</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}