import React from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Implementing Zero Trust Security in Enterprise Networks',
    excerpt: 'A comprehensive guide to implementing zero trust architecture in your organization.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    author: 'David Wilson',
    date: 'March 10, 2024',
    category: 'Cybersecurity'
  },
  {
    id: 2,
    title: 'AI-Powered Analytics: Transform Your Data Strategy',
    excerpt: 'How artificial intelligence is revolutionizing business analytics and decision-making.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    author: 'Emily Zhang',
    date: 'March 8, 2024',
    category: 'AI & ML'
  },
  {
    id: 3,
    title: 'DevOps Best Practices for 2024',
    excerpt: 'Stay ahead of the curve with these essential DevOps practices and tools.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    author: 'Alex Thompson',
    date: 'March 5, 2024',
    category: 'DevOps'
  }
];

export function BlogGrid() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">{post.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <button className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
}