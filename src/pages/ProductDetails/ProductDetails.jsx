import React, { useContext, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DottedBgWhite from "../../components/DottedBgWhite";

gsap.registerPlugin(ScrollTrigger);

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(AppContext);
  const product = products.find((p) => p.id === parseInt(id));

  // Animation refs
  const containerRef = useRef(null);
  const jacketRef = useRef(null);
  const hologramRef = useRef(null);
  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const descRef = useRef(null);
  const featuresRef = useRef([]);
  const specsRef = useRef([]);
  const ctaRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    if (!product) return;

    // Initial hidden state
    gsap.set([jacketRef.current, hologramRef.current], {
      opacity: 0,
      y: 50,
      scale: 0.95,
      filter: "blur(5px)",
    });

    gsap.set([titleRef.current, priceRef.current, descRef.current], {
      opacity: 0,
      y: 30,
    });

    gsap.set(featuresRef.current, {
      opacity: 0,
      x: -20,
    });

    gsap.set(specsRef.current, {
      opacity: 0,
      x: 20,
    });

    gsap.set(ctaRef.current, {
      opacity: 0,
      scale: 0.8,
    });

    // Animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Jacket reveal with hologram effect
    tl.to(jacketRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 1.2,
    }).to(
      hologramRef.current,
      {
        opacity: 0.3,
        duration: 0.8,
      },
      "-=0.8"
    );

    // Content reveal
    tl.to(
      titleRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      "-=0.6"
    )
      .to(
        priceRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "-=0.4"
      )
      .to(
        descRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "-=0.3"
      )
      .to(
        featuresRef.current,
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.4,
        },
        "-=0.3"
      )
      .to(
        specsRef.current,
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.4,
        },
        "-=0.4"
      )
      .to(
        ctaRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(2)",
        },
        "-=0.3"
      );

    // Floating particles animation
    particlesRef.current.forEach((particle, i) => {
      gsap.to(particle, {
        y: gsap.utils.random(-20, 20),
        x: gsap.utils.random(-20, 20),
        duration: gsap.utils.random(3, 6),
        repeat: -1,
        yoyo: true,
        delay: i * 0.2,
      });
    });

    // Scroll animation for jacket
    ScrollTrigger.create({
      trigger: jacketRef.current,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => {
        gsap.to(jacketRef.current, {
          rotateY: 15,
          duration: 1.5,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(jacketRef.current, {
          rotateY: 0,
          duration: 1,
          ease: "power2.out",
        });
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [product]);

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-fixed bg-neutral-900 text-white">
        <div className="text-center p-8">
          <Icon
            icon="mdi:alert-circle-outline"
            className="w-16 h-16 text-neutral-400 mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-xl opacity-80">
            This item doesn't exist in our collection
          </p>
        </div>
      </div>
    );
  }

  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  const renderParticles = () => {
    return Array.from({ length: 12 }).map((_, i) => (
      <div
        key={i}
        ref={(el) => addToRefs(el, particlesRef)}
        className="absolute rounded-full bg-neutral-400/20"
        style={{
          width: gsap.utils.random(2, 6),
          height: gsap.utils.random(2, 6),
          left: `${gsap.utils.random(5, 95)}%`,
          top: `${gsap.utils.random(5, 95)}%`,
          opacity: gsap.utils.random(0.1, 0.3),
        }}
      />
    ));
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-neutral-900 z-50 py-28 relative text-white overflow-hidden"
    >
      <DottedBgWhite />
      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {renderParticles()}
      </div>

      <div className="relative z-10  px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Jacket Visualization */}
          <div className="relative h-[500px] lg:h-[600px] flex  justify-center">
            {/* Hologram effect */}
            <div
              ref={hologramRef}
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,245,150,0.1)_0%,transparent_70%)] pointer-events-none"
              style={{
                backgroundSize: "200% 200%",
              }}
            />

            {/* Jacket image with reflection */}
            <div className="relative h-3/4 w-3/4 flex items-center justify-center perspective-1000">
              <img
                ref={jacketRef}
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain z-10 rounded-lg shadow-2xl transform-style-preserve-3d"
                style={{
                  transformOrigin: "center center",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-500/10 to-transparent z-0" />
            </div>

            {/* Material badge */}
            <div className="absolute top-0 left-0 bg-neutral-500/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium border border-neutral-400/30">
              {product.category}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1
                ref={titleRef}
                className="text-4xl md:text-5xl font-bold text-neutral-100"
              >
                {product.name}
              </h1>

              <div ref={priceRef} className="flex items-center gap-4">
                <span className="text-3xl font-bold">${product.price}</span>
                <span className="text-sm bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                  Limited Stock
                </span>
              </div>

              <p
                ref={descRef}
                className="text-lg text-neutral-300 leading-relaxed"
              >
                {product.description}
              </p>

              {/* Add to Cart */}
              <button
                ref={ctaRef}
                onClick={() => addToCart(product)}
                className="relative overflow-hidden group w-full lg:w-auto px-8 py-3 bg-gradient-to-r from-neutral-600 to-neutral-800 text-white font-semibold rounded-lg hover:from-neutral-500 hover:to-neutral-700 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Icon icon="mdi:cart-plus" className="w-5 h-5" />
                  Add to Collection
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-neutral-500 to-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2 text-neutral-200">
                <Icon icon="ph:star" className="w-5 h-5" />
                Premium Features
              </h2>
              <div className="space-y-3">
                {product.features.map((feature, i) => (
                  <div
                    key={i}
                    ref={(el) => addToRefs(el, featuresRef)}
                    className="flex items-start gap-3 p-3 bg-neutral-800/40 backdrop-blur-sm rounded-lg border border-neutral-700/50 hover:border-neutral-400/30 transition-colors duration-300"
                  >
                    <div className="bg-neutral-500/10 p-1.5 rounded-md">
                      <Icon
                        icon="lets-icons:check-fill"
                        className="w-4 h-4 text-neutral-400"
                      />
                    </div>
                    <p className="text-neutral-200">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2 text-neutral-200">
                <Icon icon="ph:ruler" className="w-5 h-5" />
                Product Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div
                  ref={(el) => addToRefs(el, specsRef)}
                  className="bg-neutral-800/40 backdrop-blur-sm p-3 rounded-lg border border-neutral-700/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-neutral-500/10 p-1.5 rounded-md">
                      <Icon
                        icon="ph:palette"
                        className="w-4 h-4 text-neutral-400"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-neutral-300">Colors</h3>
                      <p className="text-white">Black, Brown, Tan</p>
                    </div>
                  </div>
                </div>
                <div
                  ref={(el) => addToRefs(el, specsRef)}
                  className="bg-neutral-800/40 backdrop-blur-sm p-3 rounded-lg border border-neutral-700/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-neutral-500/10 p-1.5 rounded-md">
                      <Icon
                        icon="ph:sewing-needle"
                        className="w-4 h-4 text-neutral-400"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-neutral-300">Material</h3>
                      <p className="text-white">100% Genuine Leather</p>
                    </div>
                  </div>
                </div>
                <div
                  ref={(el) => addToRefs(el, specsRef)}
                  className="bg-neutral-800/40 backdrop-blur-sm p-3 rounded-lg border border-neutral-700/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-neutral-500/10 p-1.5 rounded-md">
                      <Icon
                        icon="ph:thermometer"
                        className="w-4 h-4 text-neutral-400"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-neutral-300">Lining</h3>
                      <p className="text-white">Quilted for Warmth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating action buttons */}
      <div className="fixed bottom-6 right-6 z-20 flex gap-3">
        <button className="p-3 bg-neutral-800/60 backdrop-blur-sm rounded-full border border-neutral-700/50 hover:bg-neutral-500/20 hover:border-neutral-400/30 transition-colors duration-300">
          <Icon icon="ph:heart" className="w-5 h-5" />
        </button>
        <button className="p-3 bg-neutral-800/60 backdrop-blur-sm rounded-full border border-neutral-700/50 hover:bg-neutral-500/20 hover:border-neutral-400/30 transition-colors duration-300">
          <Icon icon="ph:share-network" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
