import React from "react";

export default function MapSection() {
  return (
    <div className="bg-gray-900 mt-16 w-full p-13 ">
      <h3 className="text-2xl font-bold text-center text-white mb-8">
        Our Location
      </h3>
      <div className=" rounded-2xl overflow-hidden shadow-2xl max-w-xl mx-auto flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2143.980357089942!2d26.82971884151015!3d38.74023470781742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba35aa6b8bfe5f%3A0xcf0e41a9ff27915a!2zRmV2emkgw4dha21haywgMzU2ODcgRm_Dp2EvxLB6bWlyLCBUw7xya2l5ZQ!5e0!3m2!1sen!2seg!4v1750961074771!5m2!1sen!2seg"
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