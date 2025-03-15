import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    // Ensure smooth scrolling behavior

  }, [pathname]); // Trigger the effect whenever the pathname changes
};

export default ScrollToTop;
