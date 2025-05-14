import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "aos/dist/aos.css"; // Import AOS CSS
import { Icon } from "@iconify/react";
import GridBg from "../../components/GridBg";

const FeaturedProducts = () => {
  const { products } = useContext(AppContext); // Access products from context
  const featuredProducts = products.slice(0, 3);

  return (
    <div className=" mx-auto  bg-white   py-10  relative z-50">
      <GridBg />
      <h2
        className="text-2xl md:text-4xl text-neutral-800 font-bold text-center gap-4 flex justify-center items-center uppercase mb-8"
        data-aos="fade-up"
      >
        <Icon icon="stash:stars" />
        <span className="mt-1">Featured Products</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 container p-4 max-w-5xl mx-auto gap-6 z-50">
        {featuredProducts.map((product, index) => (
          <div
            key={product.id}
            className="z-50"
            data-aos="fade-up"
            data-aos-delay={index * 200} // Delay each product's animation
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
