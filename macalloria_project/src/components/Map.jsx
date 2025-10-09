import React from "react";

export default function MapSection() {
  return (
    <div className="bg-gray-900 mt-16 w-full p-13   ">
      <h3 className="text-2xl font-bold text-center text-white mb-8">
        Our Location
      </h3>
      <div className=" rounded-2xl overflow-hidden shadow-2xl max-w-xl mx-auto flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.447996033872!2d32.555794899999995!3d37.9199633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d0910070681077%3A0xe1fb1c7f59955abf!2sAlloria%20industry%20makina!5e0!3m2!1sen!2ssa!4v1760034426426!5m2!1sen!2ssa"
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