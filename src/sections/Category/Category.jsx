import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { AppContext } from "../../context/AppContext"; // Import context

const Category = () => {
  const { products, updateFilters } = useContext(AppContext); // Access products and updateFilters from context

  // Extract unique categories from products
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const handleCategoryClick = (category) => {
    updateFilters({ category: category }); // Update the category filter
  };

  return (
    <div className="container mx-auto px-4 max-w-6xl bg-neutral-800 bg-opacity-80 backdrop-blur-lg py-16">
      <div className="px-4">
        <Link to={`/shop`}>
          {/* Heading */}
          <h2
            className="text-2xl md:text-4xl font-bold text-center flex justify-center items-center gap-4 mb-12 uppercase text-neutral-100"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <Icon icon="iconamoon:category-light" className="w-10 h-10" />
            <span>Shop by Category</span>
          </h2>

          {/* Creative and Unique Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {uniqueCategories.map((category, index) => {
              const categoryProduct = products.find(
                (prod) => prod.category === category
              );
              return (
                <div
                  key={index}
                  className={`group overflow-hidden rounded-lg shadow-lg hover:shadow-xl sticky top-0 transition-all duration-300 ${
                    index === 0
                      ? "sm:col-span-2 lg:col-span-2 h-64" // Large card for the first category
                      : index === 1
                      ? "sm:col-span-1 lg:col-span-1 h-64" // Medium card for the second category
                      : index === 2
                      ? "sm:col-span-1 lg:col-span-1 h-64" // Small card for the third category
                      : index === 3
                      ? "sm:col-span-2 lg:col-span-2 h-64" // Medium card for the fourth category
                      : index === 4
                      ? "sm:col-span-1 lg:col-span-2 h-64"
                      : "sm:col-span-1 lg:col-span-1 h-64" // Small cards for the rest
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                  onClick={() => handleCategoryClick(category)} // Set category filter on click
                >
                  {/* Category Image */}
                  <div className="relative h-full w-full overflow-hidden">
                    <img
                      src={categoryProduct.image} // Use the first product's image for the category
                      alt={category}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                    {/* Category Name */}
                    <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold capitalize">
                      {category}
                    </h3>
                  </div>

                  {/* Shop Now Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      to={`/shop`} // Link to the Shop page
                      className="flex items-center justify-center bg-white text-neutral-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-neutral-900 hover:text-white transition-all duration-300"
                    >
                      <span>Shop Now</span>
                      <Icon icon="mdi:arrow-right" className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;
