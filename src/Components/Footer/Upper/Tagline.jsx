
import "./Tagline.css"

function Tagline({ author, authorName, author1 }) {
  return (
    <>
      <div className="hero">
        <img
          className="gambar"
          src={authorName}
          alt="Picture"
        />
        <section
          className="subHero"
        >
          <p
            className="textUpper"
            style={{ color: "white" }}
          >
            {author}
          </p>
          <p
            className="textLower"
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
