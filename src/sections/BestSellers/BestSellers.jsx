import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Icon } from "@iconify/react";
const BestSellers = () => {
  const { products } = useContext(AppContext);
  const bestSellers = products.slice(5, 8); // Example: Use the next 3 products as best sellers

  return (
    <div className="container mx-auto px-4 max-w-6xl  bg-neutral-100 z-[998]  py-10">
      <h2
        className="text-4xl font-bold text-center flex justify-center items-center mb-8 uppercase gap-4"
        data-aos="fade-up"
      >
        <Icon icon="streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow" />
        <span>Best Sellers</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 container p-4 max-w-5xl mx-auto gap-6">
        {bestSellers.map((product, index) => (
          <div data-aos="fade-up" data-aos-delay={index * 200} key={index}>
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
