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
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source
      src="https://res.cloudinary.com/dh7s7lifx/video/upload/f_auto,q_auto,vc_auto,w_1920,h_1080,c_fill/v1759434853/z8rcqmyvlfyfsatz78x3.mov"
      type="video/mp4"
    />
  </video>
</div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-start h-full px-6 sm:px-12 text-white max-w-xl p-4 sm:p-8 m-4 sm:m-8">
        <h1 className="text-xl sm:text-2xl font-bold leading-tight mb-4 drop-shadow-lg">
          Grow Smarterrrrr with <span className="text-red-900">Modern</span>{" "}
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