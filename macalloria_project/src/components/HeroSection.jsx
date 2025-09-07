import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Vimeo Background Video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1116478609?autoplay=1&loop=1&muted=1&background=1"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute top-1/2 left-1/2 min-w-full min-h-full"
          style={{
            transform: "translate(-50%, -50%) scale(3)", // للموبايل
            objectFit: "cover",
          }}
        ></iframe>
      </div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-start h-full px-6 sm:px-12 text-white max-w-xl p-4 sm:p-8 m-4 sm:m-8">
        <h1 className="text-xl sm:text-2xl font-bold leading-tight mb-4 drop-shadow-lg">
          Grow Smarter with <span className="text-red-900">Modern</span>{" "}
          Agricultural Solutions
        </h1>
        <p className="text-sm sm:text-md mb-6 text-gray-400 drop-shadow-md">
          Explore our advanced tools & get expert support <br /> with every
          purchase.
        </p>
        <Link
          to="/products"
          className="flex items-center gap-2 bg-green-900 hover:bg-green-900 px-6 sm:px-8 hover:px-8 sm:hover:px-10 py-2 rounded-xl text-white text-sm transition-all duration-300 ease-in-out"
        >
          Shop Now <FaArrowRight />
        </Link>

        {/* Social Icons */}
        <div className="flex gap-4 text-md mt-6 ml-2 sm:ml-7">
          <a
            href="https://www.facebook.com/Mohamedzaherrr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-700"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/mohamedd.zaher/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-700"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@mohamedd.zaher"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-700"
          >
            <FaTiktok />
          </a>
        </div>
      </div>

      {/* Media Queries for Different Screen Sizes */}
      <style jsx>{`
        @media (min-width: 640px) {
          iframe {
            transform: translate(-50%, -50%) scale(2.2) !important;
          }
        }
        @media (min-width: 768px) {
          iframe {
            transform: translate(-50%, -50%) scale(1.9) !important;
          }
        }
        @media (min-width: 1024px) {
          iframe {
            transform: translate(-50%, -50%) scale(1.3) !important;
          }
        }
        @media (min-width: 1280px) {
          iframe {
            transform: translate(-50%, -50%) scale(1.2) !important;
          }
        }
      `}</style>
    </section>
  );
}