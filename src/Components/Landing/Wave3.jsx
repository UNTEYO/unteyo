import React, { useEffect, useRef } from "react";

const WaveAnimation = () => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Configuration
  const lines = 5;
  const lineColors = ["#7F00FF", "#4ECDC4", "#7F00FF", "#4ECDC4", "#7F00FF"];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Wave parameters
    const waves = lineColors.map((color, index) => ({
      color,
      y: window.innerHeight / 2 + index * 25,
      amplitude: 50,
      frequency: 0.01,
      speed: 0.01,
      offset: index * (Math.PI / 4),
    }));

    let startTime = Date.now();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const currentTime = (Date.now() - startTime) * 0.001;
      const width = canvas.width;

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2;

        // Add glow effect
        ctx.shadowColor = wave.color;
        ctx.shadowBlur = 5;

        for (let x = 0; x < width; x++) {
          const xPos = x - currentTime * 70; // Speed of movement
          const y =
            wave.y +
            Math.sin(xPos * wave.frequency + wave.offset) * wave.amplitude;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      });

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="wave-container"
    />
  );
};

export default WaveAnimation;
