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
  const counterRef = useRef(null); // Ref for the counter section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(counterRef.current); // Stop observing after triggering
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the counter section is visible
        rootMargin: "0px 0px -100px 0px", // Trigger 100px before the section comes into view
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
      className="bg-neutral-100 py-10 relative z-50   mx-auto"
      id="about-us"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2
          className="text-4xl font-bold text-center mb-12 flex items-center justify-center"
          data-aos="fade-up"
        >
          <Icon icon="mdi:about-variant" />
          <span className="uppercase">About Us</span>
        </h2>

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Text Content */}
          <div className="space-y-6" data-aos="fade-up">
            <p className="text-neutral-700 text-lg">
              We are a company dedicated to providing high-quality products and
              exceptional customer service. Our mission is to make your life
              better with our innovative solutions.
            </p>
            <p className="text-neutral-700 text-lg">
              With a passion for excellence, we strive to deliver products that
              combine cutting-edge technology, sleek design, and unmatched
              functionality.
            </p>
            <button
              className="bg-black text-white px-6 py-3 hover:bg-neutral-800 transition-all duration-300"
              data-aos="fade-up"
            >
              Learn More
            </button>
          </div>

          {/* Right Side: Image */}
          <div className="relative" data-aos="fade-up">
            <img
              src={office1}
              alt="About Us"
              className="w-full h-auto shadow-lg"
            />
          </div>
        </div>

        {/* Additional Features Section */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          ref={counterRef}
        >
          {/* Feature 1 */}
          <div
            className="bg-white p-6 shadow-md text-center"
            data-aos="fade-up"
          >
            <div className="text-4xl font-bold text-black mb-4">
              {isVisible ? (
                <CountUp start={0} end={10} duration={2} suffix="+" />
              ) : (
                "0+"
              )}
            </div>
            <h3 className="text-xl font-semibold mb-2">Years of Experience</h3>
            <p className="text-neutral-700">
              We have been serving customers for over a decade.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className="bg-white p-6 shadow-md text-center"
            data-aos="fade-up"
          >
            <div className="text-4xl font-bold text-black mb-4">
              {isVisible ? (
                <CountUp start={0} end={500} duration={2} suffix="+" />
              ) : (
                "0+"
              )}
            </div>
            <h3 className="text-xl font-semibold mb-2">Happy Clients</h3>
            <p className="text-neutral-700">
              Our customers trust us for quality and reliability.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className="bg-white p-6 shadow-md text-center"
            data-aos="fade-up"
          >
            <div className="text-4xl font-bold text-black mb-4">
              {isVisible ? (
                <CountUp start={0} end={100} duration={2} suffix="%" />
              ) : (
                "0%"
              )}
            </div>
            <h3 className="text-xl font-semibold mb-2">Satisfaction</h3>
            <p className="text-neutral-700">
              We guarantee satisfaction with every purchase.
            </p>
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={road}
              alt="history"
              className="w-full h-auto shadow-lg "
              data-aos="fade-up"
            />
            <img
              src={ball}
              alt="technologie"
              className="w-full h-auto shadow-lg"
              data-aos="fade-up"
            />
            <img
              src={team}
              alt="team"
              className="w-full h-auto shadow-lg"
              data-aos="fade-up"
            />
            <img
              src={office2}
              alt="office"
              className="w-full h-auto shadow-lg"
              data-aos="fade-up"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="space-y-6" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-neutral-900">Our Story</h3>
            <p className="text-neutral-700 text-lg">
              Founded in 2010, we started as a small team with a big dream: to
              revolutionize the way people experience technology. Over the
              years, we've grown into a global brand, but our commitment to
              quality and innovation remains unchanged.
            </p>
            <p className="text-neutral-700 text-lg">
              Our team of experts works tirelessly to bring you the best
              products and services. From design to delivery, we ensure every
              detail is perfect.
            </p>
            <button
              className="bg-black text-white px-6 py-3 hover:bg-neutral-800 transition-all duration-300"
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
