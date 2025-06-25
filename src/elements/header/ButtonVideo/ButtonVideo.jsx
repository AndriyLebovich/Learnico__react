import "./ButtonVideo.css";
import { useState } from "react";


export default function ButtonVideo () {

	const [popupActive, setPopupActive] = useState(false);

	function handleClick() {
		setPopupActive(!popupActive)
	}


	return(
	<>
		<div className="btn__watching-wrapper">
		<a onClick={handleClick} href="#popup__video" className="btn__watching popup-link">Watch Video</a>
	</div>
	<div id="popup__video" className={`popup${ popupActive ? " open" : ""} lock-padding`}>
					<div className="popup__body">
						<div className="popup-video__content popup__content">
						<div className="popup__close close-popup">
							<a onClick={handleClick} href="#">X</a>
						</div>
							<video controls className="popup__video" id="popup__video-id" src="/fonts/video/test-video.mp4"
								type="video/mp4"></video>
						</div>
					</div>
				</div>
	</>
	)
}