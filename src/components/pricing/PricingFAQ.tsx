import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How does billing work?',
    answer: 'We offer both monthly and annual billing options. Annual plans come with a 20% discount. You can upgrade, downgrade, or cancel your plan at any time.'
  },
  {
    question: 'Can I change plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we will prorate any payments.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and can also arrange enterprise billing via invoice for annual contracts.'
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial on our Pro plan. No credit card required. You can experience all features risk-free.'
  },
  {
    question: 'What happens after my trial ends?',
    answer: 'After your trial ends, you can choose to upgrade to a paid plan or downgrade to our Basic plan. We will notify you before the trial expires.'
  },
  {
    question: 'Do you offer custom enterprise solutions?',
    answer: 'Yes, we provide custom enterprise solutions tailored to your specific needs. Contact our sales team for a personalized quote.'
  }
];

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to know about our pricing and billing
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex justify-between items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-6 bg-white rounded-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}