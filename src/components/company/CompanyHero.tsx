import React from 'react';

export function CompanyHero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 pt-32 pb-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
          alt="Company Office"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Our Company</span>
            <span className="block text-blue-200">Building Tomorrow's Technology</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover our story, our people, and our commitment to delivering innovative technology solutions that transform businesses.
          </p>
        </div>
      </div>
    </div>
  );
}