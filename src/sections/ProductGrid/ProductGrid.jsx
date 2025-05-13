import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Icon } from "@iconify/react"; // Import Icon from @iconify/react
import "./ProductGrid.css";
import watch from "../../assets/gridprod/watch.jpg";
import clothes from "../../assets/gridprod/clothes1.jpg";
import shoes from "../../assets/gridprod/shoes.jpg";
// import headphones from "../../assets/gridprod/headphones.jpg";
import headphones2 from "../../assets/gridprod/headphones2.jpg";
// import book from "../../assets/gridprod/book.jpg";

const ProductGrid = () => {
  return (
    <div className="">
      {/* Zigzag Layout */}
      <div className="bg-neutral-100 p-4 relative  space-y-6 md:space-y-0">
        {/* Row 1: Image on the Left */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-0 md:sticky top-0 z-50">
          {/* Background Image Div */}
          <div
            className="relative h-[400px] overflow-hidden"
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

          {/* Description Div - Asymmetrical Design with Gradient Overlay */}
          <div
            className="relative  flex-col flex gap-6 items-start h-full w-full bg-neutral-100 bg-opacity-85 backdrop-blur justify-center p-8"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            {/* Gradient Overlay */}
            <div className="gradient-overlay"></div>

            {/* Circle Shape */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-neutral-800 rounded-full opacity-50"></div>
            {/* Triangle Shape */}
            <div className="absolute -bottom-8 -right-8 w-0 h-0 border-l-[50px] border-l-transparent border-b-[100px] border-b-blue-200 opacity-50"></div>

            <h2 className="text-3xl font-bold text-left relative z-10 text-white">
              Premium Headphones
            </h2>
            <p className="text-neutral-100 text-left relative z-10">
              Immerse yourself in superior sound quality with our premium
              headphones. Designed for audiophiles and professionals, these
              headphones deliver crystal-clear audio, deep bass, and
              noise-cancellation features. Whether you're working, gaming, or
              relaxing, our headphones provide an unparalleled listening
              experience.
            </p>
            <Link
              to="/shop"
              className="bg-black text-lg text-white px-6 py-2 rounded-lg hover:bg-opacity-75 hover:backdrop-blur-lg transition-colors duration-300 flex justify-center items-center gap-2 w-full lg:w-6/12 relative z-10"
            >
              <Icon icon="mdi:cart-outline" />
              Shop Now
            </Link>
          </div>
        </div>

        {/* Row 2: Image on the Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-0 md:sticky top-0 z-50">
          {/* Description Div - Asymmetrical Design with Gradient Overlay */}
          <div
            className="relative  flex-col flex gap-6 items-start  h-full w-full bg-neutral-100 bg-opacity-85 backdrop-blur justify-center p-8 order-2 md:order-1"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            {/* Gradient Overlay */}
            <div className="gradient-overlay"></div>

            {/* Blob Shape */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-neutral-200 rounded-full opacity-50"></div>
            {/* Square Shape */}
            <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-neutral-200 opacity-50 rotate-45"></div>

            <h2 className="text-3xl font-bold text-left relative z-10 text-white">
              Stylish Clothes
            </h2>
            <p className="text-neutral-100 md:text-left  relative z-10">
              Elevate your style with our exclusive collection of trendy and
              comfortable clothing. From casual wear to formal attire, our
              designs are crafted to suit every occasion. Made with high-quality
              fabrics, our clothes ensure durability, comfort, and a perfect
              fit. Stay fashionable and confident with our versatile wardrobe
              options.
            </p>
            <Link
              to="/shop"
              className="bg-black text-lg text-white px-6 py-3 rounded-lg hover:bg-opacity-75 hover:backdrop-blur-lg transition-colors duration-300 flex justify-center items-center gap-2 w-full lg:w-6/12 relative z-10"
            >
              <Icon icon="mdi:cart-outline" className="text-2xl" />
              Shop Now
            </Link>
          </div>

          {/* Background Image Div */}
          <div
            className="relative h-[400px] overflow-hidden order-1 md:order-2"
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
        <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-0 md:sticky top-0 z-50">
          {/* Background Image Div */}
          <div
            className="relative h-[400px] overflow-hidden"
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

          {/* Description Div - Asymmetrical Design with Gradient Overlay */}
          <div
            className="relative  flex-col flex gap-6 items-start h-full w-full bg-neutral-100 bg-opacity-85 backdrop-blur justify-center p-8"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            {/* Gradient Overlay */}
            <div className="gradient-overlay"></div>

            {/* Circle Shape */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-neutral-500 rounded-full opacity-50"></div>
            {/* Triangle Shape */}
            <div className="absolute -bottom-8 -right-8 w-0 h-0 border-l-[50px] border-l-transparent border-b-[100px] border-b-orange-200 opacity-50"></div>

            <h2 className="text-3xl font-bold text-left relative z-10 text-white">
              Comfortable Shoes
            </h2>
            <p className="text-neutral-100 text-left relative z-10">
              Step into the perfect blend of style and comfort with our premium
              shoe collection. Designed for all-day wear, our shoes feature
              ergonomic designs, breathable materials, and durable soles.
              Whether you're heading to work, hitting the gym, or going out with
              friends, our shoes will keep you comfortable and stylish.
            </p>
            <Link
              to="/shop"
              className="bg-black text-lg text-white px-6 py-3 rounded-lg hover:bg-opacity-75 hover:backdrop-blur-lg transition-colors duration-300 flex justify-center items-center gap-2 w-full lg:w-6/12 relative z-10"
            >
              <Icon icon="mdi:cart-outline" className="text-2xl" />
              Shop Now
            </Link>
          </div>
        </div>

        {/* Row 4: Image on the Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-0 md:sticky top-0 z-50">
          {/* Description Div - Asymmetrical Design with Gradient Overlay */}
          <div
            className="relative  flex-col flex gap-6 items-start  h-full w-full bg-neutral-100 bg-opacity-85 backdrop-blur justify-center p-8 order-2 md:order-1"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            {/* Gradient Overlay */}
            <div className="gradient-overlay"></div>

            {/* Blob Shape */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-zinc-600 rounded-full opacity-50"></div>
            {/* Square Shape */}
            <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-zinc-200 opacity-50 rotate-45"></div>

            <h2 className="text-3xl font-bold  relative z-10 text-white">
              Classic Watch
            </h2>
            <p className="text-neutral-100 text-left  relative z-10">
              Discover the perfect accessory for every occasion with our classic
              watches. Combining timeless elegance with modern functionality,
              our watches are designed to complement your style. Whether you're
              dressing up for a formal event or keeping it casual, our
              collection offers a variety of designs to suit your taste.
            </p>
            <Link
              to="/shop"
              className="bg-black text-lg text-white px-6 py-3 rounded-lg hover:bg-opacity-75 hover:backdrop-blur-lg transition-colors duration-300 flex justify-center items-center gap-2 w-full lg:w-6/12 relative z-10"
            >
              <Icon icon="mdi:cart-outline" className="text-2xl" />
              Shop Now
            </Link>
          </div>

          {/* Background Image Div */}
          <div
            className="relative h-[400px] overflow-hidden order-1 md:order-2"
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
