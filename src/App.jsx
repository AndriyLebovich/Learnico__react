
import './App.css'
import Header from './elements/header/header.jsx'
import About from './elements/main/section__about/section__About.jsx'
import CoursesInfo from './elements/main/section__courses-info/courses-info.jsx'
import Trending from './elements/main/section__trending/trending.jsx'
import Join from './elements/main/section__join/join.jsx'
import Benefits from './elements/main/section__benefits/benefits.jsx'
import Testimonials from './elements/main/section__testimonials/testimonials.jsx'
import Blog from './elements/main/section__blog/blog.jsx'
import Register from './elements/main/section__register/register.jsx'
import Footer from './elements/footer/footer.jsx'
import { useRef } from 'react'

export default function App() {
  const coursesRef = useRef(null);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header 
      homeRef={homeRef}
      aboutRef={aboutRef} 
      blogRef={blogRef} 
      contactRef={contactRef} 
      coursesRef={coursesRef}
      />
      <About />
      <CoursesInfo />
      <Trending 
      coursesRef={coursesRef} 
      />
      <Join />
      <Benefits />
      <Testimonials />
      <Blog />
      <Register />
      <Footer />
    </>
  )
} 
