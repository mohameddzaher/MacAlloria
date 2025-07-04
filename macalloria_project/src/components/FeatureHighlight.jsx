import React from 'react';
import img1 from '../assets/s1.jpg';
import img2 from '../assets/s3.jpg';
import img3 from '../assets/bg3.jpg';
export default function FeatureHighlight() {
  return (
    <section className="bg-gray-900 text-white py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Images Column */}
        <div className="grid grid-cols-2 gap-3">
          <img src={img1} alt="Farm 1" className="rounded-lg object-cover h-36 w-full" />
          <img src={img2} alt="Farm 2" className="rounded-lg object-cover h-36 w-full" />
          <img src={img3} alt="Farm 3" className="rounded-lg object-cover h-40 w-full col-span-2" />
        </div>

        {/* Text Column */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-3 leading-snug">
            Smart Agriculture Solutions for a Better Tomorrow
          </h3>
          <p className="text-gray-300 text-sm md:text-base mb-5 leading-relaxed">
            Our modern machinery is designed to save time, reduce labor, and increase yield for farmers. From soil preparation to harvesting, we support every step of the way.
          </p>
          <button className="bg-green-700 hover:bg-green-600 text-white px-5 py-2 text-sm rounded-md transition">
            Explore Solutions
          </button>
        </div>
      </div>
    </section>
  );
}