import React from 'react';
import { Clock, User } from 'lucide-react';

const featuredPosts = [
  {
    id: 1,
    title: 'The Future of Cloud Computing: Trends to Watch in 2024',
    excerpt: 'Explore the latest developments in cloud technology and what they mean for your business.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    category: 'Cloud Computing'
  },
  {
    id: 2,
    title: 'Cybersecurity Best Practices for Remote Teams',
    excerpt: 'Essential security measures every organization should implement for remote work.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    author: 'Michael Chen',
    date: 'March 12, 2024',
    category: 'Cybersecurity'
  }
];

export function FeaturedPosts() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">{post.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}