import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../assets/picture/notFound.png";
const NotFound = () => {
  return (
    <div className="p-6 text-center bg-white py-28 flex justify-center flex-col relative z-50 items-center">
      <div className="not-grd" />
      <GridBg />
      <img src={notFound} alt="Not Found" className="w-1/2 h-auto" />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-  neutral-700">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
