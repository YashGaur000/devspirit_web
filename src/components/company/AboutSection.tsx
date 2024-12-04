import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

export function AboutSection() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About TechPro Solutions</h2>
          <p className="mt-4 text-xl text-gray-600">
            Leading the digital transformation journey since 2010
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Target className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses through innovative technology solutions that drive growth and success.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Eye className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading provider of transformative IT solutions that shape the future of business.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Heart className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600">
              Innovation, integrity, excellence, and commitment to client success guide everything we do.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
              alt="Team Collaboration"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our History</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="font-semibold text-gray-900">2010</p>
                <p className="text-gray-600">Founded with a vision to transform IT services</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="font-semibold text-gray-900">2015</p>
                <p className="text-gray-600">Expanded to international markets</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="font-semibold text-gray-900">2018</p>
                <p className="text-gray-600">Launched innovative cloud solutions division</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="font-semibold text-gray-900">2023</p>
                <p className="text-gray-600">Recognized as industry leader in digital transformation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}