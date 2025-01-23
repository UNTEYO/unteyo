// import React, { useEffect, useRef } from "react";

// const WaveAnimation = () => {
//   const waveContainerRef = useRef(null);
//   const animationFrameRef = useRef(null);
//   const dotsRef = useRef([]);

//   useEffect(() => {
//     const waveContainer = waveContainerRef.current;
//     const lines = 5;
//     const dotsPerLine = 50;
//     const dotWidth = 1;
//     const screenWidth = window.innerWidth;

//     // Array warna untuk setiap baris
//     const lineColors = [
//       "	#7F00FF",
//       " #4ECDC4",
//       "	#7F00FF",
//       " #4ECDC4",
//       "	#7F00FF",
//       " #4ECDC4",
//       "	#7F00FF",
//       " #4ECDC4",
//       // "#FF6B6B", // Merah muda
//       // "#4ECDC4", // Tosca
//       // "#45B7D1", // Biru muda
//       // "#96CEB4", // Hijau muda
//       // "#FFEEAD", // Kuning muda
//       // "#D4A5A5", // Pink pudar
//       // "#9370DB", // Medium purple
//       // "#20B2AA", // Light sea green
//     ];

//     // Fungsi untuk membuat titik baru dengan warna
//     const createDot = (lineIndex, position) => {
//       const dot = document.createElement("div");
//       dot.classList.add("wave");
//       dot.style.backgroundColor = lineColors[lineIndex];
//       dot.style.boxShadow = `0 0 5px ${lineColors[lineIndex]}`;
//       waveContainer.appendChild(dot);

//       // Parameter yang lebih konsisten untuk gelombang yang beraturan
//       return {
//         element: dot,
//         x: position,
//         y: window.innerHeight / 2 + lineIndex * 25, // Jarak antar baris yang konsisten
//         length: 0.004, // Panjang gelombang yang konsisten
//         amplitude: Math.random()*100, // Amplitudo tinggi yang sama untuk semua baris
//         offset: lineIndex * (Math.PI / 4), // Offset fase yang beraturan
//         speed: 0.002, // Kecepatan yang konsisten
//       };
//     };

//     // Inisialisasi titik untuk setiap baris
//     for (let i = 0; i < lines; i++) {
//       const dots = [];
//       for (let j = 0; j < dotsPerLine; j++) {
//         const x = (j / dotsPerLine) * screenWidth;
//         dots.push(createDot(i, x));
//       }
//       dotsRef.current.push(dots);
//     }

//     function animate(time) {
//       dotsRef.current.forEach((lineDots, lineIndex) => {
//         lineDots.forEach((dot, index) => {
//           dot.x -= 0.5; // Kecepatan gerak ke kiri yang konsisten

//           if (dot.x + dotWidth < 0) {
//             dot.element.remove();
//             lineDots.splice(index, 1);
//             const newDot = createDot(lineIndex, screenWidth);
//             lineDots.push(newDot);
//           }

//           // Pergerakan gelombang yang lebih sederhana dan beraturan
//           const newY =
//             dot.y +
//             Math.sin(dot.x * dot.length + time * dot.speed + dot.offset) *
//               dot.amplitude;

//           dot.element.style.transform = `translate(${dot.x}px, ${newY}px)`;
//         });
//       });

//       animationFrameRef.current = requestAnimationFrame(animate);
//     }

//     animationFrameRef.current = requestAnimationFrame(animate);

//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//       dotsRef.current.forEach((lineDots) => {
//         lineDots.forEach((dot) => dot.element.remove());
//       });
//       dotsRef.current = [];
//     };
//   }, []);

//   return <div ref={waveContainerRef} className="wave-container" />;
// };

// export default WaveAnimation;

// import React, { useEffect, useRef, useState } from "react";

// const WaveAnimation = () => {
//   const waveContainerRef = useRef(null);
//   const animationFrameRef = useRef(null);
//   const dotsRef = useRef([]);
//   const [isPaused, setIsPaused] = useState(false);
//   const [showControls, setShowControls] = useState(false);
//   const [config, setConfig] = useState({
//     lines: 7,
//     dotsPerLine: 80, // Increased dots for smoother animation
//     dotSize: 2,
//     baseSpeed: 0.5,
//     waveSpeed: 0.002,
//     amplitudeRange: [50, 120],
//     spacing: 30,
//   });

