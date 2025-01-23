import React, { useEffect, useRef } from "react";

const WaveAnimation = () => {
  const waveContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const waveContainer = waveContainerRef.current;
    const lines = 4;
    const dotsPerLine = 15; // Jumlah awal dot per baris
    const containerWidth = 800;
    const spawnBuffer = 50;
    const minSpacing = containerWidth / dotsPerLine; // Jarak minimum antar dot

    const lineColors = ["#7B2CBF", "#4ECDC4", "#7B2CBF", "#4ECDC4"];

    const createDot = (lineIndex, position) => {
      const dot = document.createElement("div");
      dot.classList.add("wave");

      const size = Math.random() * 4 + 6;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;

      dot.style.backgroundColor = lineColors[lineIndex];
      dot.style.boxShadow = `0 0 ${size * 3}px ${lineColors[lineIndex]}`;
      dot.style.borderRadius = "50%";
      waveContainer.appendChild(dot);

      return {
        element: dot,
        x: position,
        y: 100 + lineIndex * 30,
        length: 0.005 + Math.random() * 0.002,
        amplitude: 25 + Math.random() * 30,
        offset: lineIndex * (Math.PI / 4),
        speed: 0.002 + Math.random() * 0.001,
        phase: Math.random() * Math.PI * 2,
        size,
      };
    };

    // Initialize dots
    for (let i = 0; i < lines; i++) {
      dotsRef.current[i] = [];
      for (let j = 0; j < dotsPerLine; j++) {
        const x = containerWidth - j * minSpacing;
        dotsRef.current[i].push(createDot(i, x));
      }
    }

    function animate(time) {
      const moveSpeed = 1.5;

      dotsRef.current.forEach((lineDots, lineIndex) => {
        // Update each dot's position
        for (let i = lineDots.length - 1; i >= 0; i--) {
          const dot = lineDots[i];
          dot.x -= moveSpeed;

          if (dot.x + dot.size < -spawnBuffer) {
            dot.element.remove();
            lineDots.splice(i, 1);
            continue;
          }

          const baseY =
            dot.y +
            Math.sin(dot.x * dot.length + time * dot.speed + dot.offset) *
              dot.amplitude;
          const scale = 1 + Math.sin(time * 0.001 + dot.phase) * 0.15;
          dot.element.style.transform = `translate(${dot.x}px, ${baseY}px) scale(${scale})`;
        }

        // Spawn new dot if spacing allows
        const lastDot = lineDots[lineDots.length - 1];
        if (!lastDot || containerWidth - lastDot.x > minSpacing) {
          lineDots.push(createDot(lineIndex, containerWidth + spawnBuffer));
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      dotsRef.current.forEach((lineDots) => {
        lineDots.forEach((dot) => dot.element.remove());
      });
      dotsRef.current = [];
    };
  }, []);

  return <div ref={waveContainerRef} className="wave-container" />;
};

export default WaveAnimation;

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
