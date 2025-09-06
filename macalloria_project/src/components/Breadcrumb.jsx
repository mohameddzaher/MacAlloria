import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ items }) {
  return (
    <nav className="text-white text-sm mt-2">
      <ol className="flex flex-wrap justify-center gap-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {item.link ? (
              <Link to={item.link} className="hover:underline text-green-500">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-200">{item.label}</span>
            )}
            {index !== items.length - 1 && <span className="text-gray-400">{">"}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}