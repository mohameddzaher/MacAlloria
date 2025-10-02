// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import WhatsAppButton from "./components/WhatsAppButton";

// // صفحات الهوم
// import HeroSection from "./components/HeroSection";
// import FeaturedProducts from "./components/FeaturedProducts";
// import WhyChooseUs from "./components/WhyChooseUs";
// import AboutSection from "./components/AboutSection";
// import Testimonials from "./components/Testimonials";
// import FAQSection from "./components/FAQSection";
// import ContactForm from "./components/ContactForm";
// import Map from "./components/Map";
// import NewsletterForm from "./components/NewsletterForm";
// import FeatureHighlight from "./components/FeatureHighlight";
// import StatsCounter from "./components/StatsCounter";
// import ScrollToTop from "./components/ScrollToTop";

// // صفحات المنتجات
// import ProductsPage from "./pages/ProductsPage";
// import CategoryPage from "./pages/CategoryPage";
// import ProductDetails from "./pages/ProductDetails";
// import ContactPage from "./pages/ContactPage";
// import AboutPage from "./pages/AboutPage";

// function HomePage() {
//   return (
//     <>
//       <HeroSection />
//       <StatsCounter />
//       <FeaturedProducts />
//       <WhyChooseUs />
//       <FeatureHighlight />
//       <Testimonials />
//       <AboutSection />
//       <FAQSection />
//       <ContactForm className="my-20" />
//       <Map />
//       <NewsletterForm />
      
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <ScrollToTop /> 
//       <Header />
//       <WhatsAppButton />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/products" element={<ProductsPage />} />
//         <Route path="/products/:category" element={<CategoryPage />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/about" element={<AboutPage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;






import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// صفحات الهوم
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutSection from "./components/AboutSection";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import ContactForm from "./components/ContactForm";
import Map from "./components/Map";
import NewsletterForm from "./components/NewsletterForm";
import FeatureHighlight from "./components/FeatureHighlight";
import StatsCounter from "./components/StatsCounter";
import ScrollToTop from "./components/ScrollToTop";

// صفحات المنتجات
import ProductsPage from "./pages/ProductsPage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetails from "./pages/ProductDetails";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsCounter />
      <FeaturedProducts />
      <WhyChooseUs />
      <FeatureHighlight />
      <Testimonials />
      <AboutSection />
      <FAQSection />
      <ContactForm className="my-20" />
      <Map />
      <NewsletterForm />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Header />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:category" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;