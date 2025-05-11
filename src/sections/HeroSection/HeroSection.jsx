import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "./HeroSection.css";
import ProductGrid from "../ProductGrid/ProductGrid";

const HeroSection = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const wordsRef = useRef([]);
  const buttonRef = useRef(null);
  const paragraphRef = useRef(null);

  // Initialize GSAP animations
  useEffect(() => {
    // Set initial styles before animation
    gsap.set(wordsRef.current, { opacity: 0, y: 20 });
    gsap.set(paragraphRef.current, { opacity: 0, y: 20 });
    gsap.set(buttonRef.current, { opacity: 0, y: 20 });

    // Create timeline for sequenced animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate words one by one
    wordsRef.current.forEach((word, index) => {
      tl.to(
        word,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.1,
        },
        "<0.1"
      ); // slight overlap for smoothness
    });

    // Animate paragraph
    tl.to(
      paragraphRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      },
      "-=0.4"
    );

    // Animate button
    tl.to(
      buttonRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
      },
      "-=0.3"
    );

    // Background gradient animation
    tl.fromTo(
      ".hero-grd",
      { backgroundPosition: "0% 50%" },
      {
        backgroundPosition: "100% 50%",
        duration: 10,
        ease: "none",
        repeat: -1,
        yoyo: true,
      },
      0
    );

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  const text = "Discover the Best Deals Online";
  const words = text.split(" ");

  return (
    <div className="relative z-50" ref={heroRef}>

      <div
        className="absolute inset-0 z-50
  [background-image:radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)]
  bg-[length:20px_20px] opacity-30"
      ></div>
      <div className="hero-grd"></div>
      <div className="hero sticky top-0">
        <section
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full hero flex hero-grd items-center justify-center text-black overflow-hidden px-10"
        >
          {/* Content */}
          <div className="relative text-center">
            {/* Word-by-Word Fade-Up Effect with Proper Spacing */}
            <h1 className="md:text-8xl text-6xl  flex flex-wrap justify-center font-bold mb-6 selection:bg-transparent selection:text-neutral-400">
              {words.map((word, index) => (
                <span
                  key={index}
                  className="words"
                  ref={(el) => (wordsRef.current[index] = el)}
                >
                  {word}&nbsp;
                </span>
              ))}
            </h1>

            <p className="text-xl mb-8 text-black" ref={paragraphRef}>
              Explore our exclusive collection of products and enjoy seamless
              shopping with fast delivery.
            </p>
            <Link to={"shop"} ref={buttonRef}>
              <button
                className="
                  relative
                  bg-gradient-to-r mx-auto from-neutral-700 to-black
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
      <ProductGrid />
    </div>
  );
};

export default HeroSection;