//   const lineColors = [
//     { color: "#7F00FF", glow: "#9F3FFF" },
//     { color: "#4ECDC4", glow: "#6EDDE4" },
//     { color: "#FF61D2", glow: "#FF81F2" },
//     { color: "#4CAF50", glow: "#6CBF70" },
//     { color: "#FFD700", glow: "#FFE720" },
//     { color: "#FF6B6B", glow: "#FF8B8B" },
//     { color: "#40E0D0", glow: "#60FFF0" },
//   ];

//   const createDot = (lineIndex, position, existingDot = null) => {
//     let dot;
//     if (existingDot) {
//       // Reuse existing dot element
//       dot = existingDot.element;
//     } else {
//       // Create new dot if none exists
//       dot = document.createElement("div");
//       dot.classList.add("wave-dot");
//       waveContainerRef.current?.appendChild(dot);
//     }

//     const { color, glow } = lineColors[lineIndex % lineColors.length];
//     dot.style.backgroundColor = color;
//     dot.style.boxShadow = `0 0 8px ${glow}, 0 0 12px ${glow}`;
//     dot.style.width = `${config.dotSize}px`;
//     dot.style.height = `${config.dotSize}px`;
//     dot.style.borderRadius = "50%";

//     const amplitude =
//       config.amplitudeRange[0] +
//       Math.random() * (config.amplitudeRange[1] - config.amplitudeRange[0]);

//     return {
//       element: dot,
//       x: position,
//       y: window.innerHeight / 2 + lineIndex * config.spacing,
//       length: 0.004,
//       amplitude,
//       offset: lineIndex * (Math.PI / 3),
//       speed: config.waveSpeed * (1 + Math.random() * 0.2),
//       originalX: position, // Store original position for reference
//     };
//   };

//   useEffect(() => {
//     if (!waveContainerRef.current) return;

//     const screenWidth = window.innerWidth;
//     const dotSpacing = screenWidth / config.dotsPerLine;

//     // Initialize dots for each line
//     dotsRef.current = Array(config.lines)
//       .fill()
//       .map((_, lineIndex) => {
//         return Array(config.dotsPerLine)
//           .fill()
//           .map((_, dotIndex) => {
//             const x = dotIndex * dotSpacing;
//             return createDot(lineIndex, x);
//           });
//       });

//     // Add interactive hover effect
//     const handleMouseMove = (e) => {
//       const rect = waveContainerRef.current.getBoundingClientRect();
//       const mouseX = e.clientX - rect.left;
//       const mouseY = e.clientY - rect.top;

//       dotsRef.current.forEach((lineDots) => {
//         lineDots.forEach((dot) => {
//           const dx = mouseX - dot.x;
//           const dy = mouseY - dot.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
//           if (distance < 100) {
//             dot.amplitude = config.amplitudeRange[1] * 1.5;
//           }
//         });
//       });
//     };

//     waveContainerRef.current.addEventListener("mousemove", handleMouseMove);

//     function animate(time) {
//       if (isPaused) return;

//       dotsRef.current.forEach((lineDots, lineIndex) => {
//         lineDots.forEach((dot) => {
//           // Update x position
//           dot.x -= config.baseSpeed;

//           // If dot moves off screen to the left, reset it to the right
//           if (dot.x + config.dotSize < 0) {
//             dot.x = screenWidth;
//           }

//           // Enhanced wave movement
//           const primaryWave =
//             Math.sin(dot.x * dot.length + time * dot.speed + dot.offset) *
//             dot.amplitude;
//           const secondaryWave =
//             Math.sin(dot.x * dot.length * 2 + time * dot.speed * 1.5) *
//             (dot.amplitude * 0.3);
//           const newY = dot.y + primaryWave + secondaryWave;

