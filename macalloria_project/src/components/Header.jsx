import { useState, useEffect, useRef } from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/removed.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // إغلاق القائمة عند تغيير الصفحة
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white flex justify-between md:justify-evenly items-center px-4 py-2 text-xs font-light tracking-wide">
        <h6 className="whitespace-nowrap">
          FREE SHIPPING FOR ORDERS OVER 3 PIECES.
        </h6>
        <div className="flex gap-3 text-sm">
          <a
            className="hover:text-green-400 transition"
            href="https://www.facebook.com/profile.php?id=61579091995646"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          {/* <a
            className="hover:text-green-400 transition"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            className="hover:text-green-400 transition"
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a> */}
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white/95 backdrop-blur-md shadow-sm flex justify-between items-center px-6 py-3 md:py-2 w-full top-[32px] relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-28 h-10 md:w-36 md:h-12">
            <img
              src={logo}
              alt="Macalloria Logo"
              className="absolute inset-0 w-full h-full object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8 text-sm font-medium text-gray-800">
            <NavItem to="/" text="Home" location={location} />
            <NavItem to="/products" text="Products" location={location} />
            <NavItem to="/about" text="About us" location={location} />
            <NavItem to="/contact" text="Contact" location={location} />
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white shadow-md border-t border-gray-200"
          >
            <ul className="flex flex-col items-center gap-5 py-5 text-sm font-medium text-gray-800">
              <NavItem to="/" text="Home" location={location} />
              <NavItem to="/products" text="Products" location={location} />
              <NavItem to="/about" text="About us" location={location} />
              <NavItem to="/contact" text="Contact" location={location} />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ to, text, location }) {
  const isActive =
    (to === "/products" &&
      (location.pathname.startsWith("/products") ||
        location.pathname.startsWith("/product"))) ||
    location.pathname === to;

  return (
    <li className="relative group">
      <Link
        to={to}
        className={`transition font-medium ${
          isActive ? "text-green-600" : "text-gray-700 hover:text-green-600"
        }`}
      >
        {text}
      </Link>
      <div
        className={`absolute left-0 -bottom-1 h-[2px] rounded transition-all duration-300 ${
          isActive
            ? "w-full bg-green-600"
            : "w-0 bg-green-600 group-hover:w-full"
        }`}
      ></div>
    </li>
  );
}
