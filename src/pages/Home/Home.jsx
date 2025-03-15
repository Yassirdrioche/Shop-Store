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
import About from "../../sections/About/About";
// import GradientBackground from "../../GradientBackground";

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

      <Hero />

      {/* <ProductGrid /> */}

      <About />
      {/* Featured Products Section */}

      <FeaturedProducts />

      {/* Best Sellers Section */}

      <BestSellers />

      <OfferSection />
      {/* Category Section */}

      <Category />
      <div></div>
      <Blog />
      {/* Reviews Section */}

      <Reviews />
    </div>
  );
};

export default Home;
