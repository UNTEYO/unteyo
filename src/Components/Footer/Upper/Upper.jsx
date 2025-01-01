import Tagline from "./tagline";
import love from "../../../assets/like.png";

function Upper() {
  return (
    <>
      <div>
        <Tagline
          author="Wahai Manusia"
          author1="Learn more"
          authorName={love}
        ></Tagline>
      </div>
    </>
  );
}

export default Upper;
