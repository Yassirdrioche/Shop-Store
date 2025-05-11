import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import office1 from "../../assets/picture/office.jpg";
import office2 from "../../assets/picture/office2.jpg";
import team from "../../assets/picture/team.jpg";
import road from "../../assets/picture/road.jpg";
import ball from "../../assets/picture/ball.jpg";

const About = () => {
  // Preload images
  useEffect(() => {
    [office1, office2, team, road, ball].forEach((img) => {
      new Image().src = img;
    });
  }, []);

  // Static values for stats
  const happyCustomers = 10000;
  const productsSold = 250000;
  const yearsExperience = 8;

  // Debug log to confirm CountUp is loaded
  useEffect(() => {
    console.log("CountUp component:", CountUp);
  }, []);

  // Use intersection observer to trigger animation when section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.3, // Trigger when 30% of the section is visible
  });

  return (
    <section className="bg-neutral-200 py-16 lg:py-24 z-50 relative" id="about">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Our Story
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            From humble beginnings to becoming your trusted destination
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-800 mb-6">
              More Than Just Products
            </h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Founded in {new Date().getFullYear() - yearsExperience}, we began
              as a small team working from our first office, passionate about
              bringing quality goods to our community.
            </p>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Today, we operate from modern headquarters while maintaining the
              same personal touch that made us successful.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-neutral-200 px-4 py-2 rounded-lg border border-neutral-300">
                <Icon
                  icon="mdi:shield-check"
                  className="text-neutral-600 text-xl mr-2"
                />
                <span className="text-neutral-800">Quality Assurance</span>
              </div>
              <div className="flex items-center bg-neutral-200 px-4 py-2 rounded-lg border border-neutral-300">
                <Icon
                  icon="mdi:truck-fast"
                  className="text-neutral-600 text-xl mr-2"
                />
                <span className="text-neutral-800">Fast Shipping</span>
              </div>
              <div className="flex items-center bg-neutral-200 px-4 py-2 rounded-lg border border-neutral-300">
                <Icon
                  icon="mdi:account-group"
                  className="text-neutral-600 text-xl mr-2"
                />
                <span className="text-neutral-800">Team of Experts</span>
              </div>
            </div>
          </div>

          {/* Image Collage */}
          <div className="grid grid-cols-2 gap-4 h-96">
            <div className="relative rounded-xl overflow-hidden border border-neutral-300">
              <img
                src={office1}
                alt="Interior of our first office from 2017"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden border border-neutral-300">
              <img
                src={team}
                alt="Our dedicated team collaborating in a meeting"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden border border-neutral-300 col-span-2">
              <img
                src={road}
                alt="Our delivery network vehicles on the road"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-800/60 via-transparent to-transparent flex items-end p-4">
                <span className="text-neutral-100 font-medium">
                  Our Delivery Network
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section with Counter Animation */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 bg-neutral-200 p-8 rounded-xl border border-neutral-300"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-neutral-800 mb-2">
              {inView ? (
                <CountUp
                  end={happyCustomers}
                  duration={2.5}
                  separator=","
                  suffix="+"
                  onEnd={() => console.log("Happy Customers CountUp finished")}
                />
              ) : (
                "0+"
              )}
            </div>
            <h4 className="text-lg font-medium text-neutral-600">
              Satisfied Customers
            </h4>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-neutral-800 mb-2">
              {inView ? (
                <CountUp
                  end={productsSold}
                  duration={2.5}
                  separator=","
                  suffix="+"
                  onEnd={() => console.log("Products Sold CountUp finished")}
                />
              ) : (
                "0+"
              )}
            </div>
            <h4 className="text-lg font-medium text-neutral-600">
              Products Delivered
            </h4>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-neutral-800 mb-2">
              {inView ? (
                <CountUp
                  end={yearsExperience}
                  duration={2.5}
                  suffix="+"
                  onEnd={() => console.log("Years Experience CountUp finished")}
                />
              ) : (
                "0+"
              )}
            </div>
            <h4 className="text-lg font-medium text-neutral-600">
              Years Experience
            </h4>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 h-96">
            <div className="relative rounded-xl overflow-hidden border border-neutral-300">
              <img
                src={office2}
                alt="Modern headquarters office exterior"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden border border-neutral-300">
              <img
                src={ball}
                alt="Product testing in our quality control lab"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="bg-neutral-200 rounded-xl p-6 col-span-2 flex items-center border border-neutral-300">
              <Icon
                icon="mdi:lightbulb-on"
                className="text-neutral-600 text-3xl mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold text-neutral-800 mb-1">
                  Innovation Driven
                </h4>
                <p className="text-neutral-600 text-sm">
                  Constantly improving our products and services
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-800 mb-6">
              Our Approach
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-neutral-200 p-2 rounded-full mr-4 flex-shrink-0 border border-neutral-300">
                  <Icon
                    icon="mdi:magnify"
                    className="text-neutral-600 text-xl"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-neutral-800 mb-2">
                    Careful Curation
                  </h4>
                  <p className="text-neutral-600">
                    Each product is personally tested by our team before being
                    offered to you.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-neutral-200 p-2 rounded-full mr-4 flex-shrink-0 border border-neutral-300">
                  <Icon
                    icon="mdi:factory"
                    className="text-neutral-600 text-xl"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-neutral-800 mb-2">
                    Direct Partnerships
                  </h4>
                  <p className="text-neutral-600">
                    We work directly with manufacturers to ensure quality and
                    fair pricing.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-neutral-200 p-2 rounded-full mr-4 flex-shrink-0 border border-neutral-300">
                  <Icon
                    icon="mdi:recycle"
                    className="text-neutral-600 text-xl"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-neutral-800 mb-2">
                    Sustainable Growth
                  </h4>
                  <p className="text-neutral-600">
                    Committed to ethical business practices that benefit
                    everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
