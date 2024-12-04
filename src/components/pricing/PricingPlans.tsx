import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    description: 'Perfect for small businesses and startups',
    price: {
      monthly: 299,
      annual: 249
    },
    features: [
      'Up to 5 team members',
      'Basic cloud infrastructure',
      'Standard security features',
      '8/5 support',
      '1TB storage',
      'API access'
    ]
  },
  {
    name: 'Pro',
    description: 'Ideal for growing businesses',
    price: {
      monthly: 599,
      annual: 499
    },
    features: [
      'Up to 20 team members',
      'Advanced cloud solutions',
      'Enhanced security suite',
      '24/7 priority support',
      '5TB storage',
      'Advanced API features',
      'Custom integrations'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: {
      monthly: 1299,
      annual: 1099
    },
    features: [
      'Unlimited team members',
      'Custom cloud architecture',
      'Advanced security & compliance',
      'Dedicated support team',
      'Unlimited storage',
      'Custom development',
      'White-label solutions',
      'Priority SLA'
    ]
  }
];

export function PricingPlans() {
  const [isAnnual, setIsAnnual] = React.useState(true);

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-4 mb-12">
            <span className={`text-lg ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual <span className="text-green-500 text-sm">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                plan.popular ? 'border-2 border-blue-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-gray-600">{plan.description}</p>
                <p className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-gray-600">/month</span>
                </p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 w-full py-3 px-4 rounded-md font-medium ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Choose {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}