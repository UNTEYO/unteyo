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
      isi: "Kisah inspiratif tentang pengalaman hidup yang mengajarkan banyak hal. Setiap kejadian memiliki makna yang mendalam.",
      image: News1,
      link: "bla",
    },
    {
      id: 2,
      title: "Cerita Inspiratif: Perjalanan Menuju Sukses",
      isi: "Kisah inspiratif tentang pengalaman hidup yang mengajarkan banyak hal. Setiap kejadian memiliki makna yang mendalam.",
      image: News2,
      link: "bla",
    },
    {
      id: 3,
      title: "Menakjubkan! Perubahan Hidup dalam 30 Hari",
      isi: "Kisah inspiratif tentang pengalaman hidup yang mengajarkan banyak hal. Setiap kejadian memiliki makna yang mendalam.",
      image: News3,
      link: "bla",
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setNumber((prev) => (prev % 3) + 1);
      }, 1500);
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
      id="news"
      className="containerNews-page"
    >
      <h2 className="judulNews">
        Popular News
      </h2>
      <section
        className="containerNews"
      >
        <img
          ref={imgRef}
          className="imgNews"
          alt="Berita Farhankun"
        />
        <div
          className="newsItem"
        >
          {newsItems.map((item) => (
            <div
              key={item.id}
              className={`news ${number === item.id ? "newsActive" : ""} `}
              onMouseEnter={() => {
                setIsHovered(true);
                setNumber(item.id);
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              <h3>{item.title}</h3>
              <p>{item.isi}</p>
              <button
                className="btnNews"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default News;
