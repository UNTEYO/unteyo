import React, { useEffect, useState, useRef } from "react";
import { handleResponsive } from "../../handleResponsive";
import { generateSequentialNumber } from "./NewsCount";
import News1 from "../../assets/News/News1.jpg";
import News2 from "../../assets/News/News2.jpg";
import News3 from "../../assets/News/News3.jpg";
import "./News.css";

function News() {
  const { windowWidth, tampilanMobile } = handleResponsive();
  const [number, setNumber] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const imgRef = useRef(null);

  const newsItems = [
    {
      id: 1,
      title: "Speecless! Pria Bagikan Kisah Cintanya Saat di Bangku SMA",
      image: News1,
    },
    {
      id: 2,
      title: "Cerita Inspiratif: Perjalanan Menuju Sukses",
      image: News2,
    },
    {
      id: 3,
      title: "Menakjubkan! Perubahan Hidup dalam 30 Hari",
      image: News3,
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setNumber((prev) => (prev % 3) + 1);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.src = newsItems[number - 1].image;
    }
  }, [number]);

  return (
    <div
      className={`containerNews-page ${
        tampilanMobile ? "mobile-containerNews-page" : ""
      }`}
    >
      <h2 className={`judulNews ${tampilanMobile ? "mobile-judulNews" : ""}`}>
        Popular News
      </h2>
      <section
        className={`containerNews ${
          tampilanMobile ? "mobile-containerNews" : ""
        }`}
      >
        <img
          ref={imgRef}
          className={`imgNews ${tampilanMobile ? "mobile-imgNews" : ""}`}
          alt="Berita Farhankun"
        />
        <div className={`newsItem ${tampilanMobile ? "newsItem-mobile" : ""}`}>
          {newsItems.map((item) => (
            <div
              key={item.id}
              className={`news${item.id} ${
                number === item.id ? "newsActive" : ""
              }`}
              onMouseEnter={() => {
                setIsHovered(true);
                setNumber(item.id);
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              <h3>{item .title}</h3>
              <p>
                Kisah inspiratif tentang pengalaman hidup yang mengajarkan
                banyak hal. Setiap kejadian memiliki makna yang mendalam.
              </p>
            </div>
          ))}
        </div>
        <h1>Random Number: {number}</h1>
      </section>
    </div>
  );
}

export default News;
