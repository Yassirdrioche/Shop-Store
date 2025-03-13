import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      smoothWheel: true, // Smooth scroll with mouse wheel
      smoothTouch: true, // Smooth scroll on mobile
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Cleanup on unmount
  }, []);

  return null;
};

export default SmoothScroll;
