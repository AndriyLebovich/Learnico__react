
import './blog.css'
import BlogItemsWrapper from './Blog__items/Blog__object'


export default function Blog({blogRef}) {
	return (
		<section className="blog">
			<div ref={blogRef} className="blog__container container">
				<div className="blog__top">
					<div className="blog__titles">
						<div className="blog__title wrapper__title">
							<title>Blog</title>
						</div>
						<div className="blog__sub-title wrapper__sub-title">
							<title>Our latest post</title>
						</div>
					</div>
				</div>
				<BlogItemsWrapper />
			</div>
		</section>
	)
}