import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa"; // Import icons
import reviews from "../../data/reviews"; // Import the updated reviews data
import "./Reviews.css"; // Import the CSS file for styles
import { Icon } from "@iconify/react";

// Helper function to render stars based on rating
const renderStars = (rating) => {
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 !== 0; // Check if there's a half star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Number of empty stars

  return (
    <div className="flex">
      {/* Full Stars */}
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-500" />
        ))}
      {/* Half Star */}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}
      {/* Empty Stars */}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <FaStar key={`empty-${i}`} className="text-gray-300" />
        ))}
    </div>
  );
};

const Reviews = () => {
  // Take only the first 5 reviews
  const firstFiveReviews = reviews.slice(0, 5);

  return (
    <div className=" bg-white py-10  relative z-50">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 uppercase flex justify-center items-center gap-2 text-neutral-900">
        <Icon icon="icon-park-outline:people-speak" className="h-10 w-10" />
        <span> Customers Reviews</span>
      </h2>
      <div className="modern-grid-container   px-8">
        {firstFiveReviews.map((review, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={index * 200}
            key={review.id}
            className={`modern-grid-item ${
              index === 1 || index === 4 ? "row-span-2" : "row-span-1"
            }`}
          >
            <div
              className={`review-card bg-gradient-to-tl ${
                index === 0
                  ? "from-zinc-950 to-cyan-200" // Blue to Cyan
                  : index === 1
                  ? "from-zinc-950 to-green-200" // Purple to Pink
                  : index === 2
                  ? "from-zinc-950 to-blue-200" // Green to Teal
                  : index === 3
                  ? "from-zinc-950 to-teal-200" // Orange to Yellow
                  : "from-zinc-950 to-violet-200" // Gray to Stone
              } p-8  shadow-2xl hover:shadow-3xl transition duration-500 transform hover:scale-105 relative overflow-hidden h-full text-white`}
            >
              {/* Floating Decorative Quotes */}
              <div className="absolute top-4 left-4 text-neutral-200 text-6xl opacity-30">
                ❝
              </div>
              <div className="absolute bottom-4 right-4 text-neutral-200 text-6xl opacity-30">
                ❞
              </div>

              {/* Reviewer Section */}
              <div className="flex flex-col items-center text-center h-full justify-center">
                {/* Reviewer Avatar */}
                {review.avatar && (
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-24 h-24 rounded-full border-4 border-white shadow-lg mb-6"
                  />
                )}

                {/* Review Text */}
                <p className="text-lg mt-6 leading-relaxed px-4 font-light">
                  {review.text}
                </p>

                {/* Star Rating */}
                <div className="mt-6">{renderStars(review.rating)}</div>

                {/* Reviewer Name & Designation */}
                <p className="font-semibold mt-4 text-xl">{review.author}</p>
                {review.designation && (
                  <p className="text-sm mt-1 opacity-80">
                    {review.designation}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
