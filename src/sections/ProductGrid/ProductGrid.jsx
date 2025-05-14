// src/components/ProductGrid.js
import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./ProductGrid.css";
import watch from "../../assets/gridprod/watch.jpg";
import clothes from "../../assets/gridprod/clothes1.jpg";
import shoes from "../../assets/gridprod/shoes.jpg";
import headphones from "../../assets/gridprod/headphones2.jpg";
import GridBg from "../../components/GridBg";

const products = [
  {
    id: 1,
    name: "Headphones",
    title: "Premium Headphones",
    description:
      "Immerse yourself in superior sound quality with our premium headphones. Designed for audiophiles and professionals, these headphones deliver crystal-clear audio, deep bass, and noise-cancellation features.",
    image: headphones,
    discount: "20% OFF",
  },
  {
    id: 2,
    name: "Clothes",
    title: "Stylish Clothes",
    description:
      "Elevate your style with our exclusive collection of trendy and comfortable clothing. From casual wear to formal attire, our designs are crafted to suit every occasion.",
    image: clothes,
    discount: "20% OFF",
  },
  {
    id: 3,
    name: "Shoes",
    title: "Comfortable Shoes",
    description:
      "Step into the perfect blend of style and comfort with our premium shoe collection. Designed for all-day wear, our shoes feature ergonomic designs, breathable materials, and durable soles.",
    image: shoes,
    discount: "20% OFF",
  },
  {
    id: 4,
    name: "Watch",
    title: "Classic Watch",
    description:
      "Discover the perfect accessory for every occasion with our classic watches. Combining timeless elegance with modern functionality, our watches are designed to complement your style.",
    image: watch,
    discount: "20% OFF",
  },
];

const ProductGrid = () => {
  return (
    <div className="bg-gradient-to-t to-neutral-50 from-neutral-100  py-12 px-4 sm:px-6 lg:px-8 z-50 relative">
      <GridBg />
      <div className="max-w-6xl mx-auto space-y-12">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8 md:sticky md:top-0 z-10"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            {/* Image Section */}
            <div
              className={`relative h-96 overflow-hidden rounded-xl ${
                index % 2 === 0 ? "order-1" : "order-1 md:order-2"
              }`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                <h2 className="text-white text-3xl font-bold mb-2">
                  {product.name}
                </h2>
                <p className="text-white text-lg">{product.discount}</p>
              </div>
            </div>

            {/* Description Section */}
            <div
              className={`relative bg-neutral-800/40 backdrop-blur-xl text-white p-8 rounded-xl flex flex-col gap-6 items-start h-96 justify-center ${
                index % 2 === 0 ? "order-2" : "order-2 md:order-1"
              }`}
            >
              {/* Decorative Shapes */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-neutral-500 rounded-full opacity-30"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-neutral-300 rounded-full opacity-30"></div>

              <h2 className="text-2xl font-bold">{product.title}</h2>
              <p className="text-neutral-200">{product.description}</p>
              <Link
                to="/shop"
                className="bg-neutral-600 text-white px-6 py-3 rounded-lg hover:bg-neutral-700 transition-colors duration-300 flex items-center gap-2"
              >
                <Icon icon="mdi:cart-outline" className="text-xl" />
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
