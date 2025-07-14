import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
// Navigation links with labels and anchor URLs
const navLinks = [
  { label: 'Home', url: '/' },          
  { label: 'About us', url: '/about' },
  { label: 'Services', url: '/services' },
  { label: 'Use Cases', url: '/use-cases' },
  { label: 'Pricing', url: '/pricing' },
  { label: 'Blog', url: '/blog' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 6th button details
  const quoteBtn = { label: 'Request a quote', url: '#quote' };

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50 mt-6 md:mt-20">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[68px] md:h-[70px] px-4 md:px-16 lg:px-[100px]">
        {/* Logo */}
        <div className="flex items-center h-[56px] py-2">
          <Link to="/" >
            <img
              src={'/Logo.jpg'}
              alt="Logo"
              className="h-7 max-w-[120px] md:h-9 md:max-w-[220px] w-auto object-contain"
            />
          </Link>
        </div>
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10 2xl:gap-[40px]">
          {navLinks.map(({ label, url }) => (
            <NavLink
              key={label}
              to={`${url}`}
              className={({ isActive }) => 
                `bg-transparent border-none outline-none font-space-grotesk text-sm md:text-base lg:text-[16px] font-normal leading-6 px-2 py-1 whitespace-nowrap hover:text-gray-700 transition-colors rounded-md cursor-pointer ${isActive ? '!bg-[#b9ff66] !text-black' : 'bg-white'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href={quoteBtn.url}
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector(quoteBtn.url);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="ml-2 font-space-grotesk text-sm md:text-base lg:text-[16px] font-normal leading-6 border border-gray-300 rounded-[14px] hover:bg-gray-50 transition-colors flex items-center justify-center whitespace-nowrap h-[68px] px-8 cursor-pointer"
            style={{ minWidth: 180 }}
          >
            {quoteBtn.label}
          </a>
        </div>
        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={40} className="md:w-10 md:h-10 w-7 h-7" /> : <Menu size={40} className="md:w-10 md:h-10 w-7 h-7" />}
          </button>
        </div>
      </div>
            {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-[68px] left-0 w-full flex flex-col items-center py-4 gap-2 z-40 animate-fade-in">
          {navLinks.map(({ label, url }) => (
            <NavLink
              key={label}
              to={`${url}`}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => 
                `w-11/12 text-left font-space-grotesk text-lg py-3 px-4 hover:bg-gray-100 rounded transition-colors whitespace-nowrap cursor-pointer ${isActive ? '!bg-[#B9FF66] !text-black' : 'bg-gray-100'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href={quoteBtn.url}
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector(quoteBtn.url);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-11/12 mt-2 font-space-grotesk text-lg py-3 px-4 border border-gray-300 rounded-[14px] hover:bg-gray-50 transition-colors flex items-center justify-center whitespace-nowrap h-[68px] cursor-pointer"
          >
            {quoteBtn.label}
          </a>
        </div>
      )}
    </nav>
  );
}
