import React from 'react';

const caseStudies = [
  {
    title: 'Digital Transformation in Banking',
    client: 'Major National Bank',
    metrics: ['50% reduction in processing time', '99.99% uptime', '2M+ daily transactions'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Healthcare Data Management',
    client: 'Regional Hospital Network',
    metrics: ['100% HIPAA compliance', '45% cost reduction', '500k+ patient records'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Smart Manufacturing Solution',
    client: 'Global Manufacturing Corp',
    metrics: ['35% efficiency increase', '40% less downtime', '$2M annual savings'],
    image: 'https://images.unsplash.com/photo-1565793979206-10951493332d?auto=format&fit=crop&q=80&w=800'
  }
];

export function SolutionsCaseStudies() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Success Stories</h2>
          <p className="mt-4 text-xl text-gray-600">
            Real results from our industry solutions
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-blue-600 mb-4">{study.client}</p>
                <div className="space-y-2">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}