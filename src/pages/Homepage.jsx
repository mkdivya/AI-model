import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/HomePageComponents/Hero'
import About from '../components/About'
import OurProjects from './OurProjects'
import TestimonialsSection from './TestimonialsSection'
import ContactUs from './ContactUs'
import Footer from '../components/Footer'


const Homepage = () => {
  return (
    <div>
      
      <Hero />
      <About />
      <OurProjects />
      <TestimonialsSection />
      <ContactUs />
      <Footer />
    </div>
  )
}
export default Homepage