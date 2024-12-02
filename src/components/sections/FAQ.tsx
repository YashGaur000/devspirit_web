import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including healthcare, finance, retail, manufacturing, and technology. Our solutions are customized to meet the specific needs of each sector.'
  },
  {
    question: 'How do you ensure data security?',
    answer: 'We implement multiple layers of security including encryption, firewalls, regular security audits, and compliance with industry standards like GDPR and HIPAA.'
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on scope and complexity. We provide detailed project plans during consultation, typically ranging from 2-6 months for medium-sized projects.'
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes, we provide 24/7 technical support and maintenance services. We also offer different support packages tailored to your needs.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Common questions about our services and solutions
          </p>
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex justify-between items-center p-6 bg-white rounded-lg shadow-sm hover:bg-gray-50"
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