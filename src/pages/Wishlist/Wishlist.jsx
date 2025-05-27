import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import illustrationWishlist from "../../assets/picture/illustrationWishlist.png";
import DottedBg from "../../components/DottedBg";

const Wishlist = () => {
  const { wishlist } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gradient-to-b bg-white relative z-50 flex flex-col gap-5 py-20  overflow-hidden px-4 sm:px-6 lg:px-8">
      <DottedBg />
      {/* Hero Section */}

      {/* Wishlist Grid */}
      <div className="max-w-7xl mx-auto">
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-9 text-center z-50 relative">
            <img
              src={illustrationWishlist}
              alt="Empty cart"
              className="w-full max-w-md mb-8"
              loading="lazy"
            />
            <p className="text-xl text-neutral-700 mb-6">Your Wishlist is empty.</p>
            <Link
              to="/shop"
              className="bg-gradient-to-r from-neutral-700 to-neutral-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:shadow-lg transition-all duration-300"
            >
              Go To Shop
              <Icon
                icon="mdi:arrow-right"
                className="w-6 h-6 group-hover:translate-x-1 transition-all duration-300"
              />
            </Link>
          </div>
        ) : (
          <section>
            <div className="flex items-center justify-evenly pt-4">
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 flex items-center justify-center gap-4">
                <span>Your Wishlist</span>
              </h2>
              <p className="text-lg text-neutral-800">
                {wishlist.length === 0
                  ? "Your wishlist is waiting to be filled with your favorite products!"
                  : "Here are the treasures you've saved for later."}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full justify-center">
              {wishlist.map((product) => (
                <div
                  key={product.id}
                  className="relative group  transition-all h-max w-80 transform scale-90 duration-300 md:w-full hover:scale-95"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
