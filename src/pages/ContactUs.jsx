import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="w-full max-w-6xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-center mb-8 sm:mb-12">Contact Us</h1>
        
        <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Section */}
          <div className="bg-[#0A0B1A] rounded-xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
            <h2 className="text-white text-lg sm:text-xl font-semibold mb-2">Contact Information</h2>
            <p className="text-gray-400 mb-6 sm:mb-8">Say something to start a chat!</p>
            
            {/* Contact Info - Always horizontal */}
            <div className="space-y-6 sm:space-y-8 relative z-10 mb-8">
              <div className="flex items-center text-white gap-4">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base">(+1) 510-945-8169</span>
              </div>
              
              <div className="flex items-center text-white gap-4">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm sm:text-base break-all">info@smartrak.co</span>
              </div>
              
              <div className="flex items-start text-white gap-4">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-sm sm:text-base leading-tight">500 S Main Street, Suite 212 Holy Springs NC 27540</span>
              </div>
            </div>

            {/* Social Media Icons - In a row */}
            <div className="flex justify-start gap-4 relative z-10">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Background Circles */}
            <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
              <div className="w-24 sm:w-32 h-24 sm:h-32 bg-indigo-900 rounded-full opacity-20"></div>
            </div>
            <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
              <div className="w-32 sm:w-40 h-32 sm:h-40 bg-indigo-800 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Right Section - Complete Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm text-gray-600 mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Email"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2 sm:mb-3">Select Subject?</label>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                {['General Inquiry', 'Technical Support', 'Billing Question', 'Partnership'].map((option, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="radio"
                      name="subject"
                      className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Message</label>
              <textarea
                className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="4"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-indigo-600 text-white text-sm sm:text-base rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;