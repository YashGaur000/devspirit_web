import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The industry-specific solutions provided by TechPro transformed our operations. Their understanding of our sector's unique challenges made all the difference.",
    author: "Sarah Johnson",
    position: "CTO, Global Finance Corp",
    rating: 5
  },
  {
    quote: "Implementation was smooth, and the results exceeded our expectations. The healthcare-specific features perfectly matched our requirements.",
    author: "Dr. Michael Chen",
    position: "Director of IT, Healthcare Network",
    rating: 5
  },
  {
    quote: "Their retail solution helped us seamlessly integrate our online and offline channels. Customer satisfaction has improved significantly.",
    author: "Emily Rodriguez",
    position: "VP of Operations, Retail Chain",
    rating: 5
  }
];

export function SolutionsTestimonials() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Client Testimonials
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            What our clients say about our industry solutions
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}