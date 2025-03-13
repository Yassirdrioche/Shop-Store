import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form className="max-w-2xl mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea
            className="w-full px-4 py-2 rounded-lg focus:outline-none"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