//           // Apply smooth transition
//           dot.element.style.transform = `translate(${dot.x}px, ${newY}px)`;

//           // Smooth opacity fade at edges
//           const edgeFade = Math.min(
//             dot.x / 100,
//             (screenWidth - dot.x) / 100,
//             1
//           );
//           dot.element.style.opacity = edgeFade;
//         });
//       });

//       animationFrameRef.current = requestAnimationFrame(animate);
//     }

//     animationFrameRef.current = requestAnimationFrame(animate);

//     // Cleanup function
//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//       waveContainerRef.current.removeEventListener(
//         "mousemove",
//         handleMouseMove
//       );
//       dotsRef.current.forEach((lineDots) => {
//         lineDots.forEach((dot) => dot.element.remove());
//       });
//       dotsRef.current = [];
//     };
//   }, [config, isPaused]);

//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       const screenWidth = window.innerWidth;
//       dotsRef.current.forEach((lineDots, lineIndex) => {
//         lineDots.forEach((dot, dotIndex) => {
//           const spacing = screenWidth / config.dotsPerLine;
//           dot.x = dotIndex * spacing;
//           dot.originalX = dot.x;
//         });
//       });
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [config.dotsPerLine]);

//   return (
//     <div>
//       <div ref={waveContainerRef} className="wave-container" />
//     </div>
//   );
// };

// export default WaveAnimation;

// import React, { useEffect, useRef, useState } from "react";

// const WaveAnimation = () => {
//   const waveContainerRef = useRef(null);
//   const animationFrameRef = useRef(null);
//   const dotsRef = useRef([]);
//   const [isPaused, setIsPaused] = useState(false);
//   const [showControls, setShowControls] = useState(false);
//   const [config, setConfig] = useState({
//     lines: 7,
//     dotsPerLine: 80,
//     dotSize: 2,
//     baseSpeed: 0.5,
//     waveSpeed: 0.002,
//     amplitudeRange: [50, 120],
//     spacing: 30,
//     // Add reference width to maintain consistent speed
//     referenceWidth: 1920, // Base width for speed calculation
//   });

//   const lineColors = [
//     { color: "#7F00FF", glow: "#9F3FFF" },
//     { color: "#4ECDC4", glow: "#6EDDE4" },
//     { color: "#FF61D2", glow: "#FF81F2" },
//     { color: "#4CAF50", glow: "#6CBF70" },
//     { color: "#FFD700", glow: "#FFE720" },
//     { color: "#FF6B6B", glow: "#FF8B8B" },
//     { color: "#40E0D0", glow: "#60FFF0" },
//   ];

//   // Calculate speed adjustment factor based on screen width
//   const getSpeedAdjustment = (screenWidth) => {
//     return screenWidth / config.referenceWidth;
//   };

//   const createDot = (lineIndex, position, existingDot = null) => {
//     let dot;
//     if (existingDot) {
//       dot = existingDot.element;
//     } else {
//       dot = document.createElement("div");
//       dot.classList.add("wave-dot");
//       waveContainerRef.current?.appendChild(dot);
//     }

//     const { color, glow } = lineColors[lineIndex % lineColors.length];
//     dot.style.backgroundColor = color;
//     dot.style.boxShadow = `0 0 8px ${glow}, 0 0 12px ${glow}`;
//     dot.style.width = `${config.dotSize}px`;
//     dot.style.height = `${config.dotSize}px`;
//     dot.style.borderRadius = "50%";

//     const amplitude =
//       config.amplitudeRange[0] +
//       Math.random() * (config.amplitudeRange[1] - config.amplitudeRange[0]);

//     return {
//       element: dot,
//       x: position,
//       y: window.innerHeight / 3 + lineIndex * config.spacing,
//       length: 0.004,
//       amplitude,
//       offset: lineIndex * (Math.PI / 3),
//       speed: config.waveSpeed * (1 + Math.random() * 0.2),
//       originalX: position,
//     };
//   };

//   useEffect(() => {
//     if (!waveContainerRef.current) return;

//     const screenWidth = window.innerWidth;
//     const dotSpacing = screenWidth / config.dotsPerLine;

