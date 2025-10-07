import React from "react";

export default function MapSection() {
  return (
    <div className="bg-gray-900 mt-16 w-full p-13   ">
      <h3 className="text-2xl font-bold text-center text-white mb-8">
        Our Location
      </h3>
      <div className=" rounded-2xl overflow-hidden shadow-2xl max-w-xl mx-auto flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119520.13136536103!2d32.36763590166803!3d37.87815168434308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xff71fc6b0b68d47%3A0x6e378b281169b722!2sSolmax%20Steel%20Agco!5e0!3m2!1sen!2seg!4v1751989059447!5m2!1sen!2seg"
          width="100%"
          style={{ border: 0, height: '50vh' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Macalloria Location"
        ></iframe>
      </div>
    </div>
  );
}