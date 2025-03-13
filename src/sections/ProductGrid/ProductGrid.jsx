import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Icon } from "@iconify/react"; // Import Icon from @iconify/react
import "./ProductGrid.css";
import watch from "../../assets/gridprod/watch.jpg";
import clothes from "../../assets/gridprod/clothes1.jpg";
import shoes from "../../assets/gridprod/shoes.jpg";
import headphones from "../../assets/gridprod/headphones.jpg";
import headphones2 from "../../assets/gridprod/headphones2.jpg";
import book from "../../assets/gridprod/book.jpg";

const ProductGrid = () => {
  return (
    <div className="md:container max-w-full md:max-w-6xl mx-auto mt-[45rem] ">
      {/* Zigzag Layout */}
      <div className=" bg-neutral-100  space-y-6 md:space-y-0 ">
        {/* Row 1: Image on the Left */}
        <div className="grid grid-cols-1 md:grid-cols-2  items-center md:gap-0  sticky top-0 z-50 ">
          {/* Background Image Div */}
          <div
            className="relative h-[400px] overflow-hidden "
            style={{
              backgroundImage: `url(${headphones2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-6">
              <h2 className="text-white text-4xl font-bold mb-2">Headphones</h2>
              <p className="text-white text-lg">20% OFF</p>
            </div>
          </div>
          <div
            className="text-center flex-col flex items-center h-full w-full bg-neutral-100 bg-opacity-85 backdrop-blur justify-center "
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <h2 className="text-3xl font-bold mb-4">Premium Headphones</h2>
            <p className="text-gray-600 mb-6">
              Experience crystal-clear sound with our latest headphones. Perfect
              for music lovers and professionals alike.
            </p>
            <Link
              to="/shop" // Add your route here
              className="bg-black text-lg text-white px-6 py-3 rounded-lg hover:bg-opacity-75 hover:backdrop-blur-lg transition-colors duration-300 flex justify-center items-center gap-2 w-6/12"
            >
              <Icon icon="mdi:cart-outline" className="text-2xl" />{" "}
              {/* Outline icon */}
              Shop Now
            </Link>
          </div>
        </div>

        {/* Row 2: Image on the Right */}
        <div className="grid grid-cols-1 md:grid-cols-2  items-center md:gap-0  sticky top-0 z-50 ">
          <div
            className="text-center flex-col  flex  items-center order-2 md:order-1 h-full w-full z-50 bg-neutral-100 bg-opacity-85 backdrop-blur justify-center"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <h2 className="text-3xl font-bold mb-4">Stylish Clothes</h2>
            <p className="text-gray-600 mb-6">
              Upgrade your wardrobe with our trendy and comfortable clothing
              collection. Designed for every occasion.
            </p>
            <Link
              to="/shop" // Add your route here
              className="bg-black text-lg text-white px-6 py-3 rounded-lg hover:bg-opacity-75 hover:backdrop-blur-lg transition-colors duration-300 flex justify-center items-center gap-2 w-6/12"
            >
              <Icon icon="mdi:cart-outline" className="text-2xl" />{" "}
              {/* Outline icon */}
              Shop Now
            </Link>
          </div>
          {/* Background Image Div */}
          <div
            className="relative h-[400px] overflow-hidden  order-1 md:order-2 "
            style={{
              backgroundImage: `url(${clothes})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-6">
              <h2 className="text-white text-4xl font-bold mb-2">Clothes</h2>
              <p className="text-white text-lg">20% OFF</p>
            </div>
          </div>
        </div>

        {/* Row 3: Image on the Left */}
        <div className="grid grid-cols-1 md:grid-cols-2  items-center md:gap-0  sticky top-0 z-50">
          {/* Background Image Div */}
          <div
            className="relative h-[400px] overflow-hidden "
            style={{
              backgroundImage: `url(${shoes})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-6">
              <h2 className="text-white text-4xl font-bold mb-2">Shoes</h2>
              <p className="text-white text-lg">20% OFF</p>
            </div>
          </div>
          <div
            className="text-center flex-col  flex  items-center  h-full w-full z-50 bg-neutral-100 bg-opacity-85 backdrop-blur justify-center"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <h2 className="text-3xl font-bold mb-4">Comfortable Shoes</h2>
            <p className="text-gray-600 mb-6">
              Step into style and comfort with our premium shoe collection.
              Perfect for everyday wear or special occasions.
            </p>
            <Link
              to="/shop" // Add your route here
              className="bg-black text-lg text-white px-6 py-3 rounded-lg hover:bg-opacity-75 hover:backdrop-blur-lg transition-colors duration-300 flex justify-center items-center gap-2 w-6/12"
            >
              <Icon icon="mdi:cart-outline" className="text-2xl" />{" "}
              {/* Outline icon */}
              Shop Now
            </Link>
          </div>
        </div>

        {/* Row 4: Image on the Right */}
        <div className="grid grid-cols-1 md:grid-cols-2  items-center md:gap-0  sticky top-0 z-50">
          <div
            className="text-center flex-col  flex  items-center order-2 md:order-1 h-full w-full
             bg-neutral-100 bg-opacity-85 backdrop-blur justify-center"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <h2 className="text-3xl font-bold mb-4">Classic Watch</h2>
            <p className="text-gray-600 mb-6">
              Timeless elegance meets modern functionality. Our watches are
              designed to complement your style.
            </p>
            <Link
              to="/shop" // Add your route here
              className="bg-black text-lg text-white px-6 py-3 rounded-lg hover:bg-opacity-75 hover:backdrop-blur-lg transition-colors duration-300 flex justify-center items-center gap-2 w-6/12"
            >
              <Icon icon="mdi:cart-outline" className="text-2xl" />{" "}
              {/* Outline icon */}
              Shop Now
            </Link>
          </div>
          {/* Background Image Div */}
          <div
            className="relative h-[400px] overflow-hidden  order-1 md:order-2"
            style={{
              backgroundImage: `url(${watch})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-6">
              <h2 className="text-white text-4xl font-bold mb-2">Watch</h2>
              <p className="text-white text-lg">20% OFF</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
