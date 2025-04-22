import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { AppContext } from "../../context/AppContext";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";


SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const Category = () => {
  const { products, updateFilters } = useContext(AppContext);
  const navigate = useNavigate();

  // Extract unique categories from products
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const handleCategoryClick = (category) => {
    updateFilters({ category });
    navigate("/shop");
  };

  return (
    <section className="relative bg-neutral-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 z-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center flex justify-center items-center gap-3 sm:gap-4 mb-10 sm:mb-12 lg:mb-16 uppercase text-neutral-800"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <Icon
            icon="iconamoon:category-light"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <span>Shop by Category</span>
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              coverflowEffect: { depth: 150, rotate: 40 },
            },
            1024: {
              slidesPerView: 3,
              coverflowEffect: { depth: 200, rotate: 30 },
            },
          }}
          className="swiper-container"
        >
          {uniqueCategories.map((category, index) => {
            const categoryProduct = products.find(
              (prod) => prod.category === category
            );
            const categoryProducts = products.filter(
              (prod) => prod.category === category
            );
            return (
              <SwiperSlide key={index}>
                <div
                  className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[16rem] sm:min-h-[20rem] lg:min-h-[24rem] aspect-[4/3] cursor-pointer bg-neutral-100"
                  onClick={() => handleCategoryClick(category)}
                >
                  {/* Category Image */}
                  <div className="relative h-full w-full overflow-hidden">
                    <img
                      src={categoryProduct?.image || "/fallback-image.jpg"}
                      alt={category}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                    {/* Category Info */}
                    <div className="absolute bottom-4 left-4 flex flex-col">
                      <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold capitalize">
                        {category}
                      </h3>
                      <p className="text-neutral-200 text-sm sm:text-base">
                        {categoryProducts.length} items
                      </p>
                    </div>
                  </div>

                  {/* Shop Now Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCategoryClick(category);
                      }}
                      className="flex items-center justify-center bg-white text-neutral-900 font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-3xl shadow-lg hover:bg-neutral-900 hover:text-white transition-all duration-300 text-sm sm:text-base"
                    >
                      <span>Shop Now</span>
                      <Icon
                        icon="mdi:arrow-right"
                        className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                      />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute top-1/2 -left-4 sm:-left-6 lg:-left-12 transform -translate-y-1/2 z-10">
            <button
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-black/50 text-white rounded-full shadow-lg hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-800"
              aria-label="Previous slide"
            >
              <Icon icon="mdi:arrow-left" className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 -right-4 sm:-right-6 lg:-right-12 transform -translate-y-1/2 z-10">
            <button
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-black/50 text-white rounded-full shadow-lg hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-800"
              aria-label="Next slide"
            >
              <Icon icon="mdi:arrow-right" className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </Swiper>

        {/* Browse All Button */}
        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <button
            onClick={() => navigate("/shop")}
            className="inline-flex items-center px-6 py-3 border border-white/10 text-white bg-black/50 hover:bg-white hover:text-black transition-all duration-300 rounded-full"
          >
            Browse All Categories
            <Icon icon="mdi:arrow-right" className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Category;
