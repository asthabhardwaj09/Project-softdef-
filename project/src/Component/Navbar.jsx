import React, { useState } from 'react';
import { Menu, Search, ShoppingBag, ChevronDown } from "lucide-react";

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f160f] text-white shadow-md backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        alt="FloraVision logo"
                        className="w-8 h-8 drop-shadow-lg"
                    />
                    <h1 className="text-xl font-semibold tracking-wide ">
                        FloraVision.
                    </h1>
                </div>

                {/* Center Menu */}
                <ul className="hidden md:flex items-center gap-10 text-sm font-light font-handwriting">
                    <li className="cursor-pointer hover:text-green-300 transition">Home</li>

                    <li
                        className="relative cursor-pointer flex items-center gap-1 hover:text-green-300 transition"
                    >
                        Plants Type <ChevronDown size={16} />
                    </li>

                    <li className="cursor-pointer hover:text-green-300 transition">More</li>
                    <li className="cursor-pointer hover:text-green-300 transition">Contact</li>
                </ul>

                {/* Right Icons */}
                <div className="flex items-center gap-6">
                    <Search className="cursor-pointer hover:text-green-300 transition" />
                    <ShoppingBag className="cursor-pointer hover:text-green-300 transition" />
                    <Menu className="cursor-pointer hover:text-green-300 md:hidden transition" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
