import React, { useEffect, useRef, useState } from "react";
import { NeatGradient } from "@firecms/neat";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

const GradientBackground = () => {
  const canvasRef = useRef(null);
  const gradientRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.1 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!inView || isMobile || !canvasRef.current) return;

    const config = {
      colors: [
        { color: "#8E8D8B", enabled: true },
        { color: "#565656", enabled: true },
        { color: "#383939", enabled: true },
        { color: "#262627", enabled: true },
        { color: "#101010", enabled: true },
      ],
      speed: 2,
      horizontalPressure: 3,
      verticalPressure: 5,
      waveFrequencyX: 1,
      waveFrequencyY: 3,
      waveAmplitude: 8,
      shadows: 0,
      highlights: 2,
      colorBrightness: 1,
      colorSaturation: 6,
      wireframe: false,
      colorBlending: 7,
      backgroundColor: "#003FFF",
      backgroundAlpha: 1,
      grainScale: 2,
      grainSparsity: 0,
      grainIntensity: 0.175,
      grainSpeed: 1,
      resolution: 0.7,
    };

    let animationFrame;
    let lastUpdate = 0;
    const updateInterval = 1000 / 30; // 30fps

    const update = (timestamp) => {
      if (!gradientRef.current) return;

      if (timestamp - lastUpdate >= updateInterval) {
        gradientRef.current.update();
        lastUpdate = timestamp;
      }
      animationFrame = requestAnimationFrame(update);
    };

    gradientRef.current = new NeatGradient({
      ref: canvasRef.current,
      ...config,
    });

    const initTimeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(update);
      setIsLoaded(true);
    }, 100);

    return () => {
      clearTimeout(initTimeout);
      cancelAnimationFrame(animationFrame);
      gradientRef.current?.destroy();
    };
  }, [inView, isMobile]);

  if (isMobile) {
    return (
      <div
        ref={ref}
        style={{
          position: "absolute", // Changed from fixed to absolute
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #554226 0%, #02152A 100%)",
          opacity: 0.8,
        }}
      />
    );
  }

  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <canvas
        ref={(node) => {
          canvasRef.current = node;
          ref(node);
        }}
        style={{
          isolation: "isolate",
          height: "100%",
          width: "100%",
          display: "block",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      />
      {!isLoaded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // background: "linear-gradient(135deg, #554226 0%, #02152A 100%)",
            opacity: 0.8,
          }}
        />
      )}
    </div>
  );
};

export default GradientBackground;
