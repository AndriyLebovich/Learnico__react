

import { useState, useRef, useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const HeaderMenu = ({coursesRef, homeRef, aboutRef, blogRef, contactRef}) => {

	const [state, setState] = useState(false);

	function handleClick() {
		setState(!state)
	}

	const [activeIndex, setActiveIndex] = useState(null);
	const indicatorRef = useRef(null);

	useEffect(() => {
		if(state){
			disableBodyScroll(document.body)
		} else {
			enableBodyScroll(document.body)
		}
		return () => enableBodyScroll(document.body)
	}, [state]); /*prohibiting page scrolling when burger-menu is open*/


	const menuItems = [
		{ text: "Home", activeColor: "#33ff8d", href: "#home" },
		{ text: "About", activeColor: "#33ff8d", href: "#about" },
		{ text: "Blog", activeColor: "#33ff8d", href: "#blog" },
		{ text: "Contact", activeColor: "#33ff8d", href: "#contact" },
		{ text: "Courses", activeColor: "#33ff8d", href: "#courses" },
	];

const refMap = {
   Home: homeRef,
   About: aboutRef,
   Blog: blogRef,
   Contact: contactRef,
   Courses: coursesRef
};

const scrollToSection = (ref) => {
	if(!ref || !ref.current) return;
	ref.current.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
};



	const handleIndicator = (index, element) => {
		const indicator = indicatorRef.current;

		if (indicator && element) {
			indicator.style.transition = "none";
			indicator.style.width = `${element.offsetWidth}px`;
			indicator.style.left = `${element.offsetLeft}px`;
			indicator.style.backgroundColor = element.getAttribute("active-color");
		}

		setTimeout(() => {
			indicator.style.transition = "opacity 0.5s ease";
			indicator.style.opacity = "1";

			setTimeout(() => {
				indicator.style.opacity = "0";
			}, 3000);
		}, 50);

		setActiveIndex(index);
	}; /*indicator to menu-item*/


	return (
		<>
		<div className="menu-burger__wrapper">
			<div onClick={handleClick} className={state ? 'menu__burger_active' : 'menu__burger'}>
				<span></span>
			</div>
		</div>
			<div className={state ? 'header__menu-wrapper_active' : 'header__menu-wrapper'}>
				<div className="header__menu">
					<span className="header__menu-indicator" ref={indicatorRef}></span>
					{menuItems.map((item, index) => (
						<a href={item.href}
							key={index}
							ref={refMap[item.text]}
							className={`header__menu-item ${index === activeIndex ? "is-active" : ""}`}
							style={{
								color: index === activeIndex ? item.activeColor : "inherit",
							}}
							active-color={item.activeColor}
							onClick={(e) => {
								handleIndicator(index, e.currentTarget);
								scrollToSection(refMap[item.text]);
							}}
						>
							{item.text}
						</a>
					))}
				</div>
			</div>
		</>
	)
};

export default HeaderMenu;
