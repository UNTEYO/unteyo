// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { handleResponsive } from "../../handleResponsive";
import { generateSequentialNumber } from './NewsCount'
import "./News.css";

function News() {
    const { windowWidth, tampilanMobile } = handleResponsive();
    const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(generateSequentialNumber());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

      useEffect(() => {
        
      }, [windowWidth, tampilanMobile]);

    return (
        <div className={`containerNews-page ${tampilanMobile ? "mobile-containerNews-page" : "containerNews-page"}`}>
            <h2 className={`judulNews ${tampilanMobile ? "mobile-judulNews" : "judulNews"}`}>Popular News</h2>
            <section className={`containerNews ${tampilanMobile ? "mobile-containerNews" : "containerNews"}`}>
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
