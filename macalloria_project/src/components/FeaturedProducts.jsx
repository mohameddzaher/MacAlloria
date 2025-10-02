import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import bgImage from "../assets/bg4.jpg"; // غيّر الصورة دي على حسب اللي عندك

import firstImg from "../assets/HAND PUSH TYPE.png";
import secondImg from "../assets/1.png";
import thirdImg from "../assets/Vita Serisi Asılır Tip Turbo Atomizer2.png";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Garden Sprayers",
      image: firstImg,
      rating: 5,
    },
    {
      id: 2,
      name: "Field Sprayers",
      image: secondImg,
      rating: 5,
    },
    {
      id: 3,
      name: "Turbo Atomizers",
      image: thirdImg,
      rating: 5,
    },
  ];

  return (
    <section
      className="relative py-10 px-2"
      id="featured"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay Dark Layer */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-xl font-bold text-white mb-1">
          Our <span className="text-green-400">Best Selling Machines</span>
        </h2>
        <p className="text-gray-300 text-xs mb-6 max-w-sm mx-auto">
          Carefully crafted gear that blends style and performance.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center pt-3 pb-3">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`relative bg-white/10 backdrop-blur-md rounded-2xl shadow-md overflow-hidden transition hover:-translate-y-1 hover:shadow-lg duration-300 w-[95%] sm:w-[85%] md:w-[90%] ${
                index === 1 ? "md:scale-105" : "md:scale-90"
              }`}
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[180px] object-cover"
              />

              {/* Rating */}
              <div className="absolute top-2 left-2 flex items-center bg-white text-gray-800 text-[10px] font-medium px-2 py-0.5 rounded-full shadow-sm">
                <FaStar className="text-yellow-400 mr-1 text-[10px]" />
                {product.rating}/5
              </div>

              {/* Title & Button */}
              <div className="flex flex-col items-center justify-center py-5 px-2">
                <h3 className="text-xs font-semibold text-white mb-3">
                  {product.name}
                </h3>
                <button className="text-[9px] px-3 py-1 border border-white text-white rounded-lg hover:bg-green-900 hover:text-white transition duration-200">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Button to view all products */}
        <div className="mt-6">
          <Link
            to="/products"
            className="bg-green-900 text-xs text-white  px-5 py-2.5 rounded-lg hover:px-8 transition-all duration-500 ease-in-out"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}