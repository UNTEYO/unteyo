// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { handleResponsive } from "../../handleResponsive";
import { generateSequentialNumber } from './NewsCount'
import News1 from "../../assets/News/News1.jpg"
import News2 from "../../assets/News/News2.jpg"
import News3 from "../../assets/News/News3.jpg"
import "./News.css";

function News() {
    const { windowWidth, tampilanMobile } = handleResponsive();
    let [number, setNumber] = useState(0);
    let [isHovered, setIsHovered] = useState(false)


  useEffect(() => {
    let interval = setInterval(() => {
      setNumber(generateSequentialNumber());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

      useEffect(() => {
      }, [windowWidth, tampilanMobile]);

    useEffect(() => {
    const news1 = document.querySelector(".news1");
    const news2 = document.querySelector(".news2");
    const news3 = document.querySelector(".news3");
    const img = document.querySelector(".imgNews");

    const handleHover1 = () => {
        setIsHovered(true)
        news1.classList.add("newsHovered")
    }

    const outhover1 = () => {
        setIsHovered(false)
        news1.classList.remove("newsHovered")
    }
    const handleHover2 = () => {
        setIsHovered(true)
        news2.classList.add("newsHovered")
    }

    const outhover2 = () => {
        setIsHovered(false)
        news2.classList.remove("newsHovered")
    }
    const handleHover3 = () => {
        setIsHovered(true)
        news3.classList.add("newsHovered")
    }

    const outhover3 = () => {
        setIsHovered(false)
        news3.classList.remove("newsHovered")
    }

    news1.addEventListener("mouseover", handleHover1)
    news1.addEventListener("mouseout", outhover1)

    news2.addEventListener("mouseover", handleHover2)
    news2.addEventListener("mouseout", outhover2)

    news3.addEventListener("mouseover", handleHover3)
    news3.addEventListener("mouseout", outhover3)

    if (isHovered == true) {
        if (news1.classList.contains("newsHovered")) {
            img.src = News1
        }
        if (news2.classList.contains("newsHovered")) {
            img.src = News2
        }
        if (news3.classList.contains("newsHovered")) {
            img.src = News3
        }
    }
    if (isHovered == false) {
        if (number == 1) {
            if(windowWidth > 768) {
            news1.classList.add("newsActive");
            news2.classList.remove("newsActive");
            news3.classList.remove("newsActive");
            }
            if (windowWidth < 768) {
                news1.classList.add("newsActive-mobile");
                news2.classList.remove("newsActive-mobile");
                news3.classList.remove("newsActive-mobile");
            }
            img.src = News1;
        } else if (number == 2) {
            if (windowWidth > 768) {
                news1.classList.remove("newsActive");
            news2.classList.add("newsActive");
            news3.classList.remove("newsActive");
            }
            if (windowWidth < 768) {
                news1.classList.remove("newsActive-mobile");
                news2.classList.add("newsActive-mobile");
                news3.classList.remove("newsActive-mobile");
            }
            img.src = News2;
        } else if (number == 3) {
           if (windowWidth > 768) {
            news1.classList.remove("newsActive");
            news2.classList.remove("newsActive");
            news3.classList.add("newsActive");
           }
           if (windowWidth < 768) {
            news1.classList.remove("newsActive-mobile");
            news2.classList.remove("newsActive-mobile");
            news3.classList.add("newsActive-mobile");
        }
            img.src = News3;}
    }

    console.log("terbaru" + isHovered);
    }, [number])

    return (
        <div className={`containerNews-page ${tampilanMobile ? "mobile-containerNews-page" : "containerNews-page"}`}>
            <h2 className={`judulNews ${tampilanMobile ? "mobile-judulNews" : "judulNews"}`}>Popular News</h2>
            <section className={`containerNews ${tampilanMobile ? "mobile-containerNews" : "containerNews"}`}>
                <img className={`imgNews ${
                    tampilanMobile ? "mobile-imgNews" : "imgNews"
                }`}></img>
                <div className={`newsItem ${tampilanMobile ? "newsItem-mobile" : "newsItem"}`}>
                    <div className={`news1 ${tampilanMobile ? "news1-mobile" : "news1"}`}>
                        <h3>
                        Speecless! Pria Bagikan Kisah Cintanya Saat di Bangku SMA
                        </h3>
                        <p>
                        Ketika seorang siswa SMA yang belum pernah pacaran, jatuh hati pada teman sekelasnya bernama Dewi. Setelah dia mengumpulkan keberanian, dan mencoba mendekatinya. Namun, karena perasaan minder dan kurang percaya diri, hubungan mereka hanya sampai pada tahap pertemanan.
Sobat dari kisah ini mengajarkan tentang pentingnya keberanian dalam mengejar sesuatu yang diinginkan, meskipun hasilnya mungkin tidak sesuai harapan. Mungkin di alam semesta lain kita bisa bersama, masa indah yang teringat tapi.... yasudahlah
curhatan ini mendapat dukungan dari warganet
                        </p>
                    </div>
                    <div className={`news2 ${tampilanMobile ? "news2-mobile" : "news2"}`}>
                         <h3>
                        Speecless! Pria Bagikan Kisah Cintanya Saat di Bangku SMA
                        </h3>
                        <p>
                        Ketika seorang siswa SMA yang belum pernah pacaran, jatuh hati pada teman sekelasnya bernama Dewi. Setelah dia mengumpulkan keberanian, dan mencoba mendekatinya. Namun, karena perasaan minder dan kurang percaya diri, hubungan mereka hanya sampai pada tahap pertemanan.
Sobat dari kisah ini mengajarkan tentang pentingnya keberanian dalam mengejar sesuatu yang diinginkan, meskipun hasilnya mungkin tidak sesuai harapan. Mungkin di alam semesta lain kita bisa bersama, masa indah yang teringat tapi.... yasudahlah
curhatan ini mendapat dukungan dari warganet
                        </p>
                    </div>
                    <div className={`news3 ${tampilanMobile ? "news3-mobile" : "news3"}`}>
                         <h3>
                        Speecless! Pria Bagikan Kisah Cintanya Saat di Bangku SMA
                        </h3>
                        <p>
                        Ketika seorang siswa SMA yang belum pernah pacaran, jatuh hati pada teman sekelasnya bernama Dewi. Setelah dia mengumpulkan keberanian, dan mencoba mendekatinya. Namun, karena perasaan minder dan kurang percaya diri, hubungan mereka hanya sampai pada tahap pertemanan.
Sobat dari kisah ini mengajarkan tentang pentingnya keberanian dalam mengejar sesuatu yang diinginkan, meskipun hasilnya mungkin tidak sesuai harapan. Mungkin di alam semesta lain kita bisa bersama, masa indah yang teringat tapi.... yasudahlah
curhatan ini mendapat dukungan dari warganet
                        </p>
                    </div>
                </div>
                <h1>Randon Number: {number} </h1>
            </section>
        </div>
    );
}

export default News;
