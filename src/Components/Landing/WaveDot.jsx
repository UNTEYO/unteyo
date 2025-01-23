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
