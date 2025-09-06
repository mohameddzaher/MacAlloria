// import {
//   FaArrowRight,
//   FaFacebook,
//   FaInstagram,
//   FaTiktok,
// } from "react-icons/fa";
// import bgVideo from "../assets/vd.mp4";

// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src={bgVideo}
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="auto"
//       />

//       {/* Dark Overlay (optional) */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

//       {/* Content */}
//       <div className="relative z-20 flex flex-col justify-center items-start h-full px-12 text-white max-w-xl p-8 m-8">
//         <h1 className="text-2xl  font-bold leading-tight mb-4 drop-shadow-lg">
//           Grow Smarter with <span className="text-red-900">Modern</span>{" "}
//           Agricultural Solutions
//         </h1>
//         <p className="text-md mb-6 text-gray-400 drop-shadow-md">
//           Explore our advanced tools & get expert support with every purchase.{" "}
//         </p>
//         <button className="flex items-center gap-2 bg-green-900 hover:bg-green-900 px-8 hover:px-10 py-2 rounded-xl text-white text-sm  transition-all duration-300 ease-in-out">
//           Shop Now <FaArrowRight />
//         </button>

//         {/* Social Icons */}
//         <div className="flex gap-4 text-md mt-6 ml-7">
//           <a
//             href="https://www.facebook.com/Mohamedzaherrr"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-green-700"
//           >
//             <FaFacebook />
//           </a>
//           <a
//             href="https://www.instagram.com/mohamedd.zaher/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-green-700"
//           >
//             <FaInstagram />
//           </a>
//           <a
//             href="https://www.tiktok.com/@mohamedd.zaher"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-green-700"
//           >
//             <FaTiktok />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import bgVideo from "../assets/vdddddddddd.mp4";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto" // تحميل الفيديو مباشرةً عند تحميل الصفحة
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-start h-full px-12 text-white max-w-xl p-8 m-8">
        <h1 className="text-2xl font-bold leading-tight mb-4 drop-shadow-lg">
          Grow Smarter with <span className="text-red-900">Modern</span>{" "}
          Agricultural Solutions
        </h1>
        <p className="text-md mb-6 text-gray-400 drop-shadow-md">
          Explore our advanced tools & get expert support <br/> with every purchase.
        </p>
        <Link
  to="/products"
  className="flex items-center gap-2 bg-green-900 hover:bg-green-900 px-8 hover:px-10 py-2 rounded-xl text-white text-sm transition-all duration-300 ease-in-out"
>
  Shop Now <FaArrowRight />
</Link>

        {/* Social Icons */}
        <div className="flex gap-4 text-md mt-6 ml-7">
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
    </section>
  );
}