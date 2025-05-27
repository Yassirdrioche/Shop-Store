import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { gsap } from "gsap";
import blogPosts from "../../data/blogdata";
import { Icon } from "@iconify/react";
import DottedBg from "../../components/DottedBg";

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const mainContentRef = useRef(null);
  const buttonsRef = useRef(null);
  const float1Ref = useRef(null);
  const float2Ref = useRef(null);

  useEffect(() => {
    // Image animation
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );

    // Content animations
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.4 }
    );
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: "power3.out" }
    );
    gsap.fromTo(
      authorRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: "power3.out" }
    );
    gsap.fromTo(
      mainContentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 1.2, ease: "power3.out" }
    );

    // Floating elements animation
    gsap.to(float1Ref.current, {
      y: -15,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });
    gsap.to(float2Ref.current, {
      y: 15,
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "sine.inOut",
    });
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-100">
        <div className="text-center text-neutral-600 text-xl font-medium">
          Post not found
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-100 relative py-28 z-50 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <DottedBg />

      {/* Floating Decorative Elements */}
      <div
        ref={float1Ref}
        className="absolute top-16 left-8 w-16 h-16 bg-neutral-200/40 rounded-full shadow-md"
      />
      <div
        ref={float2Ref}
        className="absolute bottom-32 right-10 w-12 h-12 bg-neutral-300/40 rounded-full shadow-md"
      />

      {/* Blog Page Heading */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-neutral-800 ">
          Blog Insights
        </h2>
        <p className="mt-2 text-lg text-neutral-500">
          Discover stories, ideas, and inspiration
        </p>
      </div>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left: Image Section */}
        <div ref={imageRef} className="lg:w-1/2 relative">
          <div className="relative rounded-2xl shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/20 to-transparent z-10" />
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: Content Section */}
        <div ref={contentRef} className="lg:w-1/2 flex flex-col gap-6">
          {/* Post Title */}
          <h2
            ref={titleRef}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800  leading-tight"
          >
            {post.title}
          </h2>

          {/* Author Card */}
          <div
            ref={authorRef}
            className="bg-neutral-50 rounded-xl p-6 shadow-lg border border-neutral-200/30 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4">
              <img
                src={post.avatar}
                alt={post.author}
                className="w-12 h-12 rounded-full border-2 border-neutral-300"
                loading="lazy"
              />
              <div>
                <span className="block text-lg font-semibold text-neutral-800">
                  {post.author}
                </span>
                <span className="block text-sm text-neutral-500">
                  {post.date}
                </span>
              </div>
            </div>
            <p className="mt-4 text-neutral-600 text-base sm:text-lg">
              {post.description}
            </p>
          </div>

          {/* Content */}
          <div
            ref={mainContentRef}
            className="bg-white rounded-xl p-8 shadow-lg border border-neutral-200/30 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="prose prose-neutral text-neutral-700 text-base sm:text-lg leading-relaxed">
              {post.content}
            </div>
          </div>

          {/* Action Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
            <Link to="/" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-3 bg-neutral-800 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-neutral-700 transition-all duration-300 hover:scale-105">
                <Icon icon="mdi:arrow-left" className="text-lg" />
                Back to Home
              </button>
            </Link>
            <Link to="/shop" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-3 bg-neutral-800 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-neutral-700 transition-all duration-300 hover:scale-105">
                <Icon icon="heroicons:shopping-bag" className="text-xl" />
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
