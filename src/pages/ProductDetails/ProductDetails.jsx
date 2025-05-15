import React, { useContext, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { Icon } from "@iconify/react";
import GridBg from "../../components/GridBg";
import { gsap } from "gsap";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(AppContext);
  const product = products.find((p) => p.id === parseInt(id));

  // Refs for animation targets
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const featuresRef = useRef(null);
  const specsRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    // Set initial styles
    gsap.set(
      [
        imageRef.current,
        titleRef.current,
        priceRef.current,
        descRef.current,
        buttonRef.current,
        featuresRef.current,
        specsRef.current,
        ...elementsRef.current,
      ],
      {
        opacity: 0,
        y: 30,
        filter: "blur(5px)",
      }
    );

    // Create timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate elements in sequence
    tl.to(imageRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
    })
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
        },
        "-=0.4"
      )
      .to(
        priceRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
        },
        "-=0.3"
      )
      .to(
        descRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
        },
        "-=0.3"
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
        },
        "-=0.3"
      )
      .to(
        featuresRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
        },
        "-=0.2"
      )
      .to(
        specsRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
        },
        "-=0.2"
      )
      .to(
        elementsRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.5,
          stagger: 0.1,
        },
        "-=0.4"
      );

    return () => tl.kill();
  }, [product]);

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b relative z-50 bg-white">
        <div className="prod-grd" />
        <GridBg />
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <Icon
            icon="mdi:alert-circle-outline"
            className="w-16 h-16 text-neutral-400 mx-auto mb-4"
          />
          <p className="text-2xl font-bold text-neutral-900">
            Product Not Found
          </p>
          <p className="text-neutral-900 mt-2">
            The product you're looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  // Add feature items to animation refs
  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white py-20 px-4 sm:px-6 lg:px-8 relative z-50">
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 min-h-screen mt-14">
        {/* Product Image */}
        <div className="sticky top-28 h-fit overflow-hidden rounded-2xl shadow-lg p-6">
          <img
            ref={imageRef}
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-contain transform transition-all duration-500 hover:scale-105"
          />
          {/* Badge for Product Category */}
          <div
            ref={addToRefs}
            className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-neutral-900 shadow-lg border border-neutral-200"
          >
            {product.category}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="space-y-8">
          {/* Product Information */}
          <div className="space-y-6">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold text-left text-neutral-900 bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700"
            >
              {product.name}
            </h1>

            <p
              ref={priceRef}
              className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            >
              ${product.price}
            </p>

            <p
              ref={descRef}
              className="text-lg text-neutral-700 leading-relaxed"
            >
              {product.description}
            </p>

            {/* Add to Cart Button */}
            <button
              ref={buttonRef}
              className="w-full lg:w-auto flex items-center justify-center px-8 py-4 bg-gradient-to-r from-neutral-900 to-neutral-700 text-white font-semibold rounded-xl hover:from-neutral-700 hover:to-neutral-800 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
              onClick={() => addToCart(product)}
            >
              <Icon icon="mdi:cart-plus" className="w-6 h-6 mr-2" />
              Add to Cart
            </button>

            {/* Product Features */}
            <div
              ref={featuresRef}
              className="mt-8 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-neutral-200/50"
            >
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                <Icon
                  icon="icon-park-outline:feature-list"
                  className="inline mr-2"
                />
                Key Features
              </h2>
              <ul className="space-y-4">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    ref={addToRefs}
                    className="flex items-start space-x-3 text-neutral-800"
                  >
                    <Icon
                      icon="lets-icons:check-fill"
                      className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Specifications */}
            <div
              ref={specsRef}
              className="mt-8 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-neutral-200/50"
            >
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                <Icon
                  icon="fluent:top-speed-24-regular"
                  className="inline mr-2"
                />
                Specifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(
                  ([key, value], index) => (
                    <div
                      key={key}
                      ref={addToRefs}
                      className="flex items-start gap-3 text-neutral-800"
                    >
                      <Icon
                        icon="tabler:info-circle-filled"
                        className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0"
                      />
                      <div>
                        <span className="font-semibold text-neutral-900">
                          {key}:{" "}
                        </span>
                        <span>
                          {Array.isArray(value) ? value.join(", ") : value}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
