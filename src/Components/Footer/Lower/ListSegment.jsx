import { handleResponsive } from "../../../handleResponsive";

export default function ListSegment({
  headLine,
  listHeadline,
  listHeadline1,
  listHeadline2,
}) {
  const { windowWidth, tampilanMobile } = handleResponsive();

  return (
    <>
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
              href="#"
              className={`isiHeadline ${
                tampilanMobile ? "mobile-isiHeadline" : "isiHeadline"
              }`}
            >
              {listHeadline}
            </a>
            <a
              href="#"
              className={`isiHeadline ${
                tampilanMobile ? "mobile-isiHeadline" : "isiHeadline"
              }`}
            >
              {listHeadline1}
            </a>
            <a
              href="#"
              className={`isiHeadline ${
                tampilanMobile ? "mobile-isiHeadline" : "isiHeadline"
              }`}
            >
              {listHeadline2}
            </a>
          </div>
        </li>
      </div>
    </>
  );
}
