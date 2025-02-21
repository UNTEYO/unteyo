// ListSegment.jsx
import { handleResponsive } from "../../../handleResponsive";

export default function ListSegment({
  headLine,
  listHeadline,
  listHeadline1,
  listHeadline2,
  href1,
  href2,
  href3,
}) {
  const { tampilanMobile } = handleResponsive();

  const clikKontrol = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <li
        className={`styleListSegment ${
          tampilanMobile ? "mobile-styleListSegment" : "styleListSegment"
        }`}
      >
        <p
          className={`headLine ${
            tampilanMobile ? "mobile-headLine" : "headLine"
          }`}
        >
          {headLine}
        </p>
        <div
          className={`styleAnchorList ${
            tampilanMobile ? "mobile-styleAnchorList" : "styleAnchorList"
          }`}
        >
          <a
            href={href1}
            onClick={(e) => clikKontrol(e, href1?.replace("#", ""))}
            className={`isiHeadline ${
              tampilanMobile ? "mobile-isiHeadline" : "isiHeadline"
            }`}
          >
            {listHeadline}
          </a>
          <a
            href={href2}
            onClick={(e) => clikKontrol(e, href2?.replace("#", ""))}
            className={`isiHeadline ${
              tampilanMobile ? "mobile-isiHeadline" : "isiHeadline"
            }`}
          >
            {listHeadline1}
          </a>
          <a
            href={href3}
            onClick={(e) => clikKontrol(e, href3?.replace("#", ""))}
            className={`isiHeadline ${
              tampilanMobile ? "mobile-isiHeadline" : "isiHeadline"
            }`}
          >
            {listHeadline2}
          </a>
        </div>
      </li>
    </div>
  );
}
