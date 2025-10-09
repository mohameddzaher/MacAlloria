// src/pages/ContactPage.jsx
import React from "react";
import ContactForm from "../components/ContactForm";
import Breadcrumb from "../components/Breadcrumb";
import headerBg from "../assets/bg2.jpg";

// نسخة مخصصة من SectionHeader مباشرة هنا
function ContactSectionHeader({ subtitle, bgImage }) {
  return (
    <div
      className="relative w-full h-15 flex items-center justify-center text-center text-white mt-24"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // الخلفية تكون ثابتة أثناء التمرير
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 px-4">
        {subtitle && <p className="text-sm text-gray-200">{subtitle}</p>}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <ContactSectionHeader
        title="Contact Us"
        subtitle="We’re here to help you - feel free to reach out"
        bgImage={headerBg}
      >
        <Breadcrumb items={[{ label: "Fill The Form" }]} />
      </ContactSectionHeader>

      <div className="px-4 max-w-6xl mx-auto mt-0 pt-0">
        <ContactForm className="mt-8 mb-12" />
      </div>
      <div className=" mt-16 w-full p-13 ">
        <hr className="mb-20 text-gray-300"/>
        <h3 className="text-2xl font-bold text-center mb-8">Our Location</h3>
        <div className="mb-10 rounded-2xl overflow-hidden shadow-2xl max-w-xl mx-auto flex justify-center">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.447996033872!2d32.555794899999995!3d37.9199633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d0910070681077%3A0xe1fb1c7f59955abf!2sAlloria%20industry%20makina!5e0!3m2!1sen!2ssa!4v1760034426426!5m2!1sen!2ssa"
            width="100%"
            style={{ border: 0, height: "50vh" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Macalloria Location"
          ></iframe>
        </div>
      </div>
    </>
  );
}
