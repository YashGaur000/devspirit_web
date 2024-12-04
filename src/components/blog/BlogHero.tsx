import React from 'react';

export function BlogHero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 pt-32 pb-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2000"
          alt="Blog Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Tech Insights & Updates</span>
            <span className="block text-blue-200">Stay Ahead in Technology</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover the latest trends, insights, and best practices in technology, digital transformation, and IT solutions.
          </p>
        </div>
      </div>
    </div>
  );
}