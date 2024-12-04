import React from 'react';
import { Handshake, BarChart, Shield, Users } from 'lucide-react';

export function PartnerSection() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Partner With Us</h2>
          <p className="mt-4 text-xl text-gray-600">
            Join our partner ecosystem and grow your business with TechPro Solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
              alt="Partnership"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Partnership Benefits</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Handshake className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Strategic Alliance</h4>
                  <p className="text-gray-600">Access to our extensive network and resources</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <BarChart className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Growth Opportunities</h4>
                  <p className="text-gray-600">Expand your market reach and revenue potential</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Technical Support</h4>
                  <p className="text-gray-600">Dedicated partner support and training resources</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Community</h4>
                  <p className="text-gray-600">Join a network of industry-leading professionals</p>
                </div>
              </div>
            </div>

            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}