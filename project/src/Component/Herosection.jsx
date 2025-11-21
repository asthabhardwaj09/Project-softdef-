import React from "react";
// Ensure these paths are correct in your project
import Bgimage from "../assets/Bgimage.jpg";
import Aglaonemaplant from "../assets/Aglaonemaplant.png";
import girlimage from "../assets/girlimage.png";
import play from '../assets/play.png'; 

const Herosection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0d1612] text-white overflow-hidden font-sans flex items-center">
      
      {/* --- Background Image --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={Bgimage}
          alt="background plant"
          className="w-full h-full object-cover opacity-40 md:opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1410] via-[#0b1410]/80 to-transparent"></div>
      </div>

      {/* --- Main Container --- */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* --- Left Column: Text Content --- */}
        <div className="flex flex-col justify-center relative lg:static">
          
          {/* HEADLINE: Earth's Exhale */}
          {/* Responsive Text: scaled down on mobile, full size on desktop */}
          <h1 className="
            text-[56px] md:text-[80px] lg:text-[118px]
            font-semibold leading-[1] tracking-normal opacity-75 text-white
            max-w-[798px] font-inter
            lg:absolute lg:top-[252px] lg:left-[43px]
            relative
          ">
            Earth’s Exhale
          </h1>

          {/* Spacer for Desktop layout alignment */}
          <div className="hidden lg:block lg:h-[400px]"></div>

          {/* DESCRIPTION TEXT */}
          <p className="
            mt-6 lg:mt-8 text-gray-300 leading-relaxed
            text-[18px] md:text-[23px]
            font-medium opacity-75 max-w-[775px]
          ">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's
            natural environment and its essential role in sustaining life.
          </p>

          {/* --- CTA BUTTONS ROW --- */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-10">
            
            {/* 1. BUY NOW BUTTON */}
            <button className="
                h-[64px] w-[217px]
                rounded-[12px]
                border-[2px] border-white
                bg-white/5 backdrop-blur-sm
                text-white 
                transition-all duration-300 
                flex items-center justify-center
                group
            ">
              <span className="text-[28px] font-normal leading-[1] tracking-normal">
                Buy Now
              </span>
            </button>
            
            {/* 2. CUSTOM PLAY BUTTON (Based on your specs) */}
            <div className="flex items-center gap-5 cursor-pointer group">
              {/* The Circle: Width 70, Height 70, Border 2px White */}
              <div className="
                  relative flex items-center justify-center
                  w-[70px] h-[70px]
                  rounded-full
                  border-[2px] border-white
                  opacity-100
                  transition-transform duration-300 group-hover:scale-105
              ">
                {/* The Play Shape: Width 34, Height 34, Angle -90deg */}
                {/* We use the Play image asset here as the shape */}
                <img 
                  src={play} 
                  alt="Play" 
                  className="
                    w-[34.0px] h-[34.0px]
                    opacity-75 
                    -rotate-90
                    rounded-[3px]
                    object-contain
                    /* If Play.png is transparent, we add background white if strictly needed, 
                       but usually icons are white themselves. 
                       If you need a white box behind the icon: bg-white */
                  "
                />
              </div>
              
              {/* Optional Text Label for UX */}
              <span className="text-lg font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                Live Demo
              </span>
            </div>

          </div>

          {/* Testimonial Card */}
          <div className="mt-16 md:mt-24 max-w-md">
            <div className="relative bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 flex gap-4 items-start transition-transform hover:scale-105 duration-300">
              <img
                src={girlimage}
                alt="Ronnie Hamill"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-white">Ronnie Hamill</span>
                  <div className="flex text-yellow-400 text-xs">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-300 leading-snug">
                  I can't express how thrilled I am with my new natural plants!
                  They bring such a fresh and vibrant energy to my home.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Right Column: Product Card --- */}
        <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative w-full max-w-[360px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-6 shadow-2xl">
            <div className="relative -mt-24 sm:-mt-32 mb-4 flex justify-center z-20">
              <img
                src={Aglaonemaplant}
                alt="Aglaonema"
                className="w-[240px] sm:w-[280px] md:w-[320px] object-contain drop-shadow-2xl"
              />
            </div>
            <div className="relative z-10 px-2 pb-4">
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Indoor Plant</p>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl sm:text-3xl font-light text-white">
                  Aglaonema plant
                </h2>
                <span className="text-2xl text-white/50 cursor-pointer hover:text-white hover:translate-x-1 transition-all">
                  ›
                </span>
              </div>
              <div className="flex items-center justify-between">
                <button className="px-6 py-2 rounded-full border border-white/30 text-sm hover:bg-white hover:text-black transition-colors">
                  Buy Now
                </button>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  <div className="w-2 h-2 rounded-full bg-white/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;