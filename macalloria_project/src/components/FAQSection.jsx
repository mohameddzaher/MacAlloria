import React, { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const FAQSection = () => {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const faqs = [
    {
      _id: '1',
      question: 'How can I place an order?',
      answer: (
  <div className="flex flex-col gap-3 text-sm text-gray-700">
    <p className="mb-1 font-medium text-gray-800">By contacting us :</p>

    <div className="flex items-center gap-2">
      <FaPhoneAlt className="text-green-700" />
      <span>Call / WhatsApp: +90 555 170 7581</span>
    </div>

    <div className="flex items-center gap-2">
      <FaEnvelope className="text-blue-800" />
      <span>Email: info@alloriaindustry.com</span>
    </div>
  </div>
),
    },
    {
      _id: '2',
      question: 'How many years warranty do you offer?',
      answer: 'We offer a 3-year warranty period.',
    },
    {
      _id: '3',
      question: 'Do you offer international delivery everywhere?',
      answer: 'Yes, we provide delivery service everywhere through our shipping partners.',
    },
  ];

  const toggleAnswer = (id) => {
    setOpenQuestionId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-white py-8">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <h2 className="text-2xl font-bold text-center text-[#03261d] mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq._id}
              className="border border-gray-200 rounded-xl shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleAnswer(faq._id)}
                className="w-full text-left px-4 py-3 flex justify-between items-center bg-gray-900 hover:bg-gray-800 rounded-md transition"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-xl text-green-600">•</span>
                  <span className="text-white text-sm sm:text-base">
                    {faq.question}
                  </span>
                </div>

                <svg
                  className={`w-5 h-5 text-green-400 transform transition-transform duration-300 ${
                    openQuestionId === faq._id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openQuestionId === faq._id ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 py-3 bg-white">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;