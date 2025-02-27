// ListSegment.jsx

export default function ListSegment({
  headLine,
  listHeadline,
  listHeadline1,
  listHeadline2,
  href1,
  href2,
  href3,
}) {

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
        className="styleListSegment"
      >
        <p
          className="headLine"
        >
          {headLine}
        </p>
        <div
          className="styleAnchorList"
        >
          <a
            href={href1}
            onClick={(e) => clikKontrol(e, href1?.replace("#", ""))}
            className="isiHeadline"
          >
            {listHeadline}
          </a>
          <a
            href={href2}
            onClick={(e) => clikKontrol(e, href2?.replace("#", ""))}
            className="isiHeadline"
          >
            {listHeadline1}
          </a>
          <a
            href={href3}
            onClick={(e) => clikKontrol(e, href3?.replace("#", ""))}
            className="isiHeadline"
          >
            {listHeadline2}
          </a>
        </div>
      </li>
    </div>
  );
}
