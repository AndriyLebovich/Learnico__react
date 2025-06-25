import './ts__sliderWrapper.css'

import autor_1 from '../../../../../public/testimonials/autors/autor-1.svg'
import autor_2 from '../../../../../public/testimonials/autors/autor-2.svg'
import autor_3 from '../../../../../public/testimonials/autors/autor-3.svg'
import stars from '../../../../../public/testimonials/stars.svg'

import Slider from './ts__slider/ts__slider'

const SliderData = [
	{
		stars: stars,
		text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare." Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis cum similique in pariatur voluptas dicta accusantium totam. Eveniet commodi a autem ipsum, totam saepe quos veniam unde velit dignissimos neque.',
		autor_icon: autor_1,
		autor_name: 'Lori Bryson',
		autor_position: 'UX Designer, @Company'
	},
	{
		stars: stars,
		text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
		autor_icon: autor_2,
		autor_name: 'Orlando Diggs',
		autor_position: 'Junior UI Designer, @Company'
	},
	{
		stars: stars,
		text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare. " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque neque accusantium dicta eligendi distinctio odit aliquam, facere at quia inventore fugiat vitae voluptatum! Adipisci blanditiis labore maiores vel quis quae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, impedit praesentium? Tenetur accusamus, voluptatem praesentium, vitae, incidunt vero dolore odio eaque libero nisi sapiente! Ipsa esse aut quisquam ab natus!',
		autor_icon: autor_3,
		autor_name: 'Mollie Hall',
		autor_position: 'Design System Manager, @Company'
	},
]

export default function TsSliderWrapper() {
	return (
		<Slider data={SliderData} />
	)
}
