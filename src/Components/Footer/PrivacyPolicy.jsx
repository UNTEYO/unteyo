import React, { useState, useEffect } from "react";
import "./privacyPolicy.css";

const AdvancedPrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const styles = {
    navItem: {
      padding: "12px 16px",
      margin: "4px 0",
      cursor: "pointer",
      borderRadius: "8px",
      transition: "all 0.3s ease",
    },
    activeNavItem: {
      backgroundColor: "#2c3e50",
      color: "white",
      transform: "translateX(8px)",
    },
    backToTop: {
      position: "fixed",
      bottom: "40px",
      right: "40px",
      backgroundColor: "#2c3e50",
      color: "white",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.3s ease",
      opacity: showBackToTop ? "1" : "0",
      visibility: showBackToTop ? "visible" : "hidden",
      ":hover": {
        backgroundColor: "#3498db",
        transform: "translateY(-5px)",
      },
    },
  };

  const sections = [
    { id: "introduction", title: "Pendahuluan" },
    { id: "collection", title: "Pengumpulan Data" },
    { id: "usage", title: "Penggunaan Data" },
    { id: "security", title: "Keamanan" },
    { id: "rights", title: "Hak Pengguna" },
    { id: "cookies", title: "Kebijakan Cookie" },
    { id: "updates", title: "Pembaruan Kebijakan" },
    { id: "contact", title: "Kontak" },
  ];

  return (
    <div className="container-pp">
      <nav className="sidebar-pp">
        {sections.map((section) => (
          <div
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            style={{
              ...styles.navItem,
              ...(activeSection === section.id ? styles.activeNavItem : {}),
            }}
          >
            {section.title}
          </div>
        ))}
      </nav>

      <main className="content-pp">
        <header className="header-pp">
          <h1 className="headerTitle-pp">Kebijakan Privasi</h1>
          <p>Terakhir diperbarui: 29 Januari 2025</p>
        </header>

        <section id="introduction" className="section-pp">
          <h2 className="section-title-pp">Pendahuluan</h2>
          <p className="paragraph-pp">
            Selamat datang di Kebijakan Privasi kami. Kami berkomitmen untuk
            melindungi dan menghormati privasi Anda. Dokumen ini menjelaskan
            bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi
            pribadi Anda saat Anda menggunakan layanan kami.
          </p>
        </section>

        <section id="collection" className="section-pp">
          <h2 className="section-title-pp">Pengumpulan Data</h2>
          <p className="paragraph-pp">
            Kami mengumpulkan berbagai jenis informasi untuk memberikan layanan
            terbaik:
          </p>
          <ul className="list-pp">
            <li className="listItem-pp">
              Data Pribadi: Nama, alamat email, nomor telepon, dan informasi
              kontak lainnya yang Anda berikan secara sukarela.
            </li>
            <li className="list-item-pp">
              Data Teknis: Alamat IP, jenis browser, sistem operasi, dan
              informasi perangkat lainnya.
            </li>
            <li className="list-item-pp">
              Data Penggunaan: Informasi tentang bagaimana Anda menggunakan
              layanan kami, termasuk waktu akses dan fitur yang digunakan.
            </li>
          </ul>
        </section>

        <section id="usage" className="section-pp">
          <h2 className="section-title-pp">Penggunaan Data</h2>
          <p className="paragraph-pp">Kami menggunakan data Anda untuk:</p>
          <ul className="list-pp">
            <li className="list-item-pp">
              Menyediakan dan memelihara layanan kami
            </li>
            <li className="list-item-pp">
              Meningkatkan dan mengembangkan fitur baru
            </li>
            <li className="list-item-pp">Menganalisis penggunaan layanan</li>
            <li className="list-item-pp">
              Mengirim informasi penting dan pembaruan
            </li>
            <li className="list-item-pp">
              Mencegah penyalahgunaan dan aktivitas ilegal
            </li>
          </ul>
        </section>

        <section id="security" className="section-pp">
          <h2 className="section-title-pp">Keamanan</h2>
          <p className="paragraph-pp">
            Kami mengimplementasikan langkah-langkah keamanan yang ketat,
            termasuk:
          </p>
          <ul className="list-pp">
            <li className="list-item-pp">Enkripsi data end-to-end</li>
            <li className="list-item-pp">Pemantauan keamanan 24/7</li>
            <li className="list-item-pp">Pembaruan keamanan rutin</li>
            <li className="list-item-pp">Pembatasan akses data</li>
          </ul>
        </section>

        <section id="rights" className="section-pp">
          <h2 className="section-title-pp">Hak Pengguna</h2>
          <p className="paragraph-pp">Anda memiliki hak untuk:</p>
          <ul className="list-pp">
            <li className="list-item-pp">Mengakses data pribadi Anda</li>
            <li className="list-item-pp">
              Meminta koreksi data yang tidak akurat
            </li>
            <li className="list-item-pp">Meminta penghapusan data</li>
            <li className="list-item-pp">Membatasi pengolahan data</li>
            <li className="list-item-pp">Mendapatkan salinan data Anda</li>
          </ul>
        </section>

        <section id="cookies" className="section-pp">
          <h2 className="section-title-pp">Kebijakan Cookie</h2>
          <p className="paragraph-pp">
            Kami menggunakan cookie untuk meningkatkan pengalaman pengguna.
            Cookie membantu kami:
          </p>
          <ul className="list-pp">
            <li className="list-item-pp">Mengingat preferensi Anda</li>
            <li className="list-item-pp">Menganalisis penggunaan situs</li>
            <li className="list-item-pp">Menyediakan konten yang relevan</li>
          </ul>
        </section>

        <section id="updates" className="section-pp">
          <h2 className="section-title-pp">Pembaruan Kebijakan</h2>
          <p className="paragraph-pp">
            Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu.
            Setiap perubahan akan diumumkan di situs ini. Anda disarankan untuk
            memeriksa halaman ini secara berkala untuk mengetahui pembaruan
            terbaru.
          </p>
        </section>

        <section id="contact" className="section-pp">
          <h2 className="section-title-pp">Kontak</h2>
          <p className="paragraph-pp">
            Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan
            hubungi kami:
          </p>
          <ul className="list-pp">
            <li className="list-item-pp">Email: privacy@perusahaananda.com</li>
            <li className="list-item-pp">Telepon: (021) 1234-5678</li>
            <li className="list-item-pp">
              Alamat: Jl. Contoh No. 123, Jakarta
            </li>
          </ul>
        </section>

        <footer className="footer-pp">
          <p>© 2025 Nama Perusahaan Anda. Seluruh hak cipta dilindungi.</p>
        </footer>
      </main>

      <div onClick={scrollToTop} style={styles.backToTop}>
        ↑
      </div>
    </div>
  );
};

export default AdvancedPrivacyPolicy;
