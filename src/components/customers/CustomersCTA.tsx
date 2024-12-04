import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CustomersCTA() {
  return (
    <div className="bg-blue-700">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:py-16 lg:px-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Join our growing list of successful clients and start your digital transformation journey today.
              </p>
              <div className="mt-8 flex justify-center gap-x-4">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500">
                  View More Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}