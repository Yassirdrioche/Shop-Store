import React, { useState, useEffect } from "react";
import { useScroll, animated } from "@react-spring/web";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const OfferSection = () => {
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

  // Countdown timer logic
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const offerEndDate = new Date("April 30, 2025 23:59:59").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = offerEndDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br relative z-50 from-gray-50 to-gray-100 py-16 mx-auto flex flex-col justify-center items-center overflow-hidden">
      {/* Floating Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute w-64 h-64 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-20 -top-32 -left-32 animate-float"></div>
        <div className="absolute w-48 h-48 bg-gradient-to-r from-blue-300 to-teal-300 rounded-full opacity-20 top-64 -right-24 animate-float-delay"></div>
      </div>

      {/* Main Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-center uppercase flex items-center gap-3 text-neutral-900 mb-12 relative z-10">
        <Icon icon="ic:outline-local-offer" />
        <span>Exclusive Offers</span>
      </h2>

      {/* Sub Heading */}
      <h3 className="text-xl md:text-2xl font-semibold text-center text-neutral-700 mb-8 relative z-10">
        Limited-Time Deals You Can’t Miss!
      </h3>

      <section className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 relative z-10">
        {/* Asymmetrical Image Section */}
        <animated.div
          style={cardAnimation}
          className="w-full md:w-1/2 relative transform -translate-x-10 -rotate-3"
        >
          <div
            className="w-full h-96 bg-cover bg-center rounded-3xl shadow-2xl overflow-hidden"
            style={{
              backgroundImage: `url(https://i.pinimg.com/736x/de/dd/3d/dedd3d8f3ec58659e569f95cbdcb027f.jpg)`,
              clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
            }}
          ></div>
          <div
            className="absolute -bottom-8 -right-8 w-64 h-64 bg-cover bg-center rounded-3xl shadow-2xl overflow-hidden transform rotate-6"
            style={{
              backgroundImage: `url(https://i.pinimg.com/736x/24/34/75/2434750f35adde85d328722fc74a73ed.jpg)`,
              clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
            }}
          ></div>
        </animated.div>

        {/* Content Section */}
        <animated.div
          style={textAnimation}
          className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-gradient-to-br from-neutral-800 to-neutral-900 text-white transform translate-x-10 rotate-3 rounded-3xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4">Special Offer!</h2>
          <p className="text-sm mb-6">
            🎉 **Hurry Up!** 🎉 Enjoy discounts of up to **50% off** on premium
            products. Free shipping on orders above **$50**. Limited time
            only—shop now and save big!
          </p>

          {/* Countdown Timer */}
          <div className="mb-6">
            <div className="flex justify-center gap-2">
              <div className="bg-white/10 p-2 rounded-lg text-center">
                <span className="text-2xl font-bold">{timeLeft.days}</span>
                <span className="text-xs block">Days</span>
              </div>
              <div className="bg-white/10 p-2 rounded-lg text-center">
                <span className="text-2xl font-bold">{timeLeft.hours}</span>
                <span className="text-xs block">Hours</span>
              </div>
              <div className="bg-white/10 p-2 rounded-lg text-center">
                <span className="text-2xl font-bold">{timeLeft.minutes}</span>
                <span className="text-xs block">Minutes</span>
              </div>
              <div className="bg-white/10 p-2 rounded-lg text-center">
                <span className="text-2xl font-bold">{timeLeft.seconds}</span>
                <span className="text-xs block">Seconds</span>
              </div>
            </div>
          </div>

          {/* Button */}
          <Link to="/shop">
            <button className="bg-white text-neutral-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Shop Now
            </button>
          </Link>
        </animated.div>
      </section>

      {/* Call-to-Action Section */}
      <div className="mt-16 text-center relative z-10">
        <h3 className="text-xl md:text-2xl font-semibold text-neutral-700 mb-4">
          Ready to Save Big?
        </h3>
        <p className="text-sm text-neutral-600 mb-6">
          Don’t wait—explore our exclusive offers and enjoy premium products at
          unbeatable prices. **Hurry, the offer ends soon!**
        </p>
        <Link to="/shop">
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl">
            Explore Offers
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OfferSection;
