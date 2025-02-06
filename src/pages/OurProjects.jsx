import React from 'react';
import ProjectCard from '../components/HomePageComponents/ProjectCard';  // Assuming you have this component in a separate file

// Import images from assets/images folder
import image1 from '../assets/images/logo.jpg';
import image2 from '../assets/images/logo.jpg';
import image3 from '../assets/images/logo.jpg';

const OurProjects = () => {
    const projects = [
        {
            title: 'Smart Solar Energy',
            subtitle: 'Management',
            icon: image1,  // Use the imported image here
        },
        {
            title: 'Advanced AI for',
            subtitle: 'Manufacturing',
            icon: image2,  // Use the imported image here
        },
        {
            title: 'Predictive',
            subtitle: 'Maintenance',
            icon: image3,  // Use the imported image here
        },
    ];

    return (
        <div className="bg-[#080915] min-h-screen w-full">
            <div className="container mx-auto px-4 py-20">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
                    {/* Left Section */}
                    <div className="lg:max-w-xl">
                        <h2 className="text-purple-500 text-sm font-medium tracking-wider mb-4">
                            OUR AI PROJECTS
                        </h2>
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Redefine the way you do business with Smarttrak Solutions
                        </h1>
                        <p className="text-gray-300 mb-8">
                            Our purpose is to deliver excellence in service and execution
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

                    {/* Right Section - Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:flex-1 h-full"> {/* Increased gap here */}
                        {projects.map((project, index) => (
                            <ProjectCard key={index} title={`${project.title}\n${project.subtitle}`} icon={project.icon} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProjects;
