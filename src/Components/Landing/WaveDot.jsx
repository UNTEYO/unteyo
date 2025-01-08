import React, { useEffect, useRef } from "react";

const WaveAnimation = () => {
  const waveContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const waveContainer = waveContainerRef.current;
    const lines = 8;
    const dotsPerLine = 50;
    const dotWidth = 4;
    const screenWidth = window.innerWidth;

    // Array warna untuk setiap baris
    const lineColors = [
      "#FF6B6B", // Merah muda
      "#4ECDC4", // Tosca
      "#45B7D1", // Biru muda
      "#96CEB4", // Hijau muda
      "#FFEEAD", // Kuning muda
      "#D4A5A5", // Pink pudar
      "#9370DB", // Medium purple
      "#20B2AA", // Light sea green
    ];

    // Fungsi untuk membuat titik baru dengan warna
    const createDot = (lineIndex, position) => {
      const dot = document.createElement("div");
      dot.classList.add("wave");
      // Menambahkan warna sesuai dengan indeks baris
      dot.style.backgroundColor = lineColors[lineIndex];
      // Menambahkan efek glow
      dot.style.boxShadow = `0 0 5px ${lineColors[lineIndex]}`;
      waveContainer.appendChild(dot);

      return {
        element: dot,
        x: position,
        y: window.innerHeight / 2 + lineIndex * 20,
        length: 0.002 + lineIndex * 0.0001,
        amplitude: 70 + lineIndex * 5,
        offset: lineIndex * (Math.PI / 6),
      };
    };

    // Inisialisasi titik untuk setiap baris
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
          dot.x -= 0.4;

          if (dot.x + dotWidth < 0) {
            dot.element.remove();
            lineDots.splice(index, 1);
            const newDot = createDot(lineIndex, screenWidth);
            lineDots.push(newDot);
          }

          const newY =
            dot.y +
            Math.sin(dot.x * dot.length + time * 0.005 + dot.offset) *
              dot.amplitude +
            Math.sin(dot.x * dot.length * 2 + time * 0.007) *
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

  return <div ref={waveContainerRef} className="wave-container" />;
};

export default WaveAnimation;
