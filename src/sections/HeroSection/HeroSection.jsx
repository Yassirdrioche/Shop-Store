import React, { useEffect, useRef, useMemo, useCallback } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "./HeroSection.css";
import ProductGrid from "../ProductGrid/ProductGrid";

const HeroSection = () => {
  // Refs
  const heroRef = useRef(null);
  const wordsRef = useRef([]);
  const buttonRef = useRef(null);
  const paragraphRef = useRef(null);

  // Memoized constants
  const text = useMemo(() => "Discover the Best Deals Online", []);
  const words = useMemo(() => text.split(" "), [text]);

  // Animation setup
  const setupInitialStyles = useCallback(() => {
    gsap.set(wordsRef.current, {
      opacity: 0,
      y: 20,
      filter: "blur(50px)",
    });
    gsap.set(paragraphRef.current, {
      opacity: 0,
      y: 20,
      filter: "blur(50px)",
    });
    gsap.set(buttonRef.current, {
      opacity: 0,
      y: 20,
      filter: "blur(50px)",
    });
  }, []);

  // Animation timeline
  const createAnimations = useCallback(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate words one by one
    wordsRef.current.forEach((word, index) => {
      tl.to(
        word,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.3,
          delay: index * 0.1,
        },
        "<0.1"
      );
    });

    // Animate paragraph and button
    tl.to(paragraphRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      filter: "blur(0px)",
    })
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          filter: "blur(0px)",
        },
        "-=0.25"
      )
      .fromTo(
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

    return tl;
  }, []);

  // GSAP effects
  useEffect(() => {
    setupInitialStyles();
    const animationTimeline = createAnimations();

    return () => {
      animationTimeline.kill();
    };
  }, [setupInitialStyles, createAnimations]);

  return (
    <div className="relative z-50" ref={heroRef}>
      <div
        className="absolute inset-0 z-50
          [background-image:radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)]
          bg-[length:20px_20px] opacity-30"
      />
      <div className="hero-grd" />
      <div className="hero sticky top-0">
        <section
          className="w-full hero flex hero-grd items-center justify-center text-black overflow-hidden px-10"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative text-center">
            <h1 className="md:text-8xl text-5xl flex flex-wrap justify-center font-bold mb-6 selection:bg-transparent selection:text-neutral-400">
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

            <p ref={paragraphRef} className="text-xl mb-8 text-black">
              Explore our exclusive collection of products and enjoy seamless
              shopping with fast delivery.
            </p>

            <Link to="shop" ref={buttonRef}>
              <button
                className="relative bg-gradient-to-r mx-auto from-neutral-700 to-black
                  hover:bg-gradient-to-r hover:from-neutral-500 hover:to-black
                  px-8 py-2 gap-2 rounded-lg md:w-80
                  justify-center flex items-center
                  transition-all duration-500 ease-in-out
                  shadow-lg hover:shadow-xl overflow-hidden group"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-neutral-500 to-black
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <span
                  className="absolute top-0 left-0 w-1/2 h-full
                    bg-gradient-to-r from-white/10 to-transparent
                    transform -skew-x-12 -translate-x-full
                    group-hover:animate-shine pointer-events-none"
                />
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

export default React.memo(HeroSection);