//     // Initialize dots for each line
//     dotsRef.current = Array(config.lines)
//       .fill()
//       .map((_, lineIndex) => {
//         return Array(config.dotsPerLine)
//           .fill()
//           .map((_, dotIndex) => {
//             const x = dotIndex * dotSpacing;
//             return createDot(lineIndex, x);
//           });
//       });

//     const handleMouseMove = (e) => {
//       const rect = waveContainerRef.current.getBoundingClientRect();
//       const mouseX = e.clientX - rect.left;
//       const mouseY = e.clientY - rect.top;

//       dotsRef.current.forEach((lineDots) => {
//         lineDots.forEach((dot) => {
//           const dx = mouseX - dot.x;
//           const dy = mouseY - dot.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
//           if (distance < 100) {
//             dot.amplitude = config.amplitudeRange[1] * 1.5;
//           }
//         });
//       });
//     };

//     waveContainerRef.current.addEventListener("mousemove", handleMouseMove);

//     function animate(time) {
//       if (isPaused) return;

//       const screenWidth = window.innerWidth;
//       const speedAdjustment = getSpeedAdjustment(screenWidth);

//       dotsRef.current.forEach((lineDots, lineIndex) => {
//         lineDots.forEach((dot) => {
//           // Adjust speed based on screen width
//           const adjustedSpeed = config.baseSpeed * speedAdjustment;
//           dot.x -= adjustedSpeed;

//           if (dot.x + config.dotSize < 0) {
//             dot.x = screenWidth;
//           }

//           const primaryWave =
//             Math.sin(dot.x * dot.length + time * dot.speed + dot.offset) *
//             dot.amplitude;
//           const secondaryWave =
//             Math.sin(dot.x * dot.length * 2 + time * dot.speed * 1.5) *
//             (dot.amplitude * 0.3);
//           const newY = dot.y + primaryWave + secondaryWave;

//           dot.element.style.transform = `translate(${dot.x}px, ${newY}px)`;

//           const edgeFade = Math.min(
//             dot.x / 100,
//             (screenWidth - dot.x) / 100,
//             1
//           );
//           dot.element.style.opacity = edgeFade;
//         });
//       });

//       animationFrameRef.current = requestAnimationFrame(animate);
//     }

//     animationFrameRef.current = requestAnimationFrame(animate);

//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//       waveContainerRef.current.removeEventListener(
//         "mousemove",
//         handleMouseMove
//       );
//       dotsRef.current.forEach((lineDots) => {
//         lineDots.forEach((dot) => dot.element.remove());
//       });
//       dotsRef.current = [];
//     };
//   }, [config, isPaused]);

//   useEffect(() => {
//     const handleResize = () => {
//       const screenWidth = window.innerWidth;
//       dotsRef.current.forEach((lineDots, lineIndex) => {
//         lineDots.forEach((dot, dotIndex) => {
//           const spacing = screenWidth / config.dotsPerLine;
//           dot.x = dotIndex * spacing;
//           dot.originalX = dot.x;
//         });
//       });
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [config.dotsPerLine]);

//   return (
//     <div className="relative w-full h-screen bg-black">
//       <div ref={waveContainerRef} className="wave-container absolute inset-0" />
//     </div>
//   );
// };

// export default WaveAnimation;

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import { Settings, Play, Pause, Monitor, Smartphone } from "lucide-react";

