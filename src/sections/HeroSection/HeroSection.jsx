import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
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
    <div className="relative z-50 ">
      <div className="hero-grd"></div>
      <div className="hero sticky top-0 ">
        <section
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full hero flex hero-grd  items-center justify-center text-black overflow-hidden px-10"
        >
          {/* Content */}
          <div className="relative text-left ">
            {/* Word-by-Word Fade-Up Effect with Proper Spacing */}
            <h1 className="md:text-8xl text-6xl flex  flex-wrap font-bold mb-6 ">
              {words.map((word, index) => (
                <span
                  key={index}
                  className="fade-up words"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </h1>

            <p
              className="text-xl mb-8 text-black animate-fade-in-up"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Explore our exclusive collection of products and enjoy seamless
              shopping with fast delivery.
            </p>
            <Link to={"shop"}>
              <button
                className="
  relative
  bg-gradient-to-r from-neutral-700 to-black
  hover:bg-gradient-to-r hover:from-neutral-500 hover:to-black
  px-8 py-2 gap-2 rounded-lg md:w-80
  justify-center flex items-center
  transition-all duration-500 ease-in-out
  shadow-lg hover:shadow-xl
  overflow-hidden
  group
"
              >
                {/* Gradient animation layer */}
                <span
                  className="
    absolute inset-0
    bg-gradient-to-r from-neutral-500 to-black
    opacity-0 group-hover:opacity-100
    transition-opacity duration-500
  "
                ></span>

                {/* Shine effect on hover */}
                <span
                  className="
    absolute top-0 left-0 w-1/2 h-full
    bg-gradient-to-r from-white/10 to-transparent
    transform -skew-x-12 -translate-x-full
    group-hover:animate-shine
    pointer-events-none
  "
                ></span>

                <div className="relative z-10 flex items-center">
                  <Icon
                    icon="weui:shop-outlined"
                    className="h-7 w-7 text-white transition-transform group-hover:scale-110 duration-300"
                  />
                  <span className="text-xl font-semibold text-white ml-2 group-hover:tracking-wider transition-all duration-300">
                    Shop Now
                  </span>
                </div>
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
