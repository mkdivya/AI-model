import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/HomePageComponents/Hero'
import AboutUs from './AboutUs'


const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
    </div>
  )
}
export default Homepage