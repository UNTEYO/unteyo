import React, { useEffect, useRef } from "react";

const WaveAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Fungsi untuk mengatur ukuran canvas
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Event listener untuk resize
    window.addEventListener("resize", resize);
    resize();

    // Konfigurasi untuk multiple lines
    const lines = 8;
    const waves = Array(lines)
      .fill()
      .map((_, i) => ({
        y: canvas.height / 2,
        length: 0.002 + i * 0.0001,
        amplitude: 80 + i * 5,
        frequency: 0.02,
        offset: i * (Math.PI / 6),
      }));

    // Fungsi untuk menggambar gelombang
    function drawWaves(time) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Menggambar setiap garis gelombang
      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);

        for (let x = 0; x < canvas.width; x++) {
          const y =
            wave.y +
            Math.sin(x * wave.length + time * 0.001 + wave.offset) *
              wave.amplitude +
            Math.sin(x * wave.length * 2 + time * 0.0015) *
              (wave.amplitude * 0.5);

          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // Membuat koneksi antar garis
      for (let x = 0; x < canvas.width; x += 50) {
        for (let i = 0; i < waves.length - 1; i++) {
          const y1 =
            waves[i].y +
            Math.sin(x * waves[i].length + time * 0.001 + waves[i].offset) *
              waves[i].amplitude +
            Math.sin(x * waves[i].length * 2 + time * 0.0015) *
              (waves[i].amplitude * 0.5);

          const y2 =
            waves[i + 1].y +
            Math.sin(
              x * waves[i + 1].length + time * 0.001 + waves[i + 1].offset
            ) *
              waves[i + 1].amplitude +
            Math.sin(x * waves[i + 1].length * 2 + time * 0.0015) *
              (waves[i + 1].amplitude * 0.5);

          if (Math.abs(y1 - y2) < 100) {
            ctx.beginPath();
            ctx.moveTo(x, y1);
            ctx.lineTo(x, y2);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(drawWaves);
    }

    // Memulai animasi
    const animationFrame = requestAnimationFrame(drawWaves);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="wadahCanvas">
      <canvas ref={canvasRef} className="canvas"></canvas>
    </div>
  );
};

export default WaveAnimation;
