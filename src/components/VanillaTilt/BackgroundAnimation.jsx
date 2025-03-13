import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import "./BackgroundAnimation.css"; // Optional: Add custom styles

const BackgroundAnimation = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    // Initialize Vanilla Tilt on the background element
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25, // Maximum tilt rotation (degrees)
        speed: 800, // Speed of the tilt effect
        glare: true, // Enable glare effect
        "max-glare": 0.5, // Maximum glare opacity
      });
    }

    // Cleanup function to destroy the tilt instance
    return () => {
      if (tiltRef.current && tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div className="background-container">
      <div ref={tiltRef} className="tilt-background">
        {/* Optional: Add content inside the background */}
        <h1 className="text-white text-4xl font-bold">Hover Me!</h1>
      </div>
    </div>
  );
};

export default BackgroundAnimation;
