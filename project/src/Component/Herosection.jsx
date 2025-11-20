import React from "react";
import Bgimage from "../assets/Bgimage.jpg";
import Aglaonemaplant from "../assets/Aglaonemaplant.png";
import girlimage from "../assets/girlimage.png";

const Herosection = () => {
  return (
    <section className="w-full bg-[#0f1f16] text-white relative overflow-hidden">
      <img
        src={Bgimage}
        alt="background plant"
        className="absolute left-1/2 transform -translate-x-1/2 top-12 w-[900px] max-w-none opacity-95 pointer-events-none"
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 relative">
        <div className="max-w-[720px] relative z-30">
          <h1 className="text-[64px] md:text-[118px] font-semibold leading-[0.95] opacity-75 top-[252px] h-[143px] w-[798px] left-[43px]">
            Earth’s Exhale
          </h1>

          <p className="text-[15px] md:text-[18px] mt-4 max-w-[620px] opacity-80">
            “Earth Exhale” symbolizes the purity and vitality of the Earth's
            natural environment and its essential role in sustaining life.
          </p>

          <div className="flex items-center gap-6 mt-8">
            <button className="px-6 py-3 text-[16px] md:text-[18px] border border-white/60 rounded-full backdrop-blur-sm">
              Buy Now
            </button>

            <button className="flex items-center gap-4 text-[16px] md:text-[18px]">
              <span className="w-[48px] h-[48px] flex items-center justify-center border border-white/60 rounded-full">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                </svg>
              </span>
              <span className="opacity-90">Live Demo…</span>
            </button>
          </div>
        </div>

        <div className="absolute left-6 bottom-12 w-[320px] bg-white/6 backdrop-blur-md rounded-xl border border-white/10 p-4 flex gap-3 items-start z-30">
          <img
            src={girlimage}
            alt="avatar"
            className="w-[64px] h-[64px] rounded-[86px] top-[742px] left-[70px]"
          />

          <div className="text-sm w-[409px] h-[237px] top-[705px] left-[43px] border-[1px]">
            <div className="flex items-center gap-2">

              <span className="font-semibold">Ronnie Hamill</span>
              <span className="text-yellow-400 text-xs">★★★★★</span>
            </div>
            <p className="text-[17px] mt-2 opacity-80 font-inter w-[341px] h-[23px]">
              I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
            </p>
          </div>
        </div>

        <div className="absolute right-12 top-8 w-[380px] z-40">
          <div
            className="relative bg-white/6 backdrop-blur-xl rounded-[28px] border border-white/10 p-6 shadow-2xl overflow-visible"
            style={{ minHeight: "380px" }}
          >
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-[512px] h-[644px] rounded-xl overflow-hidden border-[1px]">
              <img
                src={Aglaonemaplant}
                alt="Aglaonema"
                className="w-[459px] h-[459px] top-[119px] left-[1198px]"
              />
            </div>

            <div className="mt-[120px]">
              <p className="text-sm font-light w-[400px] text-[23px] opacity-80 text-white">
                Indoor Plant
              </p>

              <h2 className="text-[20px] font-semibold mt-1 tracking-tight">
                Aglaonema plant
              </h2>

              <div className="flex items-center justify-between mt-4">
                <button className="px-4 py-2 border border-white/60 rounded-full text-sm">
                  Buy Now
                </button>

                <div className="text-white/80 text-2xl select-none">›</div>
              </div>

              <div className="flex items-center gap-2 justify-center mt-6">
                <span className="w-3 h-1.5 rounded-full bg-white/80"></span>
                <span className="w-2 h-1.5 rounded-full bg-white/40"></span>
                <span className="w-2 h-1.5 rounded-full bg-white/40"></span>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/5"></div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#07120f] via-transparent to-transparent pointer-events-none z-20"></div>
      </div>
    </section>
  );
};

export default Herosection;
