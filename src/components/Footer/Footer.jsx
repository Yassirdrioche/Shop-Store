import React from "react";
import { Icon } from "@iconify/react";
import logoWhite from "../../assets/picture/logo_white.png";
import GradientBackground from "../../utils/GradientBackground"; // Import the working component

const Footer = () => {
  return (
    <footer className="relative h-[100vdh] text-white overflow-hidden">
      {/* Neat Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <GradientBackground />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 bg-neutral-900 bg-opacity-80 py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
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

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: "/about", text: "About Us" },
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

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <ul className="text-gray-400 space-y-2">
              <li>Email: support@yourStore.com</li>
              <li>Phone: +212 6-41420859</li>
              <li>Address: 123 Store St, Agadir, Morocco</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
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

        {/* Copyright */}
        <div className="text-center text-gray-400 mt-6">
          <p>&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
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
    </footer>
  );
};

export default Footer;
