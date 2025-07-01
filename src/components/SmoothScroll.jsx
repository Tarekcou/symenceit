import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { useLocation } from "react-router-dom";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function SmoothScroll({ children }) {
  const containerRef = useRef(null);
  const location = useLocation();
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.08,
    });

    return () => {
      if (scrollRef.current) scrollRef.current.destroy();
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      // Refresh Locomotive Scroll on route change
      scrollRef.current.scrollTo(0, { duration: 0, disableLerp: true });
      scrollRef.current.update();
    }
  }, [location]);

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
}
