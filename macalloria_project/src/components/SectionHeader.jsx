import React from "react";

export default function SectionHeader({  subtitle, bgImage, children }) {
  return (
    <div
      className="relative w-full h-25 flex items-center justify-center text-center text-white mt-24"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 px-4">
        {subtitle && <p className="text-md text-gray-200">{subtitle}</p>}
        {children && <div className="mt-3">{children}</div>}
      </div>
    </div>
  );
}