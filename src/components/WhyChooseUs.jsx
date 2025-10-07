import React from 'react';

export default function WhyChooseUs() {
  const features = [
    {
      title: "Premium Quality",
      description: "We provide durable and efficient agricultural machines built to withstand tough field conditions.",
      icon: "🧵",
    },
    {
      title: "Expert Technical Guidance",
      description: "Our specialists help you choose, operate, and maintain the right tools for your farm needs.",
      icon: "📞",
    },
    {
      title: "Fast Delivery",
      description: "We offer fast and secure delivery to ensure your equipment arrives ready for action — wherever you are.",
      icon: "🚚",
    },
  ];

  return (
    <section className="bg-white py-14 px-4 text-center">
      <h2 className="text-2xl font-bold mb-3 text-[#03261d]">Why Choose Us</h2>
      <p className="text-gray-500 mb-10 max-w-2xl mx-auto text-sm">
        We deliver trusted agricultural solutions - combining durability, performance, and expert support - to help you maximize productivity.
      </p>

      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
          >
            <div className="text-2xl mb-3">{feature.icon}</div>
            <h3 className="text-md font-semibold mb-2 text-green-900">{feature.title}</h3>
            <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}