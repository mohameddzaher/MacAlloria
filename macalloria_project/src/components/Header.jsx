import { useState, useEffect, useRef } from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/removed.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const location = useLocation(); // عشان نعرف الصفحة الحالية

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full z-50">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white flex justify-evenly items-center px-4 py-2 text-xs fixed top-0 z-50 w-full">
        <h6 className="tracking-widest whitespace-pre">
          FREE SHIPPING FOR ORDERS OVER 3 PIECES.
        </h6>
        <div className="flex gap-3 text-sm">
          <a className=" hover:text-red-300" href="https://www.facebook.com/Mohamedzaherrr" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a className=" hover:text-red-300" href="https://www.instagram.com/mohamedd.zaher/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a className="hover:text-red-300" href="https://www.tiktok.com/@mohamedd.zaher" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-evenly items-center w-full fixed top-8 z-50 bg-white shadow-sm px-6 py-2">
        <div className="w-1/3 flex items-center gap-2 text-red-500 text-xl tracking-widest ">
          <img src={logo} alt="Macalloria Logo" className="w-40 h-12 object-contain cursor-pointer scale-180" />
        </div>

        <nav className="w-1/3 hidden md:flex">
          <ul className="flex justify-between text-sm font-medium w-full">
            <NavItem to="/" text="Home" location={location} />
            <NavItem to="/products" text="Products" location={location} />
            <NavItem to="/about" text="About us" location={location} />
            <NavItem to="/contact" text="Contact" location={location} />
          </ul>
        </nav>

        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-700 focus:outline-none">
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden fixed top-[90px] left-0 w-full bg-white shadow-lg z-40"
        >
          <ul className="flex flex-col items-center gap-4 py-4 text-sm font-medium text-gray-800">
            <NavItem to="/" text="Home" location={location} />
            <NavItem to="/products" text="Products" location={location} />
            <NavItem to="/about" text="About us" location={location} />
            <NavItem to="/contact" text="Contact" location={location} />
          </ul>
        </div>
      )}
    </header>
  );
}

function NavItem({ to, text, location }) {
const isActive =
  (to === "/products" && (location.pathname.startsWith("/products") || location.pathname.startsWith("/product"))) ||
  location.pathname === to;
  return (
    <li className="relative group">
      <Link
        to={to}
        className={`${
          isActive ? "text-green-600 font-bold" : "text-gray-800"
        } hover:text-green-600`}
      >
        {text}
      </Link>
      <div
        className={`absolute left-0 top-6 h-0.5 transition-all duration-300 ${
          isActive ? "w-full bg-green-600" : "w-0 group-hover:w-full bg-green-600"
        }`}
      ></div>
    </li>
  );
}