



// Допрацюй стилі

/*
const indicator = document.querySelector('.header__menu-indicator');
const items = document.querySelectorAll('.header__menu-item');

function handleIndicator(el) {
	items.forEach(item => {
		item.classList.remove('is-active');
		item.removeAttribute('style');
	});

	indicator.style.width = `${el.offsetWidth}px`;
	indicator.style.left = `${el.offsetLeft}px`;
	indicator.style.backgroundColor = el.getAttribute('active-color');

	el.classList.add('is-active');
	el.style.color = el.getAttribute('active-color');
}


items.forEach((item, index) => {
	item.addEventListener('click', (e) => { handleIndicator(e.target) });
	item.classList.contains('is-active') && handleIndicator(item);
});




import { useState } from "react"


export default function HeaderMenu() {

	const [state, setState] = useState(false);




	function handleClick() {
		setState(!state)
	}

	return (
		<>
			<div onClick={handleClick} class={`menu__burger${state ? '_active' : ''}`}>
				<span></span>
			</div>
			<div class={`header-menu__wrapper${state ? '_active' : ''}`}>
				<nav class="header__menu">
					<a href="#home" class="header__menu-item" active-color="rgb(34, 164, 90)">Home</a>
					<a href="#about" class="header__menu-item" active-color="rgb(34, 164, 90)">About</a>
					<a href="#blog" class="header__menu-item" active-color="rgb(34, 164, 90)">Blog</a>
					<a href="#contact" class="header__menu-item" active-color="rgb(34, 164, 90)">Contact</a>
					<a href="#courses" class="header__menu-item" active-color="rgb(34, 164, 90)">Courses</a>
					<span class="header__menu-indicator"></span>
				</nav>
			</div>
		</>
	)

}

*/

import React, { useState, useRef } from "react";

const HeaderMenu = ({coursesRef, homeRef, aboutRef, blogRef, contactRef}) => {

	const [state, setState] = useState(false);

	function handleClick() {
		setState(!state)
	}

	const [activeIndex, setActiveIndex] = useState(null);
	const indicatorRef = useRef(null);




	const menuItems = [
		{ text: "Home", activeColor: "#33ff8d", href: "#home" },
		{ text: "About", activeColor: "#33ff8d", href: "#about" },
		{ text: "Blog", activeColor: "#33ff8d", href: "#blog" },
		{ text: "Contact", activeColor: "#33ff8d", href: "#contact" },
		{ text: "Courses", activeColor: "#33ff8d", href: "#courses" },
	];

	const handleIndicator = (index, element) => {
		const indicator = indicatorRef.current;

		if (indicator && element) {
			indicator.style.width = `${element.offsetWidth}px`;
			indicator.style.left = `${element.offsetLeft}px`;
			indicator.style.backgroundColor = element.getAttribute("active-color");
		}

		setActiveIndex(index);
	};


	return (
		<>
			<div onClick={handleClick} className={state ? 'menu__burger_active' : 'menu__burger'}>
				<span></span>
			</div>
			<div className={state ? 'header__menu-wrapper_active' : 'header__menu-wrapper'}>
				<div className="header__menu">
					<span className="header__menu-indicator" ref={indicatorRef}></span>
					{menuItems.map((item, index) => (
						<a href={item.href}
							key={index}
							className={`header__menu-item ${index === activeIndex ? "is-active" : ""}`}
							style={{
								color: index === activeIndex ? item.activeColor : "inherit",
							}}
							active-color={item.activeColor}
							onClick={(e) => handleIndicator(index, e.target)}
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
