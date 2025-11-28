import React, { useEffect, useRef, useMemo, useCallback } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "./HeroSection.css";
import ProductGrid from "../ProductGrid/ProductGrid";
import headphones from "../../assets/picture/head2.png";
import headwhite from "../../assets/picture/headwhite.png";
import shopphone from "../../assets/picture/shop.png";
import shoes from "../../assets/picture/shoes2.png";

const HeroSection = () => {
  // Refs - reduced number of refs
  const heroRef = useRef(null);
  const textContainerRef = useRef(null);
  const imagesContainerRef = useRef(null);

  // Memoized constants
  const text = useMemo(() => "Shop Smarter Save Bigger", []);
  const words = useMemo(() => text.split(" "), [text]);

  // Simplified animation setup
  const setupAnimations = useCallback(() => {
    // Set initial states
    gsap.set(textContainerRef.current, { opacity: 0 });
    gsap.set(imagesContainerRef.current, { opacity: 0, scale: 0.95 });
    
    // Create minimal timeline
    const tl = gsap.timeline({ 
      defaults: { 
        ease: "power2.out",
        duration: 0.4 
      } 
    });

    // Animate text container
    tl.to(textContainerRef.current, { 
      opacity: 1, 
      duration: 0.6 
    });

    // Animate images container
    tl.to(imagesContainerRef.current, { 
      opacity: 1, 
      scale: 1,
      duration: 0.8 
    }, "-=0.3");

    // Background animation only if necessary
    tl.fromTo(
      ".hero-grd",
      { backgroundPosition: "0% 0%" },
      {
        backgroundPosition: "100% 100%",
        duration: 15,
        ease: "none",
        repeat: -1,
      },
      0
    );

    return tl;
  }, []);

  // GSAP effects
  useEffect(() => {
    const animationTimeline = setupAnimations();

    return () => {
      animationTimeline.kill();
    };
  }, [setupAnimations]);

  return (
    <div className="relative z-50" ref={heroRef}>
      <div className="hero-grd" />
      <div className="hero sticky top-0">
        <div
          className="absolute inset-0
          [background-image:radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)]
          bg-[length:20px_20px] opacity-30"
        />
        <section className="w-full hero flex items-center max-w-6xl 2xl:max-w-none mx-auto flex-wrap text-black min-h-screen px-4 md:px-10 py-20 md:py-0 relative">
          
          {/* Text Content */}
          <div 
            ref={textContainerRef}
            className="relative w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0 z-20"
          >
            <h1 className="text-5xl md:text-6xl 2xl:text-8xl flex flex-wrap justify-center md:justify-start font-bold mb-6 selection:bg-transparent selection:text-neutral-400">
              {words.map((word, index) => (
                <span key={index} className="words">
                  {word}&nbsp;
                </span>
              ))}
            </h1>

            <p className="text-lg md:text-xl mb-8 text-black opacity-0 animate-fadeIn">
              Explore our exclusive collection of products
            </p>

            <Link to="shop" className="flex justify-center md:justify-start">
              <button
                className="relative bg-gradient-to-r from-neutral-700 to-black
                  hover:bg-gradient-to-r hover:from-neutral-500 hover:to-black
                  px-6 py-2 md:px-8 md:py-2 gap-2 rounded-lg w-full md:w-80
                  justify-center flex items-center
                  transition-all duration-300 ease-in-out
                  shadow-lg hover:shadow-xl overflow-hidden group opacity-0 animate-fadeIn"
                style={{ animationDelay: "0.3s" }}
              >
                <span className="text-white font-medium">Shop Now</span>
                <Icon icon="mdi:arrow-right" className="text-white text-xl" />
              </button>
            </Link>
          </div>

          {/* Mobile Image */}
          <div
            className="absolute w-96 h-96 left-1/2 -translate-x-1/2 rounded-2xl flex md:hidden opacity-0 animate-fadeIn"
            style={{
              backgroundImage: `url(${headwhite})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Desktop Images Container */}
          <div 
            ref={imagesContainerRef}
            className="hidden md:flex items-center justify-center relative w-full md:w-1/2 h-full drop-shadow-xl"
          >
            {/* Main Image */}
            <div
              className="relative z-10 w-3/4 h-1/2 md:h-2/4 md:2/4 lg:w-3/4 lg:h-3/4 rounded-2xl"
              style={{
                backgroundImage: `url(${headphones})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Floating Image 1 */}
            <div
              className="absolute md:w-80 md:h-80 z-20 left-0 top-14 2xl:top-1/2 lg:w-96 lg:h-96 rounded-xl transform"
              style={{
                backgroundImage: `url(${shopphone})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Floating Image 2 */}
            <div
              className="absolute z-20 md:w-80 md:h-80 lg:w-96 lg:h-96 top-12 -right-20 lg:right-0 2xl:top-1/2 rounded-xl bg-no-repeat"
              style={{
                backgroundImage: `url(${shoes})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);
