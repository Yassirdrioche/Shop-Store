import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react"; // Import Iconify
import logoWhite from "../../assets/picture/logo_white.png"
const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <img src={logoWhite} className="w-20" alt="" />
            <p className="text-gray-400">
              We are dedicated to providing the best products and services to
              our customers. Join us on our journey!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Icon icon="ri:facebook-fill" width="24" height="24" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Icon icon="ri:twitter-fill" width="24" height="24" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Icon icon="ri:instagram-line" width="24" height="24" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Icon icon="ri:linkedin-fill" width="24" height="24" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <ul className="text-gray-400 space-y-2">
              <li>Email: support@yourStore.com</li>
              <li>Phone: +212 641420859</li>
              <li>Address: 123 Store St, City, Country</li>
            </ul>
          </div>

          {/* Newsletter Section */}
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
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-white text-neutral-900 rounded-lg hover:bg-gray-200 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Copyright Section */}
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
          <p className="text-sm mt-2">
            Designed with ❤️ by Yasser
            <a
              href="https://yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              My Self
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
