import { handleResponsive } from "../../../handleResponsive";

function Tagline({ author, authorName, author1 }) {
  const { windowWidth, tampilanMobile } = handleResponsive();
  return (
    <>
      <div className={`hero ${tampilanMobile ? "mobile-hero" : "hero"}`}>
        <img
          className={`gambar ${tampilanMobile ? "mobile-gambar" : "gambar"}`}
          src={authorName}
          alt="Picture"
        />
        <section
          className={`subHero ${tampilanMobile ? "mobile-subHero" : "subHero"}`}
        >
          <p
            className={`textUpper ${
              tampilanMobile ? "mobile-textUpper" : "textUpper"
            } `}
            style={{ color: "white" }}
          >
            {author}
          </p>
          <p
            className={`textLower ${
              tampilanMobile ? "mobile-textLower" : "textLower"
            } `}
            style={{ color: "white" }}
          >
            {author1}
          </p>
        </section>
      </div>
    </>
  );
}
export default Tagline;
