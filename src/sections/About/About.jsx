import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { Icon } from "@iconify/react";
import office1 from "../../assets/picture/office.jpg";
import office2 from "../../assets/picture/office2.jpg";
import team from "../../assets/picture/team.jpg";
import road from "../../assets/picture/road.jpg";
import ball from "../../assets/picture/ball.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(counterRef.current);
        }
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 py-24 z-50"
      id="about-us"
    >
      {/* Custom Shape Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-neutral-400 to-neutral-700 rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-r from-neutral-400 to-neutral-700 rounded-full opacity-20 blur-3xl animate-float-reverse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading with Gradient Text */}
        <h2
          className="text-6xl font-bold text-center mb-16 flex items-center justify-center"
          data-aos="fade-up"
        >
          <Icon
            icon="mdi:about-variant"
            className="mr-4 text-7xl text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-blue-600"
          />
          <span className="uppercase bg-clip-text text-transparent bg-gradient-to-r from-black to-neutral-700">
            About Us
          </span>
        </h2>

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="space-y-8" data-aos="fade-up">
            <p className="text-neutral-700 text-lg leading-relaxed">
              We are a company dedicated to providing high-quality products and
              exceptional customer service. Our mission is to make your life
              better with our innovative solutions.
            </p>
            <p className="text-neutral-700 text-lg leading-relaxed">
              With a passion for excellence, we strive to deliver products that
              combine cutting-edge technology, sleek design, and unmatched
              functionality.
            </p>
            <button
              className="bg-gradient-to-r from-neutral-600 to-black/50 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              data-aos="fade-up"
            >
              Learn More
            </button>
          </div>

          {/* Right Side: Image with Parallax Effect */}
          <div className="relative" data-aos="fade-up">
            <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-r from-neutral-400 to-neutral-800 rounded-lg shadow-2xl transform rotate-6"></div>
            <img
              src={office1}
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 relative z-10"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg w-1/2 z-20">
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-neutral-700">
                To be the global leader in innovative solutions that transform
                lives.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
          ref={counterRef}
        >
          {/* Feature 1 */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
          >
            <div className="text-5xl font-bold text-black mb-4">
              {isVisible ? (
                <CountUp start={0} end={10} duration={2} suffix="+" />
              ) : (
                "0+"
              )}
            </div>
            <h3 className="text-2xl font-semibold mb-2">Years of Experience</h3>
            <p className="text-neutral-700">
              We have been serving customers for over a decade.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
          >
            <div className="text-5xl font-bold text-black mb-4">
              {isVisible ? (
                <CountUp start={0} end={500} duration={2} suffix="+" />
              ) : (
                "0+"
              )}
            </div>
            <h3 className="text-2xl font-semibold mb-2">Happy Clients</h3>
            <p className="text-neutral-700">
              Our customers trust us for quality and reliability.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
          >
            <div className="text-5xl font-bold text-black mb-4">
              {isVisible ? (
                <CountUp start={0} end={100} duration={2} suffix="%" />
              ) : (
                "0%"
              )}
            </div>
            <h3 className="text-2xl font-semibold mb-2">Satisfaction</h3>
            <p className="text-neutral-700">
              We guarantee satisfaction with every purchase.
            </p>
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Creative Image Grid */}
          <div className="grid grid-cols-2 gap-6 relative">
            <div className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-r from-neutral-800 to-neutral-400 rounded-lg shadow-2xl transform rotate-6"></div>
            <img
              src={road}
              alt="history"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 relative z-10"
              data-aos="fade-up"
            />
            <img
              src={ball}
              alt="technologie"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 relative z-10"
              data-aos="fade-up"
            />
            <img
              src={team}
              alt="team"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 relative z-10"
              data-aos="fade-up"
            />
            <img
              src={office2}
              alt="office"
              className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 relative z-10"
              data-aos="fade-up"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="space-y-8" data-aos="fade-up">
            <h3 className="text-4xl font-bold text-neutral-900">Our Story</h3>
            <p className="text-neutral-700 text-lg leading-relaxed">
              Founded in 2010, we started as a small team with a big dream: to
              revolutionize the way people experience technology. Over the
              years, we've grown into a global brand, but our commitment to
              quality and innovation remains unchanged.
            </p>
            <p className="text-neutral-700 text-lg leading-relaxed">
              Our team of experts works tirelessly to bring you the best
              products and services. From design to delivery, we ensure every
              detail is perfect.
            </p>
            <button
              className="bg-gradient-to-r from-neutral-800 to-neutral-400  text-white px-8 py-4 rounded-lg hover:bg-black transition-all duration-300 transform hover:scale-95 shadow-lg"
              data-aos="fade-up"
            >
              Meet the Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
