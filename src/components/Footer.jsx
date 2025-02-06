import React from 'react';
import arrowIcon from '../assets/images/Arrow.png';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 px-4">
            <div className="max-w-7xl mx-auto relative">
                <div className="flex justify-center mb-8">
                    <img src={arrowIcon} alt="Arrow" className="w-10 h-10 transform " />
                </div>
                <hr className="border-white mb-12" />

                {/* Rest of the footer content remains unchanged */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Reach us section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Reach us</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>(+1) 510-945-8169</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>info@smarttrak.co</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>300 S Main Street, Suite 212 Holly Springs, NC 27540</span>
                            </div>
                        </div>
                    </div>

                    {/* Company section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-gray-300">About</a></li>
                            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                            <li><a href="#" className="hover:text-gray-300">Blogs</a></li>
                        </ul>
                    </div>

                    {/* Legal section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Legal</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gray-300">Terms & Services</a></li>
                            <li><a href="#" className="hover:text-gray-300">Terms of Use</a></li>
                            <li><a href="#" className="hover:text-gray-300">Refund Policy</a></li>
                        </ul>
                    </div>

                    {/* Newsletter section */}
                    <div className="bg-[#0A0B1A] p-6 rounded-lg">
                        <h3 className="text-lg font-semibold mb-6">Join Our Newsletter</h3>
                        <div className="flex gap-2 mb-4">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 bg-transparent border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-indigo-500"
                            />
                            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-sm text-gray-400">* Will send you weekly updates for your better tool management.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;