import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import ClientReview from './ClientReview/ClientReview'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Services/>
      <Resume/>
      <Projects/>
      <Skills/>
      <ClientReview/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default Home