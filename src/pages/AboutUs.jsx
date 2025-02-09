import React from 'react';
import team from '../assets/images/AboutUs.png';
import journey from '../assets/images/PeopleBench.png';
import client1 from '../assets/images/image1.png';
import client2 from '../assets/images/image2.png';
import client3 from '../assets/images/image3.png';
import client4 from '../assets/images/image4.png';
import Footer from '../components/Footer';  // Import the Footer component

const AboutUs = () => {
  return (
    <>
      <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        {/* About Us Section */}
        <div className="flex items-center justify-center px-4 py-8 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-16">About Us</h1>
            
            <div className="flex flex-col items-center mb-8 md:mb-16">
              <div className="relative w-full max-w-xs md:max-w-md h-48 md:h-64">
                <img 
                  src={team}
                  alt="Team Illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="text-white text-base md:text-lg leading-relaxed max-w-3xl mx-auto px-4">
              <p>
                At [Your Company Name], we're more than a marketing agency—we're your strategic allies in a world
                driven by pixels, clicks, and connections. With 2+ years of expertise in delivering results-driven marketing
                services, we've mastered the art of blending creativity with data to turn brands into industry leaders. Born
                in Karnataka's tech-savvy heartland, our journey began with a simple mission: to make businesses
                unforgettable. Today, we empower startups and enterprises alike to thrive in the digital ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* Journey Section */}
        <div className="w-full bg-gray-100 rounded-3xl px-4 md:px-8 py-8 md:py-12 mx-auto max-w-6xl mb-8 md:mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12">
            <div className="lg:w-1/2 px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Our Journey</h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                In just three years, we have built a comprehensive, tech-integrated
                solution tailored for dairy farmers. From launching a user-friendly
                mobile app to expanding our distribution network, product offerings,
                and research & development, we have continuously evolved to
                meet the growing needs of the industry.
              </p>
            </div>
            
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <img 
                src={journey} 
                alt="Our Journey Illustration" 
                className="w-full h-48 md:h-64 lg:h-72 object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Clients Section */}
        <div className="w-full bg-black py-8 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">Our Clients</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center justify-items-center">
              <div className="bg-white p-4 md:p-8 rounded-lg w-full sm:w-48 h-32 md:h-40 flex items-center justify-center">
                <img src={client1} alt="Client 1" className="w-full h-full object-contain" />
              </div>
              <div className="bg-white p-4 md:p-8 rounded-lg w-full sm:w-48 h-32 md:h-40 flex items-center justify-center">
                <img src={client2} alt="Client 2" className="w-full h-full object-contain" />
              </div>
              <div className="bg-white p-4 md:p-8 rounded-lg w-full sm:w-48 h-32 md:h-40 flex items-center justify-center">
                <img src={client3} alt="Client 3" className="w-full h-full object-contain" />
              </div>
              <div className="bg-white p-4 md:p-8 rounded-lg w-full sm:w-48 h-32 md:h-40 flex items-center justify-center">
                <img src={client4} alt="Client 4" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default AboutUs;