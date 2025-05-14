import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react"; // Import Iconify
import logoWhite from "../../assets/picture/logo_white.png";
import "./Footer.css";
import GradientBackground from "../../utils/GradientBackground";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r footer   text-white  relative overflow-hidden">
      <div className="absolute inset-0 ">
        <GradientBackground />
      </div>
      <div className="fixed bottom-0  grid   footer w-full place-items-center ">
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
          <div className="grid p-8 py-28 lg:p-3 lg:py-10 grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div className="space-y-4">
              <Link to="/" className="text-2xl font-bold  flex items-center">
                <div className="logo">Shopeino</div>
              </Link>
              <p className="text-gray-200">
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
                    className="text-gray-200 hover:text-white transition duration-300 hover:pl-2"
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
                      className="text-gray-200 hover:text-white transition duration-300 hover:pl-2"
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
              <ul className="text-gray-200 space-y-2">
                <li>Email: support@yourStore.com</li>
                <li>Phone: +212 6-41420859</li>
                <li>Address: 123 Store St, Agadir, Morocco</li>
              </ul>
            </div>

            {/* Newsletter Section */}
          </div>

          {/* Divider with Animation */}
          <div className="border-t border-gray-800 my-6 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-divider"></div>
          </div>

          {/* Copyright Section */}
          <div className="text-center text-gray-200 py-6">
            <p>© {new Date().getFullYear()} Shopeino. All rights reserved.</p>
            <p className="mt-2">
              <span>Designed with </span>
              <span>
                <Icon
                  icon="iconamoon:heart-fill"
                  className="inline-block w-5 h-5"
                  aria-hidden="true"
                />
              </span>{" "}
              <a
                href="https://momkina.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                Momkina
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
