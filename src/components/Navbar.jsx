import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.jpg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black w-full py-5">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                {/* Logo on the left corner */}
                <div className="flex-shrink-0">
                    <img src={logo} alt="Logo" className="w-12 h-12" />
                </div>

                {/* Desktop Menu - Centered and extending till right */}
                <div className="hidden md:flex flex-grow justify-center">
                    <div className="bg-gray-400 rounded-full px-6 py-1 flex justify-around items-center space-x-10 w-full max-w-4xl">
                        <a href="#" className="text-gray-100 hover:text-white px-3 py-2">HOME</a>
                        <a href="#" className="text-gray-100 hover:text-white px-3 py-2">ABOUT US</a>
                        <a href="#" className="text-gray-100 hover:text-white px-3 py-2">SOLUTIONS</a>
                        <a href="#" className="text-gray-100 hover:text-white px-3 py-2">CAREER</a>
                        <a href="#" className="text-gray-100 hover:text-white px-3 py-2">CONTACT US</a>
                    </div>
                </div>

                {/* Mobile menu button on the right corner */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-300 hover:text-white"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Appears on the right */}
            {isOpen && (
                <div className="md:hidden flex justify-end">
                    <div className="bg-gray-200 rounded-lg mt-2 w-2/3">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#" className="text-gray-200 hover:text-white block px-3 py-2">HOME</a>
                            <a href="#" className="text-gray-200 hover:text-white block px-3 py-2">ABOUT US</a>
                            <a href="#" className="text-gray-200 hover:text-white block px-3 py-2">SOLUTIONS</a>
                            <a href="#" className="text-gray-200 hover:text-white block px-3 py-2">CAREER</a>
                            <a href="#" className="text-gray-200 hover:text-white block px-3 py-2">CONTACT US</a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar; 2