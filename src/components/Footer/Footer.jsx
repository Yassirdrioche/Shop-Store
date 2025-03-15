import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react"; // Import Iconify
import logoWhite from "../../assets/picture/logo_white.png";
import "./Footer.css";
import GradientBackground from "../../utils/GradientBackground";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r footer   text-white  relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <GradientBackground />
      </div>
      <div className="fixed bottom-0  grid ftr  footer w-full place-items-center ">
        <div className="custom-shape-divider-top-1741878716">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 892.25 114.72 1200 0z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        {/* Wave Effect */}
        <div className="absolute top-0 left-0 w-full h-20 bg-wave-pattern bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* About Section */}
            <div className="space-y-4">
              <img src={logoWhite} className="w-20" alt="Logo" />
              <p className="text-gray-400">
                We are dedicated to providing the best products and services to
                our customers. Join us on our journey!
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: "ri:facebook-fill", link: "https://facebook.com" },
                  { icon: "ri:twitter-fill", link: "https://twitter.com" },
                  { icon: "ri:instagram-line", link: "https://instagram.com" },
                  { icon: "ri:linkedin-fill", link: "https://linkedin.com" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition duration-300 hover:scale-110"
                  >
                    <Icon icon={social.icon} width="24" height="24" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white font-poppins">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about-us"
                    className="text-gray-400 hover:text-white transition duration-300 hover:pl-2"
                  >
                    About Us
                  </a>
                </li>
                {[
                  { to: "/contact", text: "Contact" },
                  { to: "/privacy", text: "Privacy Policy" },
                  { to: "/terms", text: "Terms of Service" },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.to}
                      className="text-gray-400 hover:text-white transition duration-300 hover:pl-2"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white font-poppins">
                Contact Us
              </h4>
              <ul className="text-gray-400 space-y-2">
                <li>Email: support@yourStore.com</li>
                <li>Phone: +212 6-41420859</li>
                <li>Address: 123 Store St, Agadir, Morocco</li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white font-poppins">
                Join Our Newsletter
              </h4>
              <p className="text-gray-400">
                Subscribe to get the latest updates and exclusive offers.
              </p>
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg bg-neutral-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white hover:bg-neutral-700 transition duration-300"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-white text-neutral-900 rounded-lg hover:bg-gray-200 transition duration-300 hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Divider with Animation */}
          <div className="border-t border-gray-800 my-6 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-divider"></div>
          </div>

          {/* Copyright Section */}
          <div className="text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} MyStore. All rights reserved.
            </p>
            <p className="text-sm mt-2">
              Designed with ❤️ by Yasser -
              <a
                href="https://yourwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                <span> My Self</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
