import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div id="home" className="relative bg-gradient-to-r from-blue-900 to-blue-700 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Transform Your Business</span>
            <span className="block text-blue-200">With Modern Technology</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            We deliver cutting-edge IT solutions that drive growth, efficiency, and innovation for businesses worldwide.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <button className="rounded-md bg-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400">
              Learn More
            </button>
            <button className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-gray-100">
              Get in Touch <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}