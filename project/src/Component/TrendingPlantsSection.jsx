import React from "react";
// Replace these with your actual image paths
import Trending1 from "../assets/Trending1.png"; // The large leafy plant on the left
import Trending2 from "../assets/Trending2.png"; // The succulent on the right

const TrendingPalntsSection = () => {
  return (
    <section className="w-full bg-[#0d1612] py-24 relative overflow-hidden">
      {/* Optional subtle background overlay to blend with hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1612] to-[#09100d] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex justify-center mb-32">
          <h2 className="text-3xl md:text-4xl font-semibold text-white relative inline-block py-2 px-6 border-2 border-white/20 rounded-lg uppercase tracking-wider">
            Our Trendy plants
            {/* Decorative lines beneath title */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-[2px] bg-white/20"></div>
          </h2>
        </div>

        <div className="flex flex-col gap-36">
          {/* --- Card 1 (Image Left, Text Right) --- */}
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-md rounded-[50px] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center transition-transform hover:border-white/30 duration-300">
            {/* Plant Image (Popping out top-left) */}
            <div className="lg:col-span-2 relative -mt-32 md:-mt-40 lg:-mt-48 flex justify-center lg:justify-start">
              {/* Ensure this image is a transparent PNG */}
              <img
                src={Trending1}
                alt="Desk Decoration Plant"
                className="w-auto h-[350px] md:h-[450px] lg:h-[500px] object-contain drop-shadow-2xl"
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-3 text-white flex flex-col justify-center">
              <h3 className="text-2xl md:text-4xl font-semibold mb-4">
                For Your Desks Decorations
              </h3>
              <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
              </p>
              <div className="text-3xl font-light text-white mb-8">
                Rs. 599/-
              </div>

              <div className="flex items-center gap-4">
                <button className="px-8 py-3 rounded-full border border-white/50 text-white hover:bg-white hover:text-[#0d1612] transition-all duration-300 uppercase tracking-widest text-sm font-medium">
                  Explore
                </button>
                 {/* Shopping Bag Icon */}
                <button className="w-12 h-12 flex items-center justify-center rounded-full border border-white/50 hover:bg-white hover:text-[#0d1612] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* --- Card 2 (Image Right, Text Left) --- */}
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-md rounded-[50px] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center transition-transform hover:border-white/30 duration-300">
             {/* Content (Order 2 on mobile, Order 1 on desktop) */}
            <div className="lg:col-span-3 text-white flex flex-col justify-center order-2 lg:order-1">
              <h3 className="text-2xl md:text-4xl font-semibold mb-4">
                For Your Desks Decorations
              </h3>
              <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.
              </p>
              <div className="text-3xl font-light text-white mb-8">
                Rs. 399/-
              </div>

              <div className="flex items-center gap-4">
                <button className="px-8 py-3 rounded-full border border-white/50 text-white hover:bg-white hover:text-[#0d1612] transition-all duration-300 uppercase tracking-widest text-sm font-medium">
                  Explore
                </button>
                 {/* Shopping Bag Icon */}
                 <button className="w-12 h-12 flex items-center justify-center rounded-full border border-white/50 hover:bg-white hover:text-[#0d1612] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </button>
              </div>
            </div>

             {/* Plant Image (Popping out top-right) - Order 1 mobile, Order 2 desktop */}
             <div className="lg:col-span-2 relative -mt-32 md:-mt-40 lg:-mt-48 flex justify-center lg:justify-end order-1 lg:order-2">
              {/* Ensure this image is a transparent PNG */}
              <img
                src={Trending2}
                alt="Desk Decoration Succulent"
                className="w-auto h-[300px] md:h-[400px] lg:h-[450px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingPalntsSection;