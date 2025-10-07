import React from 'react';
import statsImage from '../assets/bg7.png'; // ✨ غير الصورة حسب الحاجة

const stats = [
  { label: 'Years of Experience', value: 12 },
  { label: 'Clients Worldwide', value: 35 },
  { label: 'Products Delivered', value: 12000 },
  { label: 'Team Members', value: 35 },
];

const StatsCounter = () => {
  return (
    <section className=" py-20 overflow-hidden">
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fadeInUp {
            animation: fadeInUp 0.8s ease forwards;
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Image */}
        <div className="md:w-1/2 w-full fadeInUp">
          <img
            src={statsImage}
            alt="Stats"
            className="rounded-3xl shadow-xl w-full h-auto object-cover"
          />
        </div>

        {/* Right Stats Cards */}
        <div className="grid grid-cols-2 gap-4 md:w-1/2 w-full">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[#0f2e25] to-[#1f3f35] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Decorative gradient circle */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-green-900 to-green-700 rounded-full opacity-30 z-0"></div>

              <div className="relative z-10">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}+</div>
                <div className="text-xs font-medium text-gray-300 tracking-wide">{stat.label}</div>
                <div className="w-8 h-1 bg-green-600 rounded-full mt-2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;