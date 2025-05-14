import React, {
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
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
  const isSmallScreenRef = useRef(window.innerWidth <= 768);

  // Memoized event handlers
  const handleWishlistToggle = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleWishlist(product);
    },
    [toggleWishlist, product]
  );

  const handleAddToCart = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      addToCart(product);
    },
    [addToCart, product]
  );

  useEffect(() => {
    const prodCard = prodCardRef.current;
    if (!prodCard) return;

    // Apply VanillaTilt effect only on larger screens
    if (!isSmallScreenRef.current) {
      VanillaTilt.init(prodCard, {
        max: 10,
        speed: 300,
        glare: true,
        "max-glare": 0.3,
        perspective: 1000,
      });

      return () => {
        if (prodCard.vanillaTilt) {
          prodCard.vanillaTilt.destroy();
        }
      };
    }
  }, []);

  useEffect(() => {
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
      className="product-card bg-white w-full md:w-auto relative overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 transform flex flex-col h-full border border-neutral-100"
      ref={prodCardRef}
    >
      {/* Wishlist Button - Desktop */}
      <button
        onClick={handleWishlistToggle}
        className="wishlist-btn absolute top-2 group-hover:right-2 group-hover:translate-x-0 right-0 translate-x-full bg-black bg-opacity-10 backdrop-blur-lg p-2 transition-all duration-300 z-50 text-neutral-700"
        aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Icon
          icon={isInWishlist ? "mdi:heart" : "mdi:heart-outline"}
          className="text-2xl text-white"
        />
      </button>

      <Link to={`/product/${product.id}`} className="product-link">
        {/* Custom Cursor */}
        {isCursorVisible && (
          <div
            className="custom-cursor-prod text-white"
            style={{
              transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
              transition: "transform 200ms ease-out",
            }}
          >
            View
          </div>
        )}

        {/* Product Image */}
        <div className="product-image-container relative aspect-square overflow-hidden">
          <img
            alt={product.name}
            src={product.image}
            className="product-image w-full h-full object-cover transition-transform duration-300"
            loading="lazy"
          />
          <div className="product-image-overlay absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300" />
        </div>

        {/* Product Details */}
        <div className="product-details p-4 flex flex-col flex-grow">
          <h3 className="product-name text-xl text-neutral-900 mb-2 line-clamp-1 text-ellipsis">
            {product.name}
          </h3>
          <p className="product-description text-sm text-neutral-600 mb-4 flex-grow line-clamp-1 text-ellipsis">
            {product.description}
          </p>
          <div className="product-actions flex items-center justify-between">
            <p className="product-price text-lg font-medium text-neutral-600">
              ${product.price}
            </p>

            {/* Action Buttons */}
            <div className="action-buttons flex gap-4 z-50">
              <button
                className="add-to-cart-btn flex text-base items-center justify-center text-white space-x-2 p-2 md:py-2 md:px-4 transition-all duration-300 bg-black"
                onClick={handleAddToCart}
                aria-label="Add to cart"
              >
                <Icon icon="la:cart-plus" className="h-6 w-6" />
                <span className="hidden md:hidden xl:block">Add To Cart</span>
              </button>

              {/* Wishlist Button - Mobile */}
              <button
                className="mobile-wishlist-btn flex lg:hidden text-base items-center justify-center text-white space-x-2 p-2 md:py-2 md:px-4 transition-all duration-300 bg-black"
                onClick={handleWishlistToggle}
                aria-label={
                  isInWishlist ? "Remove from wishlist" : "Add to wishlist"
                }
              >
                <Icon
                  icon={isInWishlist ? "mdi:heart" : "mdi:heart-outline"}
                  className="text-2xl text-white"
                />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default React.memo(ProductCard);
