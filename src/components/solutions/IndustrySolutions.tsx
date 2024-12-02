import React from 'react';
import { Building2, Stethoscope, ShoppingBag, Factory, Briefcase } from 'lucide-react';

const industries = [
  // {
  //   icon: <Bank className="h-8 w-8" />,
  //   title: 'Finance',
  //   description: 'Secure payment systems, fraud detection, and regulatory compliance solutions.',
  //   features: ['Digital Banking', 'Risk Management', 'Fraud Prevention']
  // },
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: 'Healthcare',
    description: 'HIPAA-compliant systems and digital health record management.',
    features: ['Patient Portals', 'Medical Records', 'Telemedicine']
  },
  {
    icon: <ShoppingBag className="h-8 w-8" />,
    title: 'Retail',
    description: 'Omnichannel commerce and inventory management solutions.',
    features: ['E-commerce', 'POS Systems', 'Inventory Control']
  },
  {
    icon: <Factory className="h-8 w-8" />,
    title: 'Manufacturing',
    description: 'Smart factory solutions and supply chain optimization.',
    features: ['IoT Integration', 'Process Automation', 'Quality Control']
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: 'Real Estate',
    description: 'Property management and virtual touring platforms.',
    features: ['Virtual Tours', 'Property Management', 'Market Analysis']
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: 'Professional Services',
    description: 'Workflow automation and client management tools.',
    features: ['CRM Systems', 'Resource Planning', 'Analytics']
  }
];

export function IndustrySolutions() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Solutions by Industry
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Specialized solutions tailored to your industry's unique challenges
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-blue-600 mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.title}</h3>
              <p className="text-gray-600 mb-4">{industry.description}</p>
              <ul className="space-y-2">
                {industry.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                Learn More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}