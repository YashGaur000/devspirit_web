import React from 'react';
import { Search } from 'lucide-react';

const categories = ['All', 'Cloud Computing', 'Cybersecurity', 'Digital Transformation', 'AI & ML', 'DevOps'];

export function BlogSearch() {
  return (
    <div className="bg-white py-8 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1 max-w-lg">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}