import React from 'react';
import { ArrowRight } from 'lucide-react';

export function PricingHero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 pt-32 pb-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000"
          alt="Pricing Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Simple, Transparent Pricing</span>
            <span className="block text-blue-200">Choose the Perfect Plan for Your Business</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            No hidden fees. No surprises. Just powerful technology solutions to help your business grow.
          </p>
          <div className="mt-8 flex justify-center gap-x-4">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}