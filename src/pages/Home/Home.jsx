import React, { useEffect } from "react";
import Category from "../../sections/Category/Category";
import "./Home.css";
import Hero from "../../sections/HeroSection/HeroSection";
import BestSellers from "../../sections/BestSellers/BestSellers";
import Reviews from "../../sections/Reviews/Reviews";
import FeaturedProducts from "../../sections/FeaturedProducts/FeaturedProducts";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import ProductGrid from "../../sections/ProductGrid/ProductGrid";
import Blog from "../../sections/Blog/Blog";
import OfferSection from "../../sections/OfferSection/OfferSection";

const Home = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
      offset: 120, // Offset (in pixels) from the original trigger point
      easing: "ease-in-out", // Easing type
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      <section>
        <ProductGrid />
      </section>
      {/* Featured Products Section */}
      <section id="featured-products">
        <FeaturedProducts />
      </section>

      {/* Best Sellers Section */}
      <section id="best-sellers">
        <BestSellers />
      </section>
      <OfferSection />
      {/* Category Section */}
      <section id="category">
        <Category />
      </section>
      <Blog />
      {/* Reviews Section */}
      <section id="reviews">
        <Reviews />
      </section>
    </div>
  );
};

export default Home;
