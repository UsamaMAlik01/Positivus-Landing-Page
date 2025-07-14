import React from 'react';
import { Linkedin, Facebook, Twitter } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', url: '/' },
  { label: 'About us', url: '/about' },
  { label: 'Services', url: '/services' },
  { label: 'Use Cases', url: '/use-cases' },
  { label: 'Pricing', url: '/pricing' },
  { label: 'Blog', url: '/blog' },
];

const socialLinks = [
  { icon: Linkedin, url: 'https://linkedin.com', alt: 'LinkedIn' },
  { icon: Facebook, url: 'https://facebook.com', alt: 'Facebook' },
  { icon: Twitter, url: 'https://twitter.com', alt: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#191A23] rounded-t-[45px] max-w-[1241px] mx-auto px-[16px] md:px-[32px] lg:px-[60px] pt-[40px] md:pt-[48px] pb-[40px] flex flex-col gap-[40px] md:gap-[32px] lg:gap-[50px] mt-10" style={{ minHeight: 514 }}>
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-center gap-8 md:gap-6 lg:gap-[60px] w-full overflow-x-auto">
        {/* Logo, Nav, Socials - Desktop/Tablet */}
        <div className="hidden md:flex w-full flex-row flex-wrap items-center justify-between gap-6 md:gap-8 lg:gap-12">
          <Link to="/">
          <img src="/LogoWhite.png" alt="Positivus Logo" className="w-[150px] md:w-[180px] h-auto" />
          </Link>
          
          <nav className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 text-white font-space-grotesk text-base font-normal ml-0 md:ml-8 ">
            {navLinks.map(link =>
              <NavLink 
                key={link.label} 
                to={`${link.url}`} 
                className={({isActive}) => 
                  `hover:underline whitespace-nowrap p-2 rounded-md ${isActive ? '!bg-[#B9FF36] !text-black' : 'text-white'}`
                }
              >
                {link.label}
              </NavLink>
            )}
          </nav>
          <div className="flex flex-row gap-4 md:gap-6 ml-0 md:ml-8">
            {socialLinks.map(link => {
              const Icon = link.icon;
              return (
                <a key={link.alt} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.alt}>
                  <Icon size={32} className="text-white hover:text-[#B9FF66] transition" />
                </a>
              );
            })}
          </div>
        </div>
        {/* Mobile: Centered Logo, Nav, Socials */}
        <div className="flex flex-col md:hidden items-center w-full gap-4">
          <img src="/LogoWhite.png" alt="Positivus Logo" className="w-[150px] md:w-[180px] h-auto mx-auto" />
          <nav className="flex flex-col gap-2 text-white font-space-grotesk text-base font-normal items-center">
            {navLinks.map(link =>
              <NavLink 
                key={link.label} 
                to={`${link.url}`} 
                className={({isActive}) => 
                  `hover:underline bg-[#191A23] whitespace-nowrap p-2 rounded-md ${isActive ? '!bg-[#B9FF36] !text-black' : 'text-white'}`
                }
              >
                {link.label}
              </NavLink>
            )}
          </nav>
          <div className="flex flex-row gap-6 justify-center mt-2">
            {socialLinks.map(link => {
              const Icon = link.icon;
              return (
                <a key={link.alt} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.alt}>
                  <Icon size={32} className="text-white hover:text-[#B9FF66] transition" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      {/* Middle Section: Contact and Subscribe */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-6 lg:gap-0 w-full">
        {/* Contact Info */}
        <div className="flex flex-col gap-3 md:w-1/2 items-center md:items-start text-center md:text-left">
          <span className="inline-block bg-[#B9FF66] text-black font-bold rounded-md px-3 py-1 mb-2 w-fit font-space-grotesk text-lg">Contact us:</span>
          <span className="text-white font-space-grotesk text-base">Email: info@positivus.com</span>
          <span className="text-white font-space-grotesk text-base">Phone: 555-567-8901</span>
          <span className="text-white font-space-grotesk text-base">Address: 1234 Main St<br />Moonstone City, Stardust State 12345</span>
        </div>
        {/* Subscribe Box */}
        <form className="flex flex-col lg:flex-row items-center bg-[#23232B] rounded-[20px] p-6 md:p-6 lg:p-8 gap-4 lg:gap-0 md:ml-auto md:w-[300px] lg:w-[600px] w-full mt-6 md:mt-0">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 bg-transparent border border-white rounded-[12px] px-6 py-4 text-white font-space-grotesk text-base focus:outline-none mr-0 lg:mr-4 mb-4 lg:mb-0"
          />
          <button
            type="submit"
            className="bg-[#B9FF66] text-black font-bold rounded-[12px] px-8 py-4 font-space-grotesk text-base md:text-lg w-full lg:w-auto mt-2 lg:mt-0"
          >
            Subscribe to news
          </button>
        </form>
      </div>
      {/* Divider */}
      <hr className="border-t border-white/60 my-4" />
      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-white text-sm font-space-grotesk text-center">
        <span>© 2023 Positivus. All Rights Reserved.</span>
        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
}
