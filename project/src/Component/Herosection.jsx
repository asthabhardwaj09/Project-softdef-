import React from "react";
import Aglaonemaplant from "../assets/Aglaonemaplant.png";
import girlimage from "../assets/girlimage.png";
import Play from '../assets/Play.png'; 
import star from '../assets/star.png';
import Rectangle_two from '../assets/Rectangle_two.png'

const Herosection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#0d1612] text-white overflow-hidden font-sans flex items-center">

      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="w-[802px] h-[280px] top-[252px] left-[39px]">

          {/* Heading */}
          <div>
            <h1 className="
              text-[56px] md:text-[80px] lg:text-[118px]
              font-semibold leading-[1] tracking-normal opacity-75 text-white
              max-w-[798px] font-inter
              lg:absolute lg:top-[252px] lg:left-[43px]
              relative drop-shadow-lg
            ">
              Earth’s Exhale
            </h1>
            <div>
            <p className="
              relative mt-6 text-lg 
              lg:absolute lg:top-[391px] lg:left-[51px]
              lg:w-[775px] lg:h-[56px]
              lg:mt-0
              font-inter
              font-medium
              lg:text-[23px]
              leading-[1]
              tracking-normal
              text-white
              opacity-75
              flex items-center
            ">
              "Earth Exhale" symbolizes the purity and vitality of the Earth's
              natural environment and its essential role in sustaining life.
            </p>
          </div>
          </div>

          {/* Paragraph */}
          {/* <div>
            <p className="
              relative mt-6 text-lg 
              lg:absolute lg:top-[391px] lg:left-[51px]
              lg:w-[775px] lg:h-[56px]
              lg:mt-0
              font-inter
              font-medium
              lg:text-[23px]
              leading-[1]
              tracking-normal
              text-white
              opacity-75
              flex items-center
            ">
              "Earth Exhale" symbolizes the purity and vitality of the Earth's
              natural environment and its essential role in sustaining life.
            </p>
          </div> */}

          <div className="hidden lg:block lg:h-[480px]"></div>

          {/* Buttons Section */}
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-10 lg:mt-0 lg:ml-[39px]">

              {/* Buy Button */}
              <div>
                <button className="
                    h-[64px] w-[217px]
                    rounded-[12px]
                    border-[2px] border-white
                    bg-white/5 backdrop-blur-sm
                    text-white 
                    transition-all duration-300 
                    flex items-center justify-center
                    group shadow-lg
                ">
                  <span className="text-[28px] font-normal leading-[1] tracking-normal">
                    Buy Now
                  </span>
                </button>
              </div>

              {/* Live Demo */}
              <div>
                <div className="flex items-center gap-5 cursor-pointer group">
                  <div className="
                      relative flex items-center justify-center
                      w-[70px] h-[70px]
                      rounded-full
                      border-[2px] border-white
                      opacity-100
                      bg-black/10 backdrop-blur-sm
                      transition-transform duration-300
                  ">
                    <img 
                      src={Play} 
                      alt="Play" 
                      className="w-[34px] h-[34px] opacity-75 -rotate-90 rounded-[3px] object-contain"
                    />
                  </div>
                  <span className="text-lg font-medium opacity-90 transition-opacity drop-shadow-md">
                    Live Demo
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Review Card */}
          <div>
            <div className="mt-16 md:mt-24 max-w-md lg:ml-[39px]">
              <div className="relative bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 flex gap-4 items-start transition-transform duration-300 shadow-xl">
                
                {/* Profile image */}
                <div>
                  <img
                    src={girlimage}
                    alt="Ronnie Hamill"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20"
                  />
                </div>

                {/* Text */}
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
        </div>
        <div className="relative">
            <img
                src={Rectangle_two }
                alt="Rectangle_two"
                className="
                absolute 
                w-[512px] 
                h-[719px] 
                top-[119px] 
                left-[1164px]
                z-10
                "
            />
        </div>


      </div>
    </section>
  );
};

export default Herosection;
