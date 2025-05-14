import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext"; // Import AppContext for wishlist functionality
import ProductCard from "../../components/ProductCard/ProductCard"; // Import ProductCard to display wishlist items
import { Link } from "react-router-dom"; // Import Link for navigation
import { Icon } from "@iconify/react"; // Import Iconify for icons
import illustrationWishlist from "../../assets/picture/illustrationWishlist.png";
import GridBg from "../../components/GridBg";

const Wishlist = () => {
  const { wishlist } = useContext(AppContext); // Access the wishlist from context

  return (
    <div className="min-h-screen bg-gradient-to-b bg-white relative z-50 flex flex-col gap-5 py-12  overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="wishlist-grd" />
      <GridBg />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mt-10">
        <h1 className="text-3xl md:text-5xl font-bold text-neutral-50 flex items-center justify-center gap-4">
          <Icon icon="cil:heart" />
          <span>Your Wishlist</span>
        </h1>
        <p className="text-lg text-neutral-50">
          {wishlist.length === 0
            ? "Your wishlist is waiting to be filled with your favorite products!"
            : "Here are the treasures you've saved for later."}
        </p>
      </div>

      {/* Wishlist Grid */}
      <div className="max-w-7xl mx-auto">
        {wishlist.length === 0 ? (
          <div className="text-center">
            <div className=" p-6 bg-white absolute top-0 left-1/2 -translate-x-1/2 rounded-lg shadow-lg">
              <img
                src={illustrationWishlist}
                alt=""
                className="w-full h-auto "
                loading="lazy"
              />
              <p className="text-neutral-600 text-lg mb-6">
                No items in your wishlist yet.
              </p>
              <Link
                to="/shop" // Replace with your shop route
                className="bg-gradient-to-r from-neutral-500 via-neutral-600 to-neutral-900 text-lg group text-white px-6 py-3 mt-7 rounded-lg flex items-center gap-2 hover:bg-neutral-700  hover:shadow-lg transition-all duration-300 justify-center"
              >
                Explore Products
                <Icon
                  icon="mdi:arrow-right"
                  className="w-6 h-6 group-hover:translate-x-4 transition-all duration-300"
                />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="relative group transform transition-all h-max w-80 duration-300 md:w-full hover:scale-105 bounce"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
