"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-purple-900 to-indigo-800 py-16 font-[sans-serif]">
        {/* Optimized Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://readymadeui.com/cardImg.webp" 
            alt="Background Image"
            layout="fill"
            objectFit="cover" 
            quality={75} 
            className="opacity-50"
          />
        </div>

        {/* Text Content */}
        <div className="relative max-w-screen-xl mx-auto px-6 md:px-8 lg:px-16 z-10 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 hover:text-orange-400 hover:underline transition-all duration-300">
            Welcome to My Blogs
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12">
            <span className="hover:text-orange-400 hover:underline transition-all duration-300">
              Transforming the Future with Artificial Intelligence
            </span>
            <br />
            <span className="hover:text-orange-400 hover:underline transition-all duration-300">
              Exploring the World of Artificial Intelligence
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