const WaveAnimation = () => {
  // Device detection
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  const [isPortrait, setIsPortrait] = useState(
    () => window.innerHeight > window.innerWidth
  );

  // Refs for performance
  const waveContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const dotsRef = useRef([]);
  const lastTimeRef = useRef(0);
  const fpsRef = useRef(0);

  // State management
  const [isPaused, setIsPaused] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [performanceMode, setPerformanceMode] = useState(false);

  // Memoized configuration based on device
  const config = useMemo(
    () => ({
      lines: isMobile ? 5 : 7,
      dotsPerLine: isMobile ? 40 : 80,
      dotSize: isMobile ? 2 : 2.5,
      baseSpeed: 0.5,
      waveSpeed: isMobile ? 0.003 : 0.002,
      amplitudeRange: isMobile ? [30, 80] : [50, 120],
      spacing: isMobile ? 20 : 30,
      referenceWidth: 1920,
      maxFPS: 60,
      touchRadius: isMobile ? 80 : 100,
      minOpacity: 0.4,
      maxOpacity: 1,
    }),
    [isMobile]
  );

  // Memoized color scheme
  const lineColors = useMemo(
    () => [
      { color: "#7F00FF", glow: "#9F3FFF" },
      { color: "#4ECDC4", glow: "#6EDDE4" },
      { color: "#FF61D2", glow: "#FF81F2" },
      { color: "#4CAF50", glow: "#6CBF70" },
      { color: "#FFD700", glow: "#FFE720" },
      { color: "#FF6B6B", glow: "#FF8B8B" },
      { color: "#40E0D0", glow: "#60FFF0" },
    ],
    []
  );

  // Performance optimization - speed adjustment
  const getSpeedAdjustment = useCallback(
    (screenWidth) => {
      return (
        (screenWidth / config.referenceWidth) * (performanceMode ? 1.2 : 1)
      );
    },
    [config.referenceWidth, performanceMode]
  );

  // Enhanced dot creation with performance considerations
  const createDot = useCallback(
    (lineIndex, position, existingDot = null) => {
      let dot;
      if (existingDot) {
        dot = existingDot.element;
      } else {
        dot = document.createElement("div");
        dot.classList.add("wave-dot");
        waveContainerRef.current?.appendChild(dot);
      }

      const { color, glow } = lineColors[lineIndex % lineColors.length];

      // Apply styles efficiently
      Object.assign(dot.style, {
        backgroundColor: color,
        boxShadow: performanceMode
          ? `0 0 4px ${glow}`
          : `0 0 8px ${glow}, 0 0 12px ${glow}`,
        width: `${config.dotSize}px`,
        height: `${config.dotSize}px`,
        borderRadius: "50%",
        position: "absolute",
        willChange: "transform, opacity",
      });

      const amplitude =
        config.amplitudeRange[0] +
        Math.random() * (config.amplitudeRange[1] - config.amplitudeRange[0]);

      return {
        element: dot,
        x: position,
        y: window.innerHeight / 2 + lineIndex * config.spacing,
        length: 0.004,
        amplitude,
        offset: lineIndex * (Math.PI / 3),
        speed: config.waveSpeed * (1 + Math.random() * 0.2),
        originalX: position,
        targetAmplitude: amplitude,
      };
    },
    [config, lineColors, performanceMode]
  );

  // Handle interactions (mouse/touch) with debouncing
  const handleInteraction = useCallback(
    (x, y) => {
      if (!waveContainerRef.current) return;

      const rect = waveContainerRef.current.getBoundingClientRect();
      const interactionX = x - rect.left;
      const interactionY = y - rect.top;

      dotsRef.current.forEach((lineDots) => {
        lineDots.forEach((dot) => {
          const dx = interactionX - dot.x;
          const dy = interactionY - dot.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < config.touchRadius) {
            dot.targetAmplitude = config.amplitudeRange[1] * 1.5;
            // Gradual amplitude return
            setTimeout(() => {
              dot.targetAmplitude = dot.amplitude;
            }, 1000);
          }
        });
      });
    },
    [config.touchRadius, config.amplitudeRange]
  );

  // Main animation loop with optimizations
  const animate = useCallback(
    (timestamp) => {
      if (isPaused) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      // FPS control
      const elapsed = timestamp - lastTimeRef.current;
      if (elapsed < 1000 / config.maxFPS) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTimeRef.current = timestamp;
      fpsRef.current = 1000 / elapsed;

      const screenWidth = window.innerWidth;
      const speedAdjustment = getSpeedAdjustment(screenWidth);

      dotsRef.current.forEach((lineDots) => {
        lineDots.forEach((dot) => {
          const adjustedSpeed = config.baseSpeed * speedAdjustment;
          dot.x -= adjustedSpeed;

          if (dot.x + config.dotSize < 0) {
            dot.x = screenWidth;
          }

          // Smooth amplitude transition
          if (dot.targetAmplitude !== undefined) {
            dot.amplitude += (dot.targetAmplitude - dot.amplitude) * 0.1;
          }

          const primaryWave =
            Math.sin(dot.x * dot.length + timestamp * dot.speed + dot.offset) *
            dot.amplitude;
          const secondaryWave = performanceMode
            ? 0
            : Math.sin(dot.x * dot.length * 2 + timestamp * dot.speed * 1.5) *
              (dot.amplitude * 0.3);

          const newY = dot.y + primaryWave + secondaryWave;

          // Batch transform updates
          dot.element.style.transform = `translate(${dot.x}px, ${newY}px)`;

          // Optimized edge fade
          const edgeFade = Math.max(
            config.minOpacity,
            Math.min(
              dot.x / 100,
              (screenWidth - dot.x) / 100,
              config.maxOpacity
            )
          );
          dot.element.style.opacity = edgeFade;
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    },
    [config, isPaused, getSpeedAdjustment, performanceMode]
  );

  // Initialize and handle device detection
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsMobile(width <= 768);
      setIsPortrait(height > width);

      if (waveContainerRef.current) {
        const screenWidth = width;
        dotsRef.current.forEach((lineDots, lineIndex) => {
          lineDots.forEach((dot, dotIndex) => {
            const spacing = screenWidth / config.dotsPerLine;
            dot.x = dotIndex * spacing;
            dot.originalX = dot.x;
            dot.y = height / 2 + lineIndex * config.spacing;
          });
        });
      }
    };

    // Initialize dots
    if (waveContainerRef.current) {
      const screenWidth = window.innerWidth;
      const dotSpacing = screenWidth / config.dotsPerLine;

      dotsRef.current = Array(config.lines)
        .fill()
        .map((_, lineIndex) =>
          Array(config.dotsPerLine)
            .fill()
            .map((_, dotIndex) => {
              const x = dotIndex * dotSpacing;
              return createDot(lineIndex, x);
            })
        );

      // Start animation
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    // Event listeners for interaction
    const touchHandler = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      handleInteraction(touch.clientX, touch.clientY);
    };

    const mouseHandler = (e) => {
      handleInteraction(e.clientX, e.clientY);
    };

    window.addEventListener("resize", handleResize);
    if (isMobile) {
      waveContainerRef.current?.addEventListener("touchmove", touchHandler, {
        passive: false,
      });
      waveContainerRef.current?.addEventListener("touchstart", touchHandler, {
        passive: false,
      });
    } else {
      waveContainerRef.current?.addEventListener("mousemove", mouseHandler);
    }

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", handleResize);
      if (isMobile) {
        waveContainerRef.current?.removeEventListener(
          "touchmove",
          touchHandler
        );
        waveContainerRef.current?.removeEventListener(
          "touchstart",
          touchHandler
        );
      } else {
        waveContainerRef.current?.removeEventListener(
          "mousemove",
          mouseHandler
        );
      }
      dotsRef.current.forEach((lineDots) => {
        lineDots.forEach((dot) => dot.element.remove());
      });
      dotsRef.current = [];
    };
  }, [config, animate, createDot, handleInteraction, isMobile]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div ref={waveContainerRef} className="wave-container absolute inset-0" />

    </div>
  );
};

