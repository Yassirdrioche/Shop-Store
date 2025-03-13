import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import headphone from "../../assets/picture/jbl.webp";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HeroSection.css";

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
    <div className="relative container max-w-6xl mx-auto">
      <div className="fixed w-full container max-w-6xl  left-1/2 -translate-x-1/2 z-[-1] top-0">
        <section
          style={{
            backgroundAttachment: "fixed",
            backgroundImage: `url(${headphone})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="container rounded-b-xl max-w-7xl mx-auto bg-fixed w-full h-screen flex items-center justify-between text-white overflow-hidden px-10"
        >
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            data-aos="fade-up"
            data-aos-duration="500"
          ></div>

          {/* Content */}
          <div className="relative z-10 text-left max-w-2xl ">
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
          </div>
        </section>
      </div>
      {/* Button with higher z-index */}
      <div className="absolute -top-52 sm:-top-56 md:-top-20 lg:-72 w-10/12  md:w-full left-10 ">
        <Link to={"shop"}>
          <button className="bg-gradient-to-r from-neutral-700 to-black hover:from-neutral-500 hover:to-black  p-3 gap-2 rounded-lg md:w-1/4 w-full justify-center flex items-center transition-colors duration-300 shadow-lg hover:shadow-xl">
            <Icon
              icon="weui:shop-outlined"
              className="h-7 w-7 text-white"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <span
              className="text-xl font-semibold text-white"
            >
              Shop Now
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
