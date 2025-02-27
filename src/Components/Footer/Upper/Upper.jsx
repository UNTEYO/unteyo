import Tagline from "./tagline";
import love from "../../../assets/like.png";
import "./Upper.css";

function Upper() {
  
  return (
    <>
      <div
        className="styleTagline"
      >
        <Tagline
          author="Wahai Manusia"
          author1="Learn more"
          authorName={love}
        ></Tagline>
        <Tagline
          author="Wahai Kucing"
          author1="Learn more"
          authorName={love}
        ></Tagline>
        <Tagline
          author="Wahai Tumbuhan"
          author1="Learn more"
          authorName={love}
        ></Tagline>
      </div>
    </>
  );
}

export default Upper;
