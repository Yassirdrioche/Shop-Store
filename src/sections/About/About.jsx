import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto">
          We are a company dedicated to providing high-quality products and
          exceptional customer service. Our mission is to make your life better
          with our innovative solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
