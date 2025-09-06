import React from 'react';
import client1 from '../assets/bg2.jpg';
import client2 from '../assets/bg2.jpg';
import client3 from '../assets/bg2.jpg';
import client4 from '../assets/bg2.jpg';
import client5 from '../assets/bg2.jpg';
import client6 from '../assets/bg2.jpg';

const brands = [client1, client2, client3, client4, client5, client6];

const TrustedBy = () => {
  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center mb-8">
        <h2 className="text-xl font-bold text-[#03261d]">Trusted By Leading Companies</h2>
      </div>
      
      {/* Container with overflow hidden */}
      <div className="relative w-full overflow-hidden">
        {/* Scrolling content */}
        <div className="flex gap-10 animate-scroll-horizontal w-max">
          {/* ✅ تكرار العناصر مرتين لعمل Loop انسيابي */}
          {[...brands, ...brands].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client ${index}`}
              className="h-12 object-contain opacity-70 hover:opacity-100 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;