export default WaveAnimation;

// import React, {
//   useEffect,
//   useRef,
//   useState,
//   useCallback,
//   useMemo,
// } from "react";

// const WaveAnimation = () => {
//   const waveContainerRef = useRef(null);
//   const animationFrameRef = useRef(null);
//   const dotsRef = useRef([]);

//   // Device detection
//   const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

//   // Calming configuration with gentler movements
//   const config = useMemo(
//     () => ({
//       lines: isMobile ? 4 : 6,
//       dotsPerLine: isMobile ? 40 : 80,
//       dotSize: isMobile ? 2.5 : 3,
//       // Slower base speed for more relaxing motion
//       baseSpeed: 0.2,
//       // Slower wave speed for gentler undulation
//       waveSpeed: 0.001,
//       // Reduced amplitude range for calmer waves
//       amplitudeRange: isMobile ? [20, 40] : [30, 60],
//       // Increased spacing for more breathing room
//       spacing: isMobile ? 35 : 45,
//       referenceWidth: 1920,
//       // Gentle interaction radius
//       touchRadius: isMobile ? 100 : 120,
//       // Higher minimum opacity for better visibility
//       minOpacity: 0.6,
//       maxOpacity: 1,
//     }),
//     [isMobile]
//   );

//   // Calming color palette inspired by nature and sunset
//   const lineColors = useMemo(
//     () => [
//       { color: "#89CFF0", glow: "#A7D8F3" }, // Soft sky blue
//       { color: "#B6D8F2", glow: "#C4E1F5" }, // Light blue
//       { color: "#CAE9F5", glow: "#D8EEF7" }, // Pale blue
//       { color: "#DCEFF7", glow: "#E5F3F9" }, // Very pale blue
//       { color: "#E8F4F8", glow: "#EDF7FA" }, // Almost white blue
//       { color: "#F0F8FF", glow: "#F5FAFF" }, // Alice blue
//     ],
//     []
//   );

