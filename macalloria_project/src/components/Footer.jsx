import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from "../assets/mac-logo-white.png";

const FooterList = ({ title, items }) => {
  return (
    <div className="flex flex-col text-center md:text-left">
      <h5 className="mb-3 text-lg font-semibold text-white">{title}</h5>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            {item.link.startsWith('/') ? (
              <Link
                to={item.link}
                className="text-sm text-gray-300 hover:text-green-600 transition duration-300"
              >
                {item.name}
              </Link>
            ) : (
              <a
                href={item.link}
                target={item.target || '_self'}
                rel={item.rel || 'noopener noreferrer'}
                className="text-sm text-gray-400 hover:text-green-600 transition duration-300"
              >
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const infoItems = [
    { name: 'About Us', link: '/about' },
    { name: 'Products', link: '/products' },
    { name: 'Contact Us', link: '/contact' },
  ];

  const contactItems = [
    { name: 'info@alloriaindustry.com', link: 'mailto:info@alloriaindustry.com' },
    { name: '+90 5551707581', link: 'tel:+905551707581' },
    {
      name: 'Address: Fevzi Çakmak Mah. 10670 SK. NO:26/K - TURKEY',
      link: 'https://www.google.com/maps/search/?api=1&query=Fevzi+Çakmak+Mah.+10670+SK.+NO+26+K+TURKEY'
    }
  ];

  const socialItems = [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/profile.php?id=61579091995646&mibextid=wwXIfr&mibextid=wwXIfr',
      target: '_blank',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/mohamedd.zaher/',
      target: '_blank',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/mohameddzaher/',
      target: '_blank',
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-5">
      <div className="max-w-7xl mx-auto px-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20 place-items-center items-start whitespace-pre-line">
          {/* Logo + Social */}
          <div className="flex flex-col items-center gap-4">
            <img src={logo} alt="Macalloria Logo" className="h-13 w-auto" />
            <div className="flex gap-5">
              {socialItems.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target={social.target}
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-600 transition-all duration-300"
                >
                  {social.name === 'Facebook' && <FaFacebook className="text-xl" />}
                  {social.name === 'Instagram' && <FaInstagram className="text-xl" />}
                  {social.name === 'LinkedIn' && <FaLinkedin className="text-xl" />}
                </a>
              ))}
            </div>
          </div>

          <FooterList title="Information" items={infoItems} />
          <FooterList title="Contact" items={contactItems} />
          <FooterList title="Follow Us" items={socialItems} />
        </section>

        <div className="text-center text-gray-400 text-sm mt-6">
          © 2025 Macalloria. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;