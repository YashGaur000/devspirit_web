import React from 'react';
import { Briefcase, Coffee, Users, Award } from 'lucide-react';

const jobs = [
  {
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time'
  },
  {
    title: 'Cloud Solutions Architect',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time'
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'New York, NY',
    type: 'Full-time'
  }
];

const benefits = [
  {
    icon: <Coffee className="h-6 w-6" />,
    title: 'Work-Life Balance',
    description: 'Flexible working hours and remote options'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Great Team',
    description: 'Collaborative and inclusive environment'
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Growth',
    description: 'Career development and learning opportunities'
  }
];

export function CareersSection() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Join Our Team</h2>
          <p className="mt-4 text-xl text-gray-600">
            Build your career with a company that's shaping the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Open Positions</h3>
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{job.title}</h4>
                      <p className="text-gray-600">{job.department}</p>
                      <p className="text-sm text-gray-500 mt-2">{job.location} • {job.type}</p>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Join Us?</h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}