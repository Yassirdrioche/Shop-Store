import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const BtnScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false); // State to control button visibility

  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true); // Show button if scrolled more than 300px
    } else {
      setIsVisible(false); // Hide button if at the top
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  // Function to scroll to the top
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <div
          className="bg-black text-neutral-100 flex justify-center items-center text-4xl rounded-full p-2 w-12 h-12 fixed bottom-5 right-8 z-[9999] cursor-pointer hover:bg-neutral-800 transition-colors duration-300"
          onClick={handleScrollTop}
        >
          <Icon icon="fluent:arrow-up-24-regular" />
        </div>
      )}
    </>
  );
};

export default BtnScrollTop;
