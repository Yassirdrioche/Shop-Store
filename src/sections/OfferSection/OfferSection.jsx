import React from "react";
import { useScroll, animated } from "@react-spring/web";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // For the image carousel
import "slick-carousel/slick/slick.css"; // Carousel styles
import "slick-carousel/slick/slick-theme.css"; // Carousel theme styles

const OfferSection = () => {
  // UseScroll hook to track scroll position
  const { scrollYProgress } = useScroll();

  // Animation for the card and text
  const cardAnimation = {
    opacity: scrollYProgress.to([0, 0.5], [0, 1]), // Fade in
    transform: scrollYProgress.to(
      (val) => `translateY(${val * 50}px) scale(${0.9 + val * 0.1})` // Move up and scale
    ),
  };

  const textAnimation = {
    opacity: scrollYProgress.to([0, 0.5], [0, 1]), // Fade in
    transform: scrollYProgress.to((val) => `translateY(${val * 20}px)`), // Move up
  };

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // Array of offer images
  const offerImages = [
    "https://i.pinimg.com/736x/de/dd/3d/dedd3d8f3ec58659e569f95cbdcb027f.jpg",
    "https://i.pinimg.com/736x/24/34/75/2434750f35adde85d328722fc74a73ed.jpg",
    "https://i.pinimg.com/736x/f1/a6/09/f1a6098a21205712052d5ba9a3edaa11.jpg",
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 min-h-screen max-w-6xl mx-auto flex flex-col justify-center items-center overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-center uppercase flex items-center gap-3 text-neutral-900 mb-12">
        <Icon icon="ic:outline-local-offer" className="text-5xl" />
        <span>Exclusive Offers</span>
      </h2>

      <section className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4">
        {/* Card with Carousel and Content */}
        <animated.div
          style={cardAnimation}
          className="w-full md:w-2/3 lg:w-1/2 bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl"
        >
          <div className="flex flex-col md:flex-row">
            {/* Carousel for Images */}
            <div className="w-full md:w-1/2 overflow-hidden">
              <Slider {...carouselSettings}>
                {offerImages.map((image, index) => (
                  <div key={index} className="w-full h-64 md:h-96">
                    <img
                      src={image}
                      alt={`Offer ${index + 1}`}
                      className="w-full h-full object-cover transform transition-all duration-500 hover:scale-110"
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-gradient-to-br from-neutral-800 to-neutral-900 text-white">
              <animated.div style={textAnimation} className="text-center">
                <h2 className="text-3xl font-bold mb-4">Special Offer!</h2>
                <p className="text-sm mb-6">
                  Explore our exclusive deals and save big on premium products.
                  Limited time only!
                </p>

                {/* Offer Details */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon icon="mdi:discount" className="text-xl" />
                    <span className="text-sm">
                      Up to 50% off on selected items
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon icon="mdi:calendar-clock" className="text-xl" />
                    <span className="text-sm">
                      Offer valid until December 31, 2023
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:gift" className="text-xl" />
                    <span className="text-sm">
                      Free shipping on orders above $50
                    </span>
                  </div>
                </div>

                {/* Button */}
                <Link to="/shop">
                  <button className="bg-white text-neutral-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Shop Now
                  </button>
                </Link>
              </animated.div>
            </div>
          </div>
        </animated.div>
      </section>
    </div>
  );
};

export default OfferSection;
