import React, { useContext } from "react";
import { Slider } from "antd";
import { AppContext } from "../../context/AppContext";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { Icon } from "@iconify/react";
import "./Filters.css";
const Filters = () => {
  const { filters, updateFilters, products } = useContext(AppContext);

  // Extract unique categories
  const categories = [...new Set(products.map((product) => product.category))];

  const handleCategoryChange = (category) => {
    updateFilters({
      ...filters,
      category: filters.category === category ? "all" : category,
    });
  };

  const handlePriceChange = (value) => {
    updateFilters({ ...filters, minPrice: value[0], maxPrice: value[1] });
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 space-y-6 w-full md:w-64">
      {/* Category Filter */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
          <Icon
            icon="material-symbols:category-outline-rounded"
            width="24"
            height="24"
          />
          <span>Category</span>
        </h2>
        <div className="space-y-3">
          <label className="flex items-center cursor-pointer space-x-3">
            <Checkbox.Root
              checked={filters.category === "all"}
              onCheckedChange={() => handleCategoryChange("all")}
              className="w-6 h-6 border-2 rounded-md flex items-center justify-center
                         transition-all duration-300
                        data-[state=checked]:bg-black data-[state=checked]:border-neutral-800
                         border-  neutral-300"
            >
              <Checkbox.Indicator>
                <CheckIcon className="text-white w-5 h-5" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <span className="text-  neutral-700">All Categories</span>
          </label>

          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center cursor-pointer space-x-3"
            >
              <Checkbox.Root
                checked={filters.category === category}
                onCheckedChange={() => handleCategoryChange(category)}
                className="w-6 h-6 border-2 rounded-md flex items-center justify-center
                           transition-all duration-300
                           data-[state=checked]:bg-black data-[state=checked]:border-neutral-800
                           border-  neutral-300"
              >
                <Checkbox.Indicator>
                  <CheckIcon className="text-white w-5 h-5" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <span className="text-  neutral-700 capitalize">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-900 mb-4">
          Price Range
        </h2>
        <Slider
          range
          min={0}
          max={1000}
          value={[filters.minPrice, filters.maxPrice]}
          onChange={handlePriceChange}
          className="custom-slider"
        />
        <div className="text-center text-  neutral-700 mt-2 font-medium">
          ${filters.minPrice} - ${filters.maxPrice}
        </div>
      </div>
    </div>
  );
};

export default Filters;