//   const getSpeedAdjustment = useCallback(
//     (screenWidth) => {
//       return screenWidth / config.referenceWidth;
//     },
//     [config.referenceWidth]
//   );

//   const createDot = useCallback(
//     (lineIndex, position, existingDot = null) => {
//       let dot;
//       if (existingDot) {
//         dot = existingDot.element;
//       } else {
//         dot = document.createElement("div");
//         dot.classList.add("wave-dot");
//         waveContainerRef.current?.appendChild(dot);
//       }

//       const { color, glow } = lineColors[lineIndex % lineColors.length];

//       Object.assign(dot.style, {
//         backgroundColor: color,
//         // Softer glow effect
//         boxShadow: `0 0 12px ${glow}`,
//         width: `${config.dotSize}px`,
//         height: `${config.dotSize}px`,
//         borderRadius: "50%",
//         position: "absolute",
//         willChange: "transform, opacity",
//         transition: "box-shadow 0.5s ease",
//       });

//       // Gentler amplitude variation
//       const amplitude =
//         config.amplitudeRange[0] +
//         Math.random() * (config.amplitudeRange[1] - config.amplitudeRange[0]);

//       return {
//         element: dot,
//         x: position,
//         y: window.innerHeight / 2 + lineIndex * config.spacing,
//         // Longer wavelength for smoother waves
//         length: 0.002,
//         amplitude,
//         // More gradual phase difference between lines
//         offset: lineIndex * (Math.PI / 6),
//         // Slightly randomized speed for natural feel
//         speed: config.waveSpeed * (1 + Math.random() * 0.1),
//         originalX: position,
//         targetAmplitude: amplitude,
//       };
//     },
//     [config, lineColors]
//   );

//   const handleInteraction = useCallback(
//     (x, y) => {
//       if (!waveContainerRef.current) return;

//       const rect = waveContainerRef.current.getBoundingClientRect();
//       const interactionX = x - rect.left;
//       const interactionY = y - rect.top;

//       dotsRef.current.forEach((lineDots) => {
//         lineDots.forEach((dot) => {
//           const dx = interactionX - dot.x;
//           const dy = interactionY - dot.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
//           if (distance < config.touchRadius) {
//             // Gentler amplitude increase
//             dot.targetAmplitude = config.amplitudeRange[1] * 1.2;
//             // Slower return to normal
//             setTimeout(() => {
//               dot.targetAmplitude = dot.amplitude;
//             }, 2000);
//           }
//         });
//       });
//     },
//     [config.touchRadius, config.amplitudeRange]
//   );

//   const animate = useCallback(
//     (timestamp) => {
//       const screenWidth = window.innerWidth;
//       const speedAdjustment = getSpeedAdjustment(screenWidth);

