import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "aos/dist/aos.css"; // Import AOS CSS
import { Icon } from "@iconify/react";

const FeaturedProducts = () => {
  const { products } = useContext(AppContext); // Access products from context
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="container mx-auto max-w-6xl  bg-gradient-to-t from-neutral-800 to-black py-10  z-[99999]">
      <h2
        className="text-4xl text-white font-bold text-center flex justify-center items-center uppercase mb-8"
        data-aos="fade-up"
      >
        <Icon icon="uit:star" />
        <span>Featured Products</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 container p-4 max-w-5xl mx-auto gap-6">
        {featuredProducts.map((product, index) => (
          <div
            key={product.id}
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
