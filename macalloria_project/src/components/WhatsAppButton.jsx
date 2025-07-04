import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/201066087981" // غيّر الرقم حسب المطلوب
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="text-xl" />
    </a>
  );
};

export default WhatsAppButton;