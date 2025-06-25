
import { BlogItems } from "./Blog__items";
import item_1 from '../../../../../public/blog/item-1.png'

const ItemData = [
	{
		img: item_1,
		title: 'Freelance',
		sub_title: '7 freelance mistakes to avoid',
		text: 'lorem sjgj sdfnsjdfosu sdjnfsnfk sdfkdfjsdh',
		link: 'Read more'
	},
	{
		img: item_1,
		title: 'Freelance',
		sub_title: '7 freelance mistakes to avoid',
		text: 'lorem sjgj sdfnsjdfosu sdjnfsnfk sdfkdfjsdh',
		link: 'Read more'
	},
	{
		img: item_1,
		title: 'Freelance',
		sub_title: '7 freelance mistakes to avoid',
		text: 'lorem sjgj sdfnsjdfosu sdjnfsnfk sdfkdfjsdh',
		link: 'Read more'
	},
	{
		img: item_1,
		title: 'Freelance',
		sub_title: '7 freelance mistakes to avoid',
		text: 'lorem sjgj sdfnsjdfosu sdjnfsnfk sdfkdfjsdh',
		link: 'Read more'
	},
	{
		img: item_1,
		title: 'Freelance',
		sub_title: '7 freelance mistakes to avoid',
		text: 'lorem sjgj sdfnsjdfosu sdjnfsnfk sdfkdfjsdh',
		link: 'Read more'
	},
	{
		img: item_1,
		title: 'Freelance',
		sub_title: '7 freelance mistakes to avoid',
		text: 'lorem sjgj sdfnsjdfosu sdjnfsnfk sdfkdfjsdh',
		link: 'Read more'
	},
	{
		img: item_1,
		title: 'Freelance',
		sub_title: '7 freelance mistakes to avoid',
		text: 'lorem sjgj sdfnsjdfosu sdjnfsnfk sdfkdfjsdh',
		link: 'Read more'
	}
]

export default function BlogItemsWrapper() {
	return (
		<>
			<BlogItems data={ItemData} />
		</>
	)
}