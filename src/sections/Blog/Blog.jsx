import React, { useCallback, useEffect, useState } from "react";
import blogPosts from "../../data/blogdata";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { Icon } from "@iconify/react"; // Import Iconify
import "./Blog.css";

const Blog = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center", // Center the active slide
  });

  const [selectedIndex, setSelectedIndex] = useState(0); // Track active slide
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false); // Enable/disable prev button
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false); // Enable/disable next button

  // Calculate the center index
  const centerIndex = Math.floor(blogPosts.length / 2);

  // Update the selected index and button states when the slide changes
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev()); // Enable/disable prev button
    setNextBtnEnabled(emblaApi.canScrollNext()); // Enable/disable next button
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);

    // Set the default selected index to the center index
    emblaApi.scrollTo(centerIndex); // Scroll to the center slide
  }, [emblaApi, onSelect, centerIndex]);

  // Scroll to the previous slide
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  // Scroll to the next slide
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className=" bg-neutral-100 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto ">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
         BLOG POSTS
        </h2>

        {/* Embla Carousel Container */}
        <div className="embla relative overflow-hidden" ref={emblaRef}>
          <div className="embla__container">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className={`embla__slide flex justify-center px-4 transition-transform duration-300 ${
                  index === selectedIndex
                    ? "scale-105 bounce"
                    : "scale-90 blur-sm"
                }`}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full ">
                  {/* Blog Image */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />

                  {/* Blog Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 mb-4">{post.description}</p>

                    {/* Author and Date */}
                    <div className="flex items-center text-gray-600 mb-4">
                      <img
                        src={post.avatar}
                        alt={post.author}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div>
                        <span className="block font-medium">{post.author}</span>
                        <span className="block text-sm text-gray-500">
                          {post.date}
                        </span>
                      </div>
                    </div>

                    {/* Read More Button */}

                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-block px-6 py-2 text-white font-semibold rounded-lg transition duration-200 bg-black"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Previous Button */}
          <button
            className={`embla__prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-2xl text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 transition ${
              !prevBtnEnabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <Icon icon="bi:chevron-left" />
          </button>

          {/* Next Button */}
          <button
            className={`embla__next absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-2xl text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 transition ${
              !nextBtnEnabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <Icon icon="bi:chevron-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
