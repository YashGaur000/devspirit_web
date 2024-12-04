import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function CompanyContact() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-xl text-gray-600">
            We'd love to hear from you. Contact us through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center space-x-4 mb-4">
              <Mail className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
            </div>
            <p className="text-gray-600">info.devspirit@gmail.com</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center space-x-4 mb-4">
              <Phone className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
            </div>
            <p className="text-gray-600">Support: +91 9354992219</p>
          </div>

          {/* <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center space-x-4 mb-4">
              <MapPin className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">Visit Us</h3>
            </div>
            <p className="text-gray-600">
              123 Tech Street<br />
              Silicon Valley, CA 94025<br />
              United States
            </p>
          </div> */}
        </div>

        {/* <div className="mt-12">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6661457280714!2d-122.08374688447637!3d37.422408879825695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1623252034980!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div> */}
      </div>
    </div>
  );
}