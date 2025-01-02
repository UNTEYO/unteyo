import ListSegment from "./ListSegment";
import "./lower.css";

export default function Lower() {
  return (
    <>
      <div className="containerLower">
        <section className="lowerFirst">
          <h3 className="heroLower">Stay Updated</h3>
          <p className="subHeroLower">
            Daftar ke buletin kami untuk mendapatkan pembaruan langsung ke kotak
            masuk Anda.
          </p>
        </section>
        <section className="lowerSecond">
          <ListSegment
            headLine="Products"
            listHeadline="Program"
            listHeadline1="News"
            listHeadline2="Product"
          ></ListSegment>
          <ListSegment
            headLine="Abouts"
            listHeadline="About Us"
            listHeadline1="Program"
            listHeadline2="News"
          ></ListSegment>
          <ListSegment
            headLine="Help"
            listHeadline="Dukungan"
            listHeadline1="Jaminan"
            listHeadline2="Products"
          ></ListSegment>
        </section>
      </div>
    </>
  );
}
