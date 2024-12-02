import React from 'react';

export function SolutionsHero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 pt-32 pb-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
          alt="Technology Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Industry-Leading</span>
            <span className="block text-blue-200">Technology Solutions</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Tailored solutions that drive innovation and growth across diverse industries.
            Discover how we can transform your business with cutting-edge technology.
          </p>
        </div>
      </div>
    </div>
  );
}