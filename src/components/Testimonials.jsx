import React from 'react';

const testimonials = [
  {
    quote:
      "Excellent service and professional team. We received the equipment earlier than expected.",
    name: "Ali Hassan",
    role: "Business Owner – Turkey",
  },
  {
    quote:
      "The quality of the machines is unmatched. Everything works perfectly and the team was very responsive.",
    name: "Salma Mostafa",
    role: "Agricultural Engineer – Egypt",
  },
  {
    quote:
      "Highly recommend MacAlloria. Trustworthy, fast, and reliable from order to delivery.",
    name: "Omar El-Sayed",
    role: "Importer – Saudi Arabia",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#f9fafb] py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#03261d] mb-10">
          What Our Clients Say
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 hover:border-green-600 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-left flex flex-col"
            >
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                “{testimonial.quote}”
              </p>
              <div className="mt-auto">
                <p className="text-[#03261d] font-semibold text-sm">{testimonial.name}</p>
                <p className="text-gray-500 text-xs">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;