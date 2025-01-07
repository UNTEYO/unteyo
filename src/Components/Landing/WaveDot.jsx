import React, { useEffect, useRef } from "react";

const WaveAnimation = () => {
  const waveContainerRef = useRef(null);

  useEffect(() => {
    const waveContainer = waveContainerRef.current;
    const lines = 8;
    const dotsPerLine = 200;
    const waves = [];

    for (let i = 0; i < lines; i++) {
      const dots = [];
      for (let j = 0; j < dotsPerLine; j++) {
        const dot = document.createElement("div");
        dot.classList.add("wave");
        waveContainer.appendChild(dot);

        dots.push({
          element: dot,
          x: (j / dotsPerLine) * window.innerWidth,
          y: window.innerHeight / 2 + i * 20,
          length: 0.002 + i * 0.0001,
          amplitude: 80 + i * 5,
          offset: i * (Math.PI / 6),
        });
      }
      waves.push(dots);
    }

    function animate(time) {
      waves.forEach((dots) => {
        dots.forEach((dot) => {
          const { element, x, y, length, amplitude, offset } = dot;
          const newY =
            y +
            Math.sin(x * length + time * 0.002 + offset) * amplitude +
            Math.sin(x * length * 2 + time * 0.003) * (amplitude * 0.5);
          element.style.transform = `translate(${x}px, ${newY}px)`;
        });
      });

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, []);

  return <div ref={waveContainerRef} className="wave-container"></div>;
};

export default WaveAnimation;
