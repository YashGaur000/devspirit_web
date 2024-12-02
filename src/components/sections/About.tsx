import React from 'react';

export function About() {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Us</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Delivering innovative IT solutions with a commitment to excellence since 2010
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses through innovative technology solutions that drive growth and success.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading provider of transformative IT solutions that shape the future of business.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Innovation, integrity, excellence, and commitment to client success guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}