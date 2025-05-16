import React, { useRef, useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import reviews from "../../data/reviews";
import DottedBg from "../../components/DottedBg";
// Only register ScrollTrigger on client-side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <FaStar key={`full-${i}`} className="text-green-400" />
        ))}
      {hasHalfStar && <FaStarHalfAlt className="text-green-400" />}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <FaStar key={`empty-${i}`} className="text-neutral-400/30" />
        ))}
    </div>
  );
};

const ReviewCard = ({ review, index }) => {
  const cardRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="flex-shrink-0 h-64 w-80 mx-4 bg-black-900/50 bg-black/50 border border-gray-700/30 rounded-xl p-6 shadow-lg hover:shadow-neutral-500/20 transition-all duration-300 backdrop-blur-sm  flex flex-col"
    >
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm font-medium text-neutral-200">
          Review #{index + 1}
        </div>
        {renderStars(review.rating)}
      </div>
      <div className="flex-1 mb-6">
        <p className="text-neutral-200 italic">"{review.text}"</p>
      </div>
      <div className="mt-auto pt-4 border-t border-gray-700/50">
        <div className="flex items-center">
          {review.avatar && (
            <div className="relative mr-4">
              <img
                src={review.avatar}
                alt={review.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-700"
                loading="lazy"
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border border-gray-900"></div>
            </div>
          )}
          <div>
            <p className="font-bold text-white">{review.author}</p>
            {review.designation && (
              <p className="text-sm text-gray-400">{review.designation}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const [reviewsData, setReviewsData] = useState([]);

  // Initialize data and animations
  useEffect(() => {
    setIsMounted(true);
    // Simulate loading data
    const loadedReviews = [...reviews, ...reviews]; // Duplicate for seamless looping
    setReviewsData(loadedReviews);

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Only render Marquee on client-side
  if (typeof window === "undefined") {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-black overflow-hidden z-50"
    >
      <div className="reviews__section " />
      <DottedBg />
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neutral-500/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neutral-500/10 rounded-full filter blur-[100px]" />
      </div>

      <div className=" mx-auto px-4 relative z-10">
        {/* Header section */}

        <section className="flex px-4 justify-evenly flex-wrap items-center">
          <h2
            className="text-2xl md:text-4xl font-bold text-center mb-12 uppercase flex justify-center items-center gap-2 "
            ref={titleRef}
          >
            CUSTOMER FEEDBACK
          </h2>
          <p className="text-lg mb-12 " ref={subtitleRef}>
            Hear what our clients say about our services
          </p>
        </section>
        {/* Infinite Marquee */}
        {isMounted && reviewsData.length > 0 && (
          <>
            <div className="relative overflow-hidden py-8">
              <Marquee
                speed={40}
                gradient={false}
                pauseOnHover
                className="py-4"
              >
                {reviewsData.map((review, index) => (
                  <ReviewCard
                    key={`${review.id}-${index}`}
                    review={review}
                    index={index % reviews.length}
                  />
                ))}
              </Marquee>
            </div>

            {/* Second marquee going reverse direction */}
            {/*  <div className="relative overflow-hidden py-4">
              <Marquee
                speed={50}
                direction="right"
                gradient={false}
                pauseOnHover
                className="py-4"
              >
                {[...reviewsData].reverse().map((review, index) => (
                  <ReviewCard
                    key={`reverse-${review.id}-${index}`}
                    review={review}
                    index={index % reviews.length}
                  />
                ))}
              </Marquee>
            </div> */}
          </>
        )}
      </div>
    </section>
  );
};

export default Reviews;
