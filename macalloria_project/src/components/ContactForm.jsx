// src/components/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Thank you for contacting us!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section className={`text-center px-4 md:px-20 ${className}`}>
      <h3 className="text-2xl font-bold text-[#03261d]">Stay In Touch</h3>
      <p className="text-gray-500 mt-2">
  Contact us via the form, email at <span className="text-green-600">info@alloriaindustry.com</span>, or call <a href="tel:+966551234567" className="text-green-600  hover:underline">+90 555 170 7581</a>.
</p>

      <form
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col items-center space-y-6"
      >
        <div className="flex flex-wrap justify-center gap-6 w-full">
          <input
            type="text"
            name="firstName"
            placeholder="Your First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full md:w-[40%] rounded-xl shadow-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-800"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Your Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full md:w-[40%] rounded-xl shadow-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-800"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your E-mail Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full md:w-[40%] rounded-xl shadow-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-800"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full md:w-[40%] rounded-xl shadow-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-800"
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Enter Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full md:w-[83%] rounded-xl shadow-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-800"
          required
        ></textarea>

        <div className="text-center">
          <button
            type="submit"
            className="bg-[#03261d] text-white px-13 py-2 rounded-xl text-sm tracking-widest transition-all hover:bg-green-800 "
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;