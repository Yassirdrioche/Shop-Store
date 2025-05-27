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
  // Refs
  const heroRef = useRef(null);
  const wordsRef = useRef([]);
  const buttonRef = useRef(null);
  const paragraphRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  // Memoized constants
  const text = useMemo(() => "Shop Smarter Save Bigger", []);
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
    gsap.set([image1Ref.current, image2Ref.current, image3Ref.current], {
      opacity: 0,
      scale: 0.8,
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

    // Animate images
    tl.to(
      image1Ref.current,
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      },
      "-=0.2"
    )
      .to(
        image2Ref.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      )
      .to(
        image3Ref.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );

    // Animate paragraph and button
    tl.to(
      paragraphRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        filter: "blur(0px)",
      },
      "-=0.2"
    )
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
        { backgroundPosition: "100% 200%" },
        {
          backgroundPosition: "200% 300%",
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
      <div className="hero-grd" />
      <div className="hero sticky top-0">
        <div
          className="absolute inset-0
          [background-image:radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)]
          bg-[length:20px_20px] opacity-30"
        />
        <section className="w-full hero flex  items-center max-w-6xl 2xl:max-w-none  mx-auto flex-wrap text-black min-h-screen px-4 md:px-10 py-20 md:py-0 relative">
          {/* Text Content */}
          <div className="relative w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0 z-20">
            <h1 className="text-5xl  md:text-6xl 2xl:text-8xl flex flex-wrap justify-center md:justify-start font-bold mb-6 selection:bg-transparent selection:text-neutral-400">
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

            <p
              ref={paragraphRef}
              className="text-lg md:text-xl mb-8 text-black"
            >
              Explore our exclusive collection of products
            </p>

            <Link
              to="shop"
              ref={buttonRef}
              className="flex justify-center md:justify-start"
            >
              <button
                className="relative bg-gradient-to-r from-neutral-700 to-black
                  hover:bg-gradient-to-r hover:from-neutral-500 hover:to-black
                  px-6 py-2 md:px-8 md:py-2 gap-2 rounded-lg w-full md:w-80
                  justify-center flex items-center
                  transition-all duration-500 ease-in-out
                  shadow-lg hover:shadow-xl overflow-hidden group"
              >
                <span className="text-white font-medium">Shop Now</span>
                <Icon icon="mdi:arrow-right" className="text-white text-xl" />
              </button>
            </Link>
          </div>
          <div
            ref={image1Ref}
            className="absolute w-96 h-96 left-1/2 -translate-x-1/2 rounded-2xl flex md:hidden "
            style={{
              backgroundImage: `url(${headwhite})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* Image Container - Hidden on mobile */}
          <div className="hidden md:flex items-center justify-center relative w-full md:w-1/2  h-full drop-shadow-xl transform scale-95">
            {/* <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"> */}
            {/* Main Image */}
            <div
              ref={image1Ref}
              className="relative z-10 w-3/4 h-1/2 md:h-2/4 md:2/4 lg:w-3/4 lg:h-3/4 rounded-2xl "
              style={{
                backgroundImage: `url(${headphones})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Floating Image 1 (Top Right) */}
            <div
              ref={image2Ref}
              className="absolute md:w-80 md:h-80 z-20 left-0 top-14 2xl:top-1/2 lg:w-96 lg:h-96 rounded-xl transform"
              style={{
                backgroundImage: `url(${shopphone})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Floating Image 2 (Bottom Left) */}

            <div
              ref={image3Ref}
              className="absolute z-20 md:w-80 md:h-80 lg:w-96 lg:h-96 top-12 -right-20 lg:right-0 2xl:top-1/2 rounded-xl bg-no-repeat"
              style={{
                backgroundImage: `url(${shoes})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            />
          </div>
          {/* </div> */}
        </section>
      </div>
      {/* <ProductGrid /> */}
    </div>
  );
};

export default React.memo(HeroSection);
