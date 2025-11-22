import React from "react";
import Plant from "../assets/Plant.png"; 
import NavbarImg from '../assets/Navbar.png';
import Search from '../assets/Search.png';
import Bag from '../assets/Bag.png';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 pt-8 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">

        {/* --- Left: Logo Section --- */}
        <div className="flex items-center gap-3">
          <div className="w-[48px] h-[48px] relative flex items-center">
            <img 
                src={Plant} 
                alt="Logo" 
                className="w-[48px] h-[48px] object-contain"
            />
          </div>
          <span className="text-white text-2xl font-bold tracking-wide">
            FloraVision.
          </span>
        </div>

        {/* --- Center Image (inline flex to align in same row) --- */}
        <div className="hidden lg:flex justify-center flex-1">
          <img 
            src={NavbarImg} 
            alt="Navigation Links" 
            style={{ width: '531px', height: '35px' }}
            className="object-contain select-none"
          />
        </div>

        {/* --- Right Icons --- */}
        <div className="flex items-center gap-8 md:gap-10">

          {/* Search Icon */}
          <button className="opacity-75 transition-opacity">
            <img 
              src={Search} 
              alt="Search" 
              className="w-[26px] h-[26px] object-contain" 
            />
          </button>

          {/* Bag Icon */}
          <button className="opacity-75 transition-opacity relative">
             <img 
              src={Bag} 
              alt="Bag" 
              className="w-[26px] h-[26px] object-contain" 
            />
          </button>

          {/* Hamburger Menu */}
          <button className="text-white transition-opacity ml-2">
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
