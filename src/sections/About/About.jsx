import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Icon } from "@iconify/react";
import office from "../../assets/picture/office.jpg";
import team from "../../assets/picture/team.jpg";
import delivery from "../../assets/picture/road.jpg";
import GridBg from "../../components/GridBg";

const About = () => {
  const sectionRef = useRef();
  const elements = useRef([]);

  // Add elements to our animation targets
  const addToElements = (el) => {
    if (el && !elements.current.includes(el)) {
      elements.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate all elements with fade-up and blur
            gsap.to(elements.current, {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      // Set initial state before observing
      gsap.set(elements.current, {
        y: 30,
        opacity: 0,
        filter: "blur(5px)",
      });
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-20 relative z-50 bg-neutral-50"
      ref={sectionRef}
      id="about"
    >
      <GridBg />
      <div className="container mx-auto px-4 max-w-5xl">
        <h2
          className="text-2xl md:text-4xl font-bold text-center flex justify-center items-center mb-8 uppercase gap-4"
          ref={addToElements}
        >
          Our Story
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-lg" ref={addToElements}>
              Founded in 2015, we started as a small team with a big vision - to
              deliver quality products with exceptional service. Today, we serve
              thousands of happy customers nationwide.
            </p>

            <div className="flex flex-wrap gap-3" ref={addToElements}>
              <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                <Icon icon="mdi:shield-check" className="mr-2 text-blue-500" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                <Icon icon="mdi:truck-fast" className="mr-2 text-green-500" />
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 h-64">
            <div
              className="rounded-lg overflow-hidden shadow-md"
              ref={addToElements}
            >
              <img
                src={office}
                alt="Our office"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="rounded-lg overflow-hidden shadow-md"
              ref={addToElements}
            >
              <img
                src={team}
                alt="Our team"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className="rounded-lg overflow-hidden shadow-md col-span-2 relative"
              ref={addToElements}
            >
              <img
                src={delivery}
                alt="Delivery network"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4 text-white">
                <p>Nationwide Delivery Network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
