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
