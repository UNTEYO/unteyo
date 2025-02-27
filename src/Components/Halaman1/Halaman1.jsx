import React, { useEffect } from 'react'
import "./Halaman1.css"
import laptopHal1 from "../../assets/laptopHal1.png"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin if you're using it
gsap.registerPlugin(ScrollTrigger);

function Halaman1() {
  
  useEffect(() => {
    const animasi = gsap.utils.toArray(".headingHalaman1")

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const service = entry.target
          const judul = service.querySelector(".judulHalaman1")

          ScrollTrigger.create({
            trigger: service,
            start: "top 80%",
            end: "bottom 80%",
            scrub: true,
            onUpdate: (self) => {
              let progress = self.progress;
              let position = -100 + (100 * progress); // Adjust this logic to move from left to right
              gsap.to(judul, {
                x: position,
                duration: 0.1,
                ease: "none",
              });
            }
          })
        }
      });
    }

    // Create an Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    animasi.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="containerHalaman1">
        <section className="isiHalaman1">
            <h2 className="headingHalaman1">What is Unteyo Journey?</h2>
            <p className="pHalaman1">Part of the Hubung Group, it is a student empowerment media platform, providing information, resources, and creative outlets that encourage critical thinking, design thinking, and self-development.</p>
            <p className="pHalaman1">Addresses academic and non-academic issues affecting students, with a focus on problem solving and creating real impact.</p>
        </section>
        <img className="imgHalaman1" src={laptopHal1}></img>
    </div>
  )
}

export default Halaman1;
