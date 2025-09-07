import React from "react";
import { FaStar } from "react-icons/fa";

import bgImage from "../assets/bg4.jpg"; // غيّر الصورة دي على حسب اللي عندك

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Classic Jacket",
      image: "https://drive.google.com/thumbnail?id=1cccP6kK8v3Po0WOGoXOR1cO7ysimDnUk&sz=w1000",
      rating: 5,
    },
    {
      id: 2,
      name: "Stylish Sneakers",
      image: "https://drive.google.com/thumbnail?id=1Wfc4VswEppzHQGVIbOHKmFMYJDSui2I3&sz=w1000",
      rating: 5,
    },
    {
      id: 3,
      name: "Premium Backpack",
      image: "https://drive.google.com/thumbnail?id=1G1WahhF3gQdPfb42sIhJyAFZJfV4LrOQ&sz=w1000",
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
                <button className="text-[9px] px-3 py-1 border border-white text-white rounded-lg hover:bg-white hover:text-black transition duration-200">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Button to view all products */}
        <div className="mt-6">
          <a
            href="/products"
            className="text-xs text-white border border-white px-4 py-1.5 rounded-lg hover:bg-white hover:text-black transition duration-200"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}