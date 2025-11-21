import React from "react";
import Plant from "../assets/Plant.png"; 
import NavbarImg from '../assets/Navbar.png'; // The center navigation image
import Search from '../assets/Search.png';
import Bag from '../assets/Bag.png';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 pt-8 px-6 md:px-12">
      {/* Container to manage width and spacing */}
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        
        {/* --- Left: Logo Section --- */}
        <div className="flex items-center gap-3">
          {/* Plant Icon - Width 48, Height 48 */}
          <div className="w-[48px] h-[48px] relative">
            <img 
                src={Plant} 
                alt="FloraVision Logo" 
                className="w-full h-full object-contain"
            />
          </div>
          
          {/* Logo Text */}
          <span className="text-white text-2xl font-bold tracking-wide">
            FloraVision.
          </span>
        </div>

        {/* --- Center: Navigation Image --- */}
        {/* Replacing text text with your 'Navbar.png' image */}
        {/* Using explicit dimensions 531x35 as requested */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-[64px]">
           <img 
             src={NavbarImg} 
             alt="Navigation Links" 
             style={{ width: '531px', height: '35px' }}
             className="object-contain select-none"
           />
        </div>

        {/* --- Right: Icons --- */}
        <div className="flex items-center gap-8 md:gap-10">
          {/* Search Icon - Width 26, Height 26 */}
          <button className="opacity-75 hover:opacity-100 transition-opacity">
            <img 
              src={Search} 
              alt="Search" 
              className="w-[26px] h-[26px] object-contain" 
            />
          </button>

          {/* Shopping Bag Icon - Width 26, Height 26 */}
          <button className="opacity-75 hover:opacity-100 transition-opacity relative">
             <img 
              src={Bag} 
              alt="Bag" 
              className="w-[26px] h-[26px] object-contain" 
            />
          </button>

          {/* Hamburger Menu - Using SVG since 'Navbar.png' is now used for the center */}
          <button className="text-white hover:opacity-80 transition-opacity ml-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;