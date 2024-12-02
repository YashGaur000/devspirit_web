import React from 'react';

const caseStudies = [
  {
    title: 'Cloud Migration Success',
    client: 'Global Retail Chain',
    description: 'Successfully migrated 500+ stores to cloud infrastructure, reducing operational costs by 40%.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Digital Transformation',
    client: 'Healthcare Provider',
    description: 'Implemented digital health records system, improving patient care efficiency by 60%.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Security Enhancement',
    client: 'Financial Institution',
    description: 'Deployed advanced cybersecurity solutions, preventing 99.9% of potential threats.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  }
];

export function CaseStudies() {
  return (
    <div id="case-studies" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Case Studies</h2>
          <p className="mt-4 text-xl text-gray-600">
            Real solutions for real business challenges
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-sm text-blue-600 mb-4">{study.client}</p>
                <p className="text-gray-600">{study.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}