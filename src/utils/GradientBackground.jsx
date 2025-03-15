import React, { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

const GradientBackground = () => {
  const canvasRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Define the gradient configuration
    const config = {
      colors: [
        {
          color: "#0A0A0A",
          enabled: true,
        },
        {
          color: "#141414",
          enabled: true,
        },
        {
          color: "#202020",
          enabled: true,
        },
        {
          color: "#393838",
          enabled: true,
        },
        {
          color: "#545454",
          enabled: true,
        },
      ],
      speed: 4,
      horizontalPressure: 4,
      verticalPressure: 3,
      waveFrequencyX: 0,
      waveFrequencyY: 0,
      waveAmplitude: 0,
      shadows: 2,
      highlights: 7,
      colorBrightness: 1,
      colorSaturation: 8,
      wireframe: false,
      colorBlending: 5,
      backgroundColor: "#161616",
      backgroundAlpha: 1,
      grainScale: 0,
      grainSparsity: 0,
      grainIntensity: 0,
      grainSpeed: 0,
      resolution: 0.5,
    };

    // Initialize the NeatGradient
    gradientRef.current = new NeatGradient({
      ref: canvasRef.current,
      ...config, // Apply the configuration settings
    });

    // Cleanup function to destroy the gradient when component unmounts
    return () => gradientRef.current.destroy();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        isolation: "isolate",
        height: "100vh", // Full viewport height
        width: "100%", // Full viewport width
        display: "block", // Prevent canvas from overflowing or resizing
      }}
    />
  );
};

export default GradientBackground;
