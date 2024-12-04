import React from 'react';
import { Mail } from 'lucide-react';

export function BlogSubscribe() {
  return (
    <div className="bg-blue-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:py-16 lg:px-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Stay Updated with Our Newsletter
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Get the latest insights, tips, and trends in technology delivered directly to your inbox.
              </p>
              <form className="mt-8 sm:flex justify-center">
                <div className="min-w-0 flex-1">
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <span className="flex items-center justify-center">
                      <Mail className="h-5 w-5 mr-2" />
                      Subscribe
                    </span>
                  </button>
                </div>
              </form>
              <p className="mt-3 text-sm text-blue-200">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}