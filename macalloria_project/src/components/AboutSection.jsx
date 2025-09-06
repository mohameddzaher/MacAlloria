import React from 'react';
import bgImage from '../assets/bg.jpg'; // بدّل المسار حسب مكان الصورة

const AboutSection = () => {
  return (
    <section
      className="relative  mb-20 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-18">
        <h4 className="tracking-[10px] font-bold text-xl text-white ">MacAlloria</h4>
        <p className="mt-6 text-white text-base max-w-2xl mx-auto">
          Discover more about our mission and values. <br />
          We’re always here to answer your questions and support your growth.
        </p>
        <button
          className="mt-8 border border-white px-6 py-2 rounded-sm text-white transition-all duration-200 hover:bg-white hover:text-[#03261d] hover:px-8"
        >
          About Us
        </button>
      </div>
    </section>
  );
};

export default AboutSection;