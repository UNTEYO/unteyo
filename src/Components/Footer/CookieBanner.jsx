import "./cb.css";
import { useState } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };
  if (!isVisible) return null;
  return (
    <>
      <div className="bannerCookies">
        <div className="blur-bannerCookies"></div>
        <div className="main-bannerCookies">
          <div className="left-bannerCookies">
            <button onClick={handleClose} className="silang-bannerCookies">
              ×
            </button>
            <p className="explain-bannerCookies">We use cookies</p>
          </div>
          <div className="right-bannerCookies">
            <p className="isi-bannerCookies">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              provident nobis a officia eius odit fugiat, assumenda ut quis
              deserunt quo alias tempore, cumque saepe voluptatibus nemo. Magnam
              obcaecati at rem temporibus nobis corporis sint eaque inventore
              quidem explicabo eum pariatur maxime sunt voluptates, consequuntur
              deleniti consectetur veniam incidunt sapiente quod dolor. Dolore
              corporis cum officiis at cumque vel optio molestiae quia aut
              assumenda ducimus magnam, animi ipsum perspiciatis saepe delectus
              provident blanditiis esse sapiente, aliquam dolorem doloribus
              eaque. Obcaecati, consequuntur dicta non fuga tempora, iste
              inventore provident voluptatibus laborum nam repudiandae quo rem
              laudantium animi quos hic, accusantium sed.
            </p>
            <hr />
            <div className="button-bannerCookies">
              <div className="leftButton-bannerCookies">
                <button className="buttonchild-bannerCookies">
                  Accept all
                </button>
                <button className="buttonchild-bannerCookies">
                  Decline all
                </button>
              </div>
              <div className="rightButton-bannerCookies">
                <button className="buttonchild-bannerCookies">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
