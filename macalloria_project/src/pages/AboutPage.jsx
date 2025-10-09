// src/pages/AboutPage.jsx
import React from "react";
import aboutHero from "../assets/new1.jpeg"; // صورة الغلاف
import aboutTeam from "../assets/corporate.webp"; // صورة الفريق أو نشاط الشركة

export default function AboutPage() {
  return (
    <div className="mt-24 text-gray-800">
      {/* Hero Section */}
      <div
        className="relative w-full h-[70px] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 md:text-md text-white">Learn More About Our Journey</h1>
      </div>

      {/* Who We Are */}
      <section className="mt-10 px-4 md:px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-bold text-[#03261d] mb-4">Who We Are</h2>
        <p className="text-gray-700 text-md leading-relaxed max-w-3xl mx-auto">
          We ALLORIA INDUSTRY MAKINA  are a forward-thinking agricultural solutions company, dedicated to equipping farmers and businesses with spraying machinery that empower growth, efficiency, and sustainability.
        </p>
      </section>

      {/* Image + Our Journey */}
      <section className="mt-12 px-4 pb-20 md:px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src={aboutTeam}
          alt="Our Team"
          className="rounded-xl w-[70%] md:w-[60%] mx-auto"
        />
        <div>
          <h3 className="text-xl font-bold text-[#03261d] mb-4">
            Our Journey
          </h3>
          <p className="text-gray-700 text-md leading-relaxed">
            Founded with a passion for progress in the agriculture industry,
            we’ve grown from a local provider into a regional leader, trusted by
            clients for reliability, innovation, and commitment to excellence.
          </p>
        </div>
      </section>

      {/* Vision - Mission - Values */}
      <section className="bg-[#f8f9fa] py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-[#03261d] mb-3">
              Our Vision
            </h4>
            <p className="text-gray-600 text-sm">
              To revolutionize the agriculture industry with reliable and
              eco-friendly technologies, becoming the go-to partner for
              sustainable growth.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-[#03261d] mb-3">
              Our Mission
            </h4>
            <p className="text-gray-600 text-sm">
              Empower farmers through innovative equipment and personalized
              support, helping them achieve better yields and reduce
              environmental impact.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-[#03261d] mb-3">
              Our Values
            </h4>
            <p className="text-gray-600 text-sm">
              Integrity, Innovation, Customer Focus, Responsibility, and
              Long-Term Impact.
            </p>
          </div>
        </div>
      </section>
      <div className=" mt-16 w-full p-13 ">
      <h3 className="text-2xl font-bold text-center  mb-8">
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
    </div>
  );
}