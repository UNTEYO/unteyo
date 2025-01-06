// Mendapatkan referensi ke elemen canvas
const canvas = document.getElementById("waveCanvas");
const ctx = canvas.getContext("2d");

// Fungsi untuk mengatur ukuran canvas sesuai window
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();

// Konfigurasi untuk multiple lines
const lines = 8; // Jumlah garis yang akan dibuat
const waves = Array(lines)
  .fill()
  .map((_, i) => ({
    y: canvas.height / 2, // Posisi tengah vertikal
    length: 0.002 + i * 0.0001, // Panjang gelombang, sedikit berbeda untuk tiap garis
    amplitude: 80 + i * 5, // Tinggi gelombang
    frequency: 0.02, // Frekuensi gelombang
    offset: i * (Math.PI / 6), // Offset fase untuk setiap garis
  }));

function drawWaves(time) {
  // Membersihkan canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Menggambar setiap garis gelombang
  waves.forEach((wave, index) => {
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);

    // Menghitung posisi setiap titik pada garis
    for (let x = 0; x < canvas.width; x++) {
      // Rumus gelombang: menggunakan fungsi sin untuk membuat gerakan
      // time * 0.001 diperlambat dari 0.002 (lebih lambat)
      const y =
        wave.y +
        Math.sin(x * wave.length + time * 0.001 + wave.offset) *
          wave.amplitude +
        Math.sin(x * wave.length * 2 + time * 0.0015) * (wave.amplitude * 0.5);

      ctx.lineTo(x, y);
    }

    // Mengatur style garis
    ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  // Membuat koneksi antar garis
  for (let x = 0; x < canvas.width; x += 50) {
    // Jarak antar koneksi 50px
    for (let i = 0; i < waves.length - 1; i++) {
      // Menghitung posisi Y untuk dua garis yang akan dihubungkan
      const y1 =
        waves[i].y +
        Math.sin(x * waves[i].length + time * 0.001 + waves[i].offset) *
          waves[i].amplitude +
        Math.sin(x * waves[i].length * 2 + time * 0.0015) *
          (waves[i].amplitude * 0.5);

      const y2 =
        waves[i + 1].y +
        Math.sin(x * waves[i + 1].length + time * 0.001 + waves[i + 1].offset) *
          waves[i + 1].amplitude +
        Math.sin(x * waves[i + 1].length * 2 + time * 0.0015) *
          (waves[i + 1].amplitude * 0.5);

      // Hanya menggambar koneksi jika jaraknya tidak terlalu jauh
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

  // Meminta frame animasi berikutnya
  requestAnimationFrame(drawWaves);
}

// Memulai animasi
requestAnimationFrame(drawWaves);
