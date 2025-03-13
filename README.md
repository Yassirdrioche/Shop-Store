BE SURE TO CREATE I SEMANTIC WEBSITE USING ,

<body bg="green">
<header></header>
<h1><h2><h3><h4><h5><h6>
<nav></nav>
<div></div>
<main></main>
<section></section>
<article></article>
<aside></aside>
</body>
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Slider, Checkbox } from "antd";
import { useLocation, useNavigate } from "react-router-dom";



const Shop = () => {
  const { filteredProducts, filters, updateFilters,products } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState([0, 500]);
  const categories = [...new Set(products.map((product) => product.category))];

  // Sync filters with URL params
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");
    const minPrice = queryParams.get("minPrice");
    const maxPrice = queryParams.get("maxPrice");

    // Apply URL params to filters
    const newFilters = { ...filters };

    if (category) newFilters.category = category;
    if (minPrice && maxPrice) {
      newFilters.priceRange = [parseInt(minPrice), parseInt(maxPrice)];
      setPriceRange([parseInt(minPrice), parseInt(maxPrice)]);
    }

    updateFilters(newFilters);
  }, [location.search]);

  // Handle category filter change
  const handleCategoryChange = (category) => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get("category") === category) {
      queryParams.delete("category");
    } else {
      queryParams.set("category", category);
    }
    navigate(`?${queryParams.toString()}`);
  };

  // Handle price range change
  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  // Apply price range filter on slider stop
  const handlePriceAfterChange = (value) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("minPrice", value[0]);
    queryParams.set("maxPrice", value[1]);
    navigate(`?${queryParams.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row p-6 space-x-0 md:space-x-6">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4 p-4 bg-gray-100 rounded-xl shadow-md h-fit">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Filters</h2>

        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Category</h3>
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2 mb-2">
              <Checkbox
                checked={filters.category === category}
                onChange={() => handleCategoryChange(category)}
              />
              <label className="text-gray-600">{category}</label>
            </div>
          ))}
        </div>

        {/* Price Range Filter */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Price Range
          </h3>
          <Slider
            range
            min={0}
            max={500}
            value={priceRange}
            onChange={handlePriceChange}
            onAfterChange={handlePriceAfterChange} // Only update URL after slider stops moving
            step={10}
          />
          <div className="text-sm text-gray-600 mt-2">
            ${priceRange[0]} - ${priceRange[1]}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No products found. Try adjusting the filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");

    if (category) {
      // Update filters with the category from the query parameter
      updateFilters({ ...filters, category });
    }
  }, [location.search]);