import React, { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();

    // هنا تقدر تربط بـ EmailJS أو أي خدمة تانية
    console.log('Subscribed Email:', email);
    alert('Thanks for subscribing to our newsletter!');

    setEmail('');
  };

  return (
    <section className="bg-white py-16 px-6 text-center">
      <h3 className="text-xl md:text-2xl font-bold text-[#03261d] mb-4">
        Subscribe to our Newsletter
      </h3>
      <p className="text-gray-600 mb-8">
        Get the latest updates about our products, offers, and agricultural tips.
      </p>

      <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-3 rounded-xl shadow-sm border border-gray-300 w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-green-800"
        />
        <button
          type="submit"
          className="bg-[#03261d] text-white px-6 py-3 rounded-xl hover:bg-green-900 transition-all tracking-wide"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsletterForm;