import React from 'react';
import { Monitor, Shield, Cloud, Database, Code, Settings } from 'lucide-react';

const services = [
  {
    icon: <Cloud className="h-8 w-8" />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services tailored to your needs.'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your business assets.'
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Custom Development',
    description: 'Bespoke software solutions designed for your specific requirements.'
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights for better decision-making.'
  },
  {
    icon: <Monitor className="h-8 w-8" />,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to drive your business forward.'
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: 'Managed Services',
    description: '24/7 monitoring and management of your IT infrastructure.'
  }
];

export function Services() {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive IT solutions to power your business growth
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}