import React, { useContext, useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import VanillaTilt from "vanilla-tilt";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, wishlist } = useContext(AppContext);
  const isInWishlist = wishlist.some((item) => item.id === product.id);
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const prodCardRef = useRef(null);
  const cursorRef = useRef({ x: -100, y: -100 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    // Apply VanillaTilt effect
    if (prodCardRef.current) {
      VanillaTilt.init(prodCardRef.current, {
        max: 10, // Maximum tilt rotation (degrees)
        speed: 300, // Transition speed
        glare: true, // Adds a glare effect
        "max-glare": 0.3, // Maximum glare opacity
        perspective: 1000, // Perspective depth effect
        // scale: 1, // Slight scaling effect
      });
    }

    const handleMouseMove = (e) => {
      if (!prodCardRef.current) return;

      const rect = prodCardRef.current.getBoundingClientRect();
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      setIsCursorVisible(isInside);

      if (isInside) {
        cursorRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };

        if (!animationFrameRef.current) {
          animationFrameRef.current = requestAnimationFrame(() => {
            setCursorPosition({ ...cursorRef.current });
            animationFrameRef.current = null;
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      className="bg-white rounded-xl relative overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 transform flex flex-col h-full border border-gray-100 group"
      ref={prodCardRef}
    >
      {/* Add to Wishlist Button */}

      <button
        onClick={() => toggleWishlist(product)}
        className="flex items-center absolute top-2  group-hover:right-2 group-hover:translate-x-0 right-0   translate-x-full bg-black bg-opacity-10 backdrop-blur-lg justify-center space-x-2 p-2 rounded-lg transition-all duration-300 z-50  text-neutral-700"
      >
        <Icon
          icon={isInWishlist ? "mdi:heart" : "mdi:heart-outline"}
          className={`text-2xl ${isInWishlist ? "text-white" : "text-white"}`}
        />
      </button>
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        {/* Custom Cursor */}
        {isCursorVisible && (
          <div
            className="custom-cursor-prod text-white"
            style={{
              transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
              transition: "transform 200ms ease-out", // Smooth transition
            }}
          >
            View
          </div>
        )}
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden">
          <img
            alt={product.name}
            src={product.image}
            className="w-full h-full object-cover transition-transform duration-300 "
          />
          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300"></div>
        </div>

        {/* Product Details */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl  text-gray-900 mb-2">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-1 text-ellipsis">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-lg font-medium text-gray-600">
              ${product.price}
            </p>
            {/* Add to Cart Button */}

            <button
              className="flex text-base group items-center justify-center text-white space-x-2 p-2 md:py-2 md:px-4 rounded-lg transition-all duration-300  bg-black  relative"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(product);
              }}
            >
              <Icon icon="la:cart-plus" className="h-6 w-6" />
              <span className="hidden md:block">Add To Cart</span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
