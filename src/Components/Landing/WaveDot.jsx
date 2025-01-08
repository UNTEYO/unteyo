import React, { useEffect, useRef } from "react";

const WaveAnimation = () => {
  const waveContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const waveContainer = waveContainerRef.current;
    const lines = 8;
    const dotsPerLine = 400;
    const dotWidth = 4;
    const screenWidth = window.innerWidth;

    const createDot = (lineIndex, position) => {
      const dot = document.createElement("div");
      dot.classList.add("wave");
      waveContainer.appendChild(dot);

      return {
        element: dot,
        x: position,
        y: window.innerHeight / 2 + lineIndex * 20,
        length: 0.002 + lineIndex * 0.0001,
        amplitude: 80 + lineIndex * 5,
        offset: lineIndex * (Math.PI / 6),
      };
    };

    for (let i = 0; i < lines; i++) {
      const dots = [];
      for (let j = 0; j < dotsPerLine; j++) {
        const x = (j / dotsPerLine) * screenWidth;
        dots.push(createDot(i, x));
      }
      dotsRef.current.push(dots);
    }

    function animate(time) {
      dotsRef.current.forEach((lineDots, lineIndex) => {
        lineDots.forEach((dot, index) => {
          dot.x -= 1.5;

          if (dot.x + dotWidth < 0) {
            dot.element.remove();
            lineDots.splice(index, 1);
            const newDot = createDot(lineIndex, screenWidth);
            lineDots.push(newDot);
          }

          const newY =
            dot.y +
            Math.sin(dot.x * dot.length + time * 0.002 + dot.offset) *
              dot.amplitude +
            Math.sin(dot.x * dot.length * 2 + time * 0.003) *
              (dot.amplitude * 0.5);

          dot.element.style.transform = `translate(${dot.x}px, ${newY}px)`;
        });
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

  return (
    <div
      ref={waveContainerRef}
      className="wave-container"
    />
  );
};

export default WaveAnimation;
