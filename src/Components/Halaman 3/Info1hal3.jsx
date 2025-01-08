import React from 'react'
import "./Info1hal3.css"

function Info1hal3() {
     function OnHover1 (){
        const ImgCard1 = document.querySelector(".imgcard1Halaman3")
        ImgCard1.classList.add("imgcard1Halaman3Hover");
        const InfoCard = document.querySelector(".infocard")
        InfoCard.style.display = "flex";
        InfoCard.style.opacity = "1"
        console.log("Mouse over: class added");
      }
    
      function OutHover1() {
        const Imgcard1 = document.querySelector(".imgcard1Halaman3");
        const InfoCard = document.querySelector(".infocard")
    
        if (Imgcard1.classList.contains("imgcard1Halaman3Hover")) {
          Imgcard1.classList.remove("imgcard1Halaman3Hover");
          InfoCard.style.opacity = "0"
          console.log("Mouse out: class removed, info displayed")
        }
        else {
          Imgcard1.classList.add("imgcard1Halaman3Hover");
          InfoCard.style.opacity = "1"
          console.log("Mouse out: class added, info hidden")
        }
      }
  return (
    <div className='infocard'>
                <h3>
                  Take the Trash: Kampus Bersih Mulai Dari Kita
                </h3>
                <div className='DateLoc'>
                  <div className='date'>
                    <h4>
                      Date
                    </h4>
                    <p>
                      December 7, 2024
                    </p>
                  </div>
                  <div className='loc'>
                    <h4>
                      Location
                    </h4>
                    <p>
                      Taman Kampus 1 UTY
                    </p>
                  </div>
                </div>
                <button>Buy Now</button>
              </div>
  )
}

export default Info1hal3