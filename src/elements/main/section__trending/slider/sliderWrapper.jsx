
import { Slider } from "./slider__App/slider";

import photo_1 from '../../../../../public/trending/item-1.png'
import photo_2 from '../../../../../public/trending/item-2.png'
import photo_3 from '../../../../../public/trending/item-3.png'

const sliderData = [
	{
		label: 'Beginner',
		title: 'Webflow Basics',
		price: '$ 24.00 USD',
		img: photo_1
	},
	{
		label: 'Beginner',
		title: 'Webflow Interactions Masterclass',
		price: '$ 55.00 USD',
		img: photo_2
	},
	{
		label: 'Beginner',
		title: 'Advanced CMS and Integrations',
		price: '$ 38.00 USD',
		img: photo_3
	},
]


export default function SliderWrapper() {
	return (
		<>
			<Slider data={sliderData} />
		</>
	)
}
