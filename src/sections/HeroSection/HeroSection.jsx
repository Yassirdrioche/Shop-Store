import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import headphone from "../../assets/picture/jbl.webp";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HeroSection.css";
import ProductGrid from "../ProductGrid/ProductGrid";

const HeroSection = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 120,
      easing: "ease-in-out",
    });

    // Splitting text into words
    const text = "Discover the Best Deals Online";
    setWords(text.split(" "));
  }, []);

  return (
    <div className="relative   z-50">
      <div className="hero   sticky top-0">
        <section
          style={{
            backgroundAttachment: "fixed",

            backgroundImage: `url(${headphone}), linear-gradient(to top ,rgba(10, 10, 10), rgb(20, 20, 20))`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="hero w-full h-dvh flex items-center justify-between text-white overflow-hidden px-10"
        >
          {/* Background Overlay */}

          {/* Content */}
          <div className="relative pt-[120px] z-10 text-left max-w-2xl ">
            {/* Word-by-Word Fade-Up Effect with Proper Spacing */}
            <h1 className="md:text-6xl text-5xl flex flex-wrap font-bold mb-6 text-white">
              {words.map((word, index) => (
                <span
                  key={index}
                  className="opacity-0 fade-word"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </h1>

            <p
              className="text-xl mb-8 text-gray-200 animate-fade-in-up"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Explore our exclusive collection of products and enjoy seamless
              shopping with fast delivery.
            </p>
            <Link to={"shop"}>
              <button className="bg-gradient-to-r from-neutral-700 to-black hover:from-neutral-500 hover:to-black  p-3 gap-2 rounded-lg  w-full md:w-3/5 justify-center flex items-center transition-colors duration-300 shadow-lg hover:shadow-xl">
                <Icon
                  icon="weui:shop-outlined"
                  className="h-7 w-7 text-white"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
                <span className="text-xl font-semibold text-white">
                  Shop Now
                </span>
              </button>
            </Link>
          </div>
        </section>
      </div>
      {/* Button with higher z-index */}

      <ProductGrid />
    </div>
  );
};

export default HeroSection;
