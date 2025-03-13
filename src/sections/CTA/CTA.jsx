import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <div className="bg-blue-500 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8">
          Join thousands of satisfied customers today.
        </p>
        <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default CTA;
