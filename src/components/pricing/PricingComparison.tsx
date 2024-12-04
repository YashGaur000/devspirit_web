import React from 'react';
import { Check, X } from 'lucide-react';

const features = [
  {
    category: 'Core Features',
    items: [
      {
        name: 'Cloud Infrastructure',
        basic: true,
        pro: true,
        enterprise: true,
        description: 'Secure and scalable cloud hosting'
      },
      {
        name: 'Team Members',
        basic: '5 users',
        pro: '20 users',
        enterprise: 'Unlimited',
        description: 'Number of team members allowed'
      },
      {
        name: 'Storage',
        basic: '1TB',
        pro: '5TB',
        enterprise: 'Unlimited',
        description: 'Total storage capacity'
      }
    ]
  },
  {
    category: 'Security',
    items: [
      {
        name: 'SSL Certificates',
        basic: true,
        pro: true,
        enterprise: true,
        description: 'Secure data transmission'
      },
      {
        name: 'Advanced Security Suite',
        basic: false,
        pro: true,
        enterprise: true,
        description: 'Enhanced security features'
      },
      {
        name: 'Custom Security Policies',
        basic: false,
        pro: false,
        enterprise: true,
        description: 'Tailored security configurations'
      }
    ]
  },
  {
    category: 'Support',
    items: [
      {
        name: 'Support Coverage',
        basic: '8/5',
        pro: '24/7',
        enterprise: '24/7 Priority',
        description: 'Available support hours'
      },
      {
        name: 'Dedicated Support Team',
        basic: false,
        pro: false,
        enterprise: true,
        description: 'Assigned support specialists'
      },
      {
        name: 'SLA Guarantee',
        basic: false,
        pro: true,
        enterprise: true,
        description: 'Service level agreement'
      }
    ]
  }
];

export function PricingComparison() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Compare Plans</h2>
          <p className="mt-4 text-xl text-gray-600">
            Detailed comparison of all features across plans
          </p>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-6 px-6 text-left text-lg font-semibold text-gray-900">Features</th>
                <th className="py-6 px-6 text-center text-lg font-semibold text-gray-900">Basic</th>
                <th className="py-6 px-6 text-center text-lg font-semibold text-gray-900">Pro</th>
                <th className="py-6 px-6 text-center text-lg font-semibold text-gray-900">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((category, categoryIndex) => (
                <React.Fragment key={categoryIndex}>
                  <tr className="bg-gray-50">
                    <td
                      colSpan={4}
                      className="py-4 px-6 text-left text-lg font-semibold text-gray-900"
                    >
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((feature, featureIndex) => (
                    <tr key={featureIndex} className="border-t border-gray-200">
                      <td className="py-4 px-6">
                        <div className="text-sm font-medium text-gray-900">{feature.name}</div>
                        <div className="text-sm text-gray-500">{feature.description}</div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof feature.basic === 'boolean' ? (
                          feature.basic ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-gray-900">{feature.basic}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof feature.pro === 'boolean' ? (
                          feature.pro ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-gray-900">{feature.pro}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof feature.enterprise === 'boolean' ? (
                          feature.enterprise ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-gray-900">{feature.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}