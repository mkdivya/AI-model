import React from 'react';
import Rocket from '../assets/images/Rocket.png';

const AboutUs = () => {
    return (
        <div className="bg-[#080915] min-h-screen w-full flex items-center px-4 md:px-8 lg:px-16 relative overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left side with rocket and gradient effect */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-center relative">
                    {/* Gradient background */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] max-h-[500px] opacity-30"
                        style={{
                            background: 'radial-gradient(circle, rgba(88, 28, 235, 0.8) 0%, rgba(37, 7, 128, 0.4) 45%, rgba(8, 9, 21, 0) 70%)',
                        }}
                    />

                    {/* Rocket with animation */}
                    <div className="relative z-10 animate-[bounce_3s_ease-in-out_infinite]">
                        <img
                            src={Rocket}
                            alt="Rocket illustration"
                            className="w-48 md:w-64 lg:w-80"
                        />
                    </div>
                </div>

                {/* Right side with content */}
                <div className="w-full md:w-1/2 text-white relative z-10">
                    <h2 className="text-purple-500 font-medium mb-4">ABOUT US</h2>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Smarttrak is a AI Technology Solutions company focused on
                    </h1>

                    <ul className="space-y-3 mb-6">
                        <li className="flex items-center text-purple-400">
                            <span className="mr-2">•</span>
                            Revolutionizing your business with our Advanced AI
                        </li>
                        <li className="flex items-center text-purple-400">
                            <span className="mr-2">•</span>
                            Intelligent and Predictive Assets Monitoring
                        </li>
                    </ul>

                    <p className="text-gray-300 mb-8">
                        We help businesses to lead the charge to digital innovation and tap
                        into the power of the AI, by transforming and creating a
                        competitive advantage that will scale.
                    </p>

                    <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center group">
                        LEARN MORE
                        <svg
                            className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;