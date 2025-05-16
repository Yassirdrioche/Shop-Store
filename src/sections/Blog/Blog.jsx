import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import blogPosts from "../../data/blogdata"; // Your blog data
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Blog.css"; // Optional: For custom styles
import DottedBgWhite from "../../components/DottedBgWhite";

const Blog = () => {
  useEffect(() => {
    // Ensure Swiper styles are loaded
    import("swiper/css");
    import("swiper/css/navigation");
    import("swiper/css/pagination");
  }, []);

  return (
    <div className=" bg-black bg-fixed py-10 relative z-50 text-neutral-100">
      <div className="blog__section" />
      <DottedBgWhite />

      <section className="flex px-4 justify-evenly flex-wrap items-center">
        <h2
          className="text-2xl md:text-4xl font-bold text-center mb-12 uppercase flex justify-center items-center gap-2 text-neutral-100"
          data-aos="fade-up"
        >
          Our Blog
        </h2>
        <p className="text-lg mb-12 text-neutral-100" data-aos="fade-up">
          Discover insightful articles, tips, and stories to keep you inspired
          and informed.
        </p>
      </section>
      {/* Swiper Carousel */}
      <div className="max-w-7xl mx-auto mt-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="swiper"
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Blog Image */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-36 object-cover"
                />
                {/* Blog Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 line-clamp-1 text-ellipsis">
                    {post.title}
                  </h3>
                  <p className="text-neutral-800 mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  {/* Author and Date */}

                  {/* Read More Button */}
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-block px-5 py-2.5 bg-neutral-800/90 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Pagination */}
          <div className="swiper-pagination mt-6"></div>
          {/* Navigation Buttons */}
          <div className="swiper-button-prev !text-white !bg-neutral-800/80 !rounded-full !p-3 !w-10 !h-10 after:!text-sm"></div>
          <div className="swiper-button-next !text-white !bg-neutral-800/80 !rounded-full !p-3 !w-10 !h-10 after:!text-sm"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Blog;
