
/* --- Спитай як це зробити --- */
import './ButtonScroll.css'

export default function ButtonScroll({coursesRef}) {
	const handleClick = () => {
		coursesRef.current?.scrollIntoView({behavior: 'smooth'})
	}

	return (
		<button className="header__btn-scroll" onClick={handleClick}>Explore Courses</button>
	)
}