import { useEffect, useState } from "react";

export const handleResponsive = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [tampilanMobile, setTampilanMobile] = useState(window.innerWidth < 768);

  const updateSizeLayar = () => {
    const currentWidth = window.innerWidth;
    setWindowWidth(currentWidth);
    setTampilanMobile(currentWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSizeLayar);

    return () => {
      window.removeEventListener("resize", updateSizeLayar);
    };
  });
  useEffect(() => {
    console.log(`Lebar sekarang: ${windowWidth}`);
    console.log(`Lebar tampilan mobile: ${tampilanMobile}`);
  }, []);
  return { windowWidth, tampilanMobile };
};
