import React from 'react';
import { ArrowRight, BarChart, Clock, DollarSign } from 'lucide-react';

const caseStudies = [
  {
    title: 'Global Financial Services Transformation',
    client: 'Major Investment Bank',
    challenge: 'Legacy systems causing delays and security vulnerabilities',
    solution: 'Cloud migration and security infrastructure modernization',
    results: [
      { icon: <Clock className="h-5 w-5" />, text: '60% faster transaction processing' },
      { icon: <DollarSign className="h-5 w-5" />, text: '40% reduction in operational costs' },
      { icon: <BarChart className="h-5 w-5" />, text: '99.99% system uptime achieved' }
    ],
    image: 'https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Healthcare Digital Transformation',
    client: 'Regional Hospital Network',
    challenge: 'Inefficient patient data management and communication',
    solution: 'Integrated healthcare management platform implementation',
    results: [
      { icon: <Clock className="h-5 w-5" />, text: '45% reduction in wait times' },
      { icon: <DollarSign className="h-5 w-5" />, text: '30% cost savings in operations' },
      { icon: <BarChart className="h-5 w-5" />, text: '95% patient satisfaction rate' }
    ],
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1000'
  }
];

export function DetailedCaseStudies() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured Case Studies</h2>
          <p className="mt-4 text-xl text-gray-600">
            Real solutions, real results
          </p>
        </div>

        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  <p className="text-blue-600 font-semibold mb-6">{study.client}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Results</h4>
                      <div className="space-y-3">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center space-x-3 text-gray-600">
                            <div className="text-blue-600">{result.icon}</div>
                            <span>{result.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="mt-8 inline-flex items-center text-blue-600 hover:text-blue-800">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}