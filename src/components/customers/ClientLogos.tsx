import React from 'react';

const clients = [
  {
    name: 'Global Bank Corp',
    logo: 'https://images.unsplash.com/photo-1598120290162-8c03ec9c1f95?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Tech Innovators',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Healthcare Solutions',
    logo: 'https://images.unsplash.com/photo-1599305446868-59e861c36faa?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Retail Leaders',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200'
  }
];

export function ClientLogos() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-gray-600 text-sm font-semibold uppercase tracking-wide">
          Trusted by industry leaders worldwide
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
          {clients.map((client, index) => (
            <div key={index} className="col-span-1 flex justify-center">
              <img
                className="h-12 grayscale hover:grayscale-0 transition-all duration-300"
                src={client.logo}
                alt={client.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}