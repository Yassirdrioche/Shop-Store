import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";
import office from "../../assets/picture/office.jpg";
import team from "../../assets/picture/team.jpg";
import delivery from "../../assets/picture/road.jpg";
import GridBgWhite from "../../components/GridWhiteBg";
import DottedBgWhite from "../../components/DottedBgWhite";
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const contentRefs = useRef([]);
  const imageRefs = useRef([]);
  const statRefs = useRef([]);

  // Initialize animations
  useEffect(() => {
    // Set initial hidden state
    gsap.set(
      [
        titleRef.current,
        ...contentRefs.current,
        ...imageRefs.current,
        ...statRefs.current,
      ],
      {
        y: 30,
        opacity: 0,
      }
    );

    // Create animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    tl.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    });

    tl.to(
      contentRefs.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.5"
    );

    // Image animations with parallax effect
    imageRefs.current.forEach((ref, i) => {
      gsap.to(ref, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: i * 0.15,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ref,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    // Stats animations
    gsap.to(statRefs.current, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: statRefs.current[0],
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // Hover effects for images
    imageRefs.current.forEach((ref) => {
      ref.addEventListener("mouseenter", () => {
        gsap.to(ref, { scale: 1.03, duration: 0.3 });
      });
      ref.addEventListener("mouseleave", () => {
        gsap.to(ref, { scale: 1, duration: 0.3 });
      });
    });

    // return () => {
    //   ScrollTrigger.getAll().forEach((t) => t.kill());
    //   imageRefs.current.forEach((ref) => {
    //     ref.removeEventListener("mouseenter");
    //     ref.removeEventListener("mouseleave");
    //   });
    // };
  }, []);

  // Helper functions to add refs
  const addContentRef = (el) =>
    el && !contentRefs.current.includes(el) && contentRefs.current.push(el);
  const addImageRef = (el) =>
    el && !imageRefs.current.includes(el) && imageRefs.current.push(el);
  const addStatRef = (el) =>
    el && !statRefs.current.includes(el) && statRefs.current.push(el);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden py-20 bg-black z-50 text-white"
    >
      <div className="about__section" />

      <DottedBgWhite />
      {/* Futuristic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neutral-500/20 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neutral-500/20 rounded-full filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Futuristic title with gradient */}
        <section
          className="flex px-4 justify-evenly flex-wrap items-center"
          ref={titleRef}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 uppercase flex justify-center items-center gap-2 text-neutral-100">
            About
          </h2>
          <p className="text-lg mb-12">Better tech for happier shopping.</p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p
              ref={addContentRef}
              className="text-lg md:text-xl leading-relaxed opacity-90"
            >
              Born from a vision to revolutionize online shopping, we've become
              a driving force in digital commerce through relentless innovation
              and cutting-edge retail technology.
            </p>

            <div
              ref={addContentRef}
              className="grid grid-cols-2 gap-4 text-center"
            >
              <div
                ref={addStatRef}
                className="bg-gradient-to-br from-neutral-900/40 to-black-40 p-6 rounded-xl border border-white/10 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold mb-2">8+</div>
                <div className="text-sm opacity-80">Years in Tech</div>
              </div>
              <div
                ref={addStatRef}
                className="bg-gradient-to-br from-neutral-900/40 to-black-40 p-6 rounded-xl border border-white/10 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-sm opacity-80">Clients Served</div>
              </div>
            </div>

            <div
              ref={addContentRef}
              className="flex flex-wrap gap-3 justify-center"
            >
              <div className="flex items-center px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <Icon
                  icon="mdi:shield-check"
                  className="mr-2 text-purple-400 text-xl"
                />
                <span>Quantum Encryption</span>
              </div>
              <div className="flex items-center px-5 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <Icon
                  icon="mdi:truck-fast"
                  className="mr-2 text-blue-400 text-xl"
                />
                <span>AI-Optimized Delivery</span>
              </div>
            </div>
          </div>

          {/* Futuristic image grid */}
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            <div
              ref={addImageRef}
              className="rounded-xl overflow-hidden relative group border-2 border-transparent hover:border-purple-400/30 transition-all duration-300"
              style={{ transform: "translateY(30px)", opacity: 0 }}
            >
              <img
                src={office}
                alt="Neural HQ"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 flex items-end">
                <p className="text-sm font-mono">NEURAL HEADQUARTERS</p>
              </div>
            </div>
            <div
              ref={addImageRef}
              className="rounded-xl overflow-hidden relative group border-2 border-transparent hover:border-blue-400/30 transition-all duration-300"
              style={{ transform: "translateY(30px)", opacity: 0 }}
            >
              <img
                src={team}
                alt="Synth Team"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 flex items-end">
                <p className="text-sm font-mono">SYNTHETIC INTELLIGENCE TEAM</p>
              </div>
            </div>
            <div
              ref={addImageRef}
              className="rounded-xl overflow-hidden relative group border-2 border-transparent hover:border-cyan-400/30 col-span-2 transition-all duration-300"
              style={{ transform: "translateY(30px)", opacity: 0 }}
            >
              <img
                src={delivery}
                alt="Quantum Network"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 flex items-end">
                <p className="text-sm font-mono">QUANTUM DELIVERY NETWORK</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30" />
    </section>
  );
};

export default About;
