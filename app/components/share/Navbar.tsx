"use client";

import React, { useState } from 'react';
import Pbutton from './Pbutton'; // তোমার প্রজেক্টের পাথ অনুযায়ী ইমপোর্ট করবে

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const navLinks = [
        { name: 'Home', href: '#home', active: true },
        { name: 'Services', href: '#services', active: false },
        { name: 'About me', href: '#about', active: false },
        { name: 'Portfolio', href: '#portfolio', active: false },
        { name: 'Contact me', href: '#contact', active: false },
    ];

    return (
        // এখানে fixed এর বদলে sticky top-0 left-0 ব্যবহার করা হয়েছে
        // এতে করে ব্যানার সেকশন আর ওপরে উঠে যাবে না
        <nav className="sticky top-0 left-0 w-full bg-[#111111] text-[#FFFFFF] z-50 px-4 md:px-12 lg:px-20 py-4 shadow-md">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between">
                
                {/* --- LOGO SECTION --- */}
                <div className="shrink-0">
                    <span className="
                        font-k2d font-bold text-[24px] md:text-[30px]
                        leading-none tracking-[0.03em] text-justify
                        bg-[linear-gradient(90deg,#FA6E00_0%,#E60026_100%)]
                        bg-clip-text text-transparent select-none cursor-pointer
                    ">
                        HASAN RAFI AHMED
                    </span>
                </div>

                {/* --- DESKTOP NAVIGATION LINKS --- */}
                <div className="hidden lg:flex items-center gap-[40px]">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className={`
                                /* Typography from Figma */
                                font-lato font-bold text-[20px] 
                                leading-none tracking-[0.03em] text-justify
                                transition-colors duration-200
                                
                                /* Hover & Active States */
                                ${link.active 
                                    ? 'text-[#FD6F00]' 
                                    : 'text-[#959595] hover:text-[#FD6F00]'
                                }
                            `}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* --- DESKTOP BUTTON --- */}
                <div className="hidden lg:block">
                    <Pbutton text="Hire Me" />
                </div>

                {/* --- MOBILE HAMBURGER BUTTON --- */}
                <div className="lg:hidden flex items-center">
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none p-1 transition-transform duration-200 active:scale-95"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6l12 12" stroke="#FD6F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 12H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21 6H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21 18H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        )}
                    </button>
                </div>

            </div>

            {/* --- MOBILE DROPDOWN MENU --- */}
            <div className={`
                lg:hidden absolute top-full left-0 w-full bg-[#111111] border-t border-gray-800/50
                transition-all duration-300 ease-in-out overflow-hidden shadow-xl
                ${isOpen ? 'max-h-[450px] opacity-100 py-6' : 'max-h-0 opacity-0 pointer-events-none'}
            `}>
                <div className="flex flex-col items-center gap-6">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`
                                font-lato font-bold text-[20px] 
                                leading-none tracking-[0.03em]
                                transition-colors duration-200
                                ${link.active 
                                    ? 'text-[#FD6F00]' 
                                    : 'text-[#959595] hover:text-[#FD6F00]'
                                }
                            `}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-2">
                        <Pbutton text="Hire Me" onClick={() => setIsOpen(false)} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;