//       dotsRef.current.forEach((lineDots) => {
//         lineDots.forEach((dot) => {
//           const adjustedSpeed = config.baseSpeed * speedAdjustment;
//           dot.x -= adjustedSpeed;

//           if (dot.x + config.dotSize < 0) {
//             dot.x = screenWidth;
//           }

//           // Smoother amplitude transition
//           if (dot.targetAmplitude !== undefined) {
//             dot.amplitude += (dot.targetAmplitude - dot.amplitude) * 0.05;
//           }

//           // Gentler wave motion
//           const primaryWave =
//             Math.sin(dot.x * dot.length + timestamp * dot.speed + dot.offset) *
//             dot.amplitude;
//           // Very subtle secondary wave
//           const secondaryWave =
//             Math.sin(dot.x * dot.length * 1.5 + timestamp * dot.speed * 0.8) *
//             (dot.amplitude * 0.15);

//           const newY = dot.y + primaryWave + secondaryWave;

//           dot.element.style.transform = `translate(${dot.x}px, ${newY}px)`;

//           // Smoother edge fade
//           const edgeFade = Math.max(
//             config.minOpacity,
//             Math.min(
//               dot.x / 200,
//               (screenWidth - dot.x) / 200,
//               config.maxOpacity
//             )
//           );
//           dot.element.style.opacity = edgeFade;
//         });
//       });

//       animationFrameRef.current = requestAnimationFrame(animate);
//     },
//     [config, getSpeedAdjustment]
//   );

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       setIsMobile(width <= 768);

//       if (waveContainerRef.current) {
//         const screenWidth = width;
//         dotsRef.current.forEach((lineDots, lineIndex) => {
//           lineDots.forEach((dot, dotIndex) => {
//             const spacing = screenWidth / config.dotsPerLine;
//             dot.x = dotIndex * spacing;
//             dot.originalX = dot.x;
//             dot.y = window.innerHeight / 2 + lineIndex * config.spacing;
//           });
//         });
//       }
//     };

//     if (waveContainerRef.current) {
//       const screenWidth = window.innerWidth;
//       const dotSpacing = screenWidth / config.dotsPerLine;

//       dotsRef.current = Array(config.lines)
//         .fill()
//         .map((_, lineIndex) =>
//           Array(config.dotsPerLine)
//             .fill()
//             .map((_, dotIndex) => {
//               const x = dotIndex * dotSpacing;
//               return createDot(lineIndex, x);
//             })
//         );

//       animationFrameRef.current = requestAnimationFrame(animate);
//     }

//     const touchHandler = (e) => {
//       e.preventDefault();
//       const touch = e.touches[0];
//       handleInteraction(touch.clientX, touch.clientY);
//     };

//     const mouseHandler = (e) => {
//       handleInteraction(e.clientX, e.clientY);
//     };

//     window.addEventListener("resize", handleResize);
//     if (isMobile) {
//       waveContainerRef.current?.addEventListener("touchmove", touchHandler, {
//         passive: false,
//       });
//       waveContainerRef.current?.addEventListener("touchstart", touchHandler, {
//         passive: false,
//       });
//     } else {
//       waveContainerRef.current?.addEventListener("mousemove", mouseHandler);
//     }

//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//       window.removeEventListener("resize", handleResize);
//       if (isMobile) {
//         waveContainerRef.current?.removeEventListener(
//           "touchmove",
//           touchHandler
//         );
//         waveContainerRef.current?.removeEventListener(
//           "touchstart",
//           touchHandler
//         );
//       } else {
//         waveContainerRef.current?.removeEventListener(
//           "mousemove",
//           mouseHandler
//         );
//       }
//       dotsRef.current.forEach((lineDots) => {
//         lineDots.forEach((dot) => dot.element.remove());
//       });
//       dotsRef.current = [];
//     };
//   }, [config, animate, createDot, handleInteraction, isMobile]);

//   return (
//     <div className="relative w-full h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16213e] overflow-hidden">
//       <div ref={waveContainerRef} className="wave-container absolute inset-0" />
//     </div>
//   );
// };

// export default WaveAnimation;
