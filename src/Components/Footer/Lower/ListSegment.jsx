export default function ListSegment({
  headLine,
  listHeadline,
  listHeadline1,
  listHeadline2,
}) {
  return (
    <>
      <div>
        <li className="styleListSegment">
          <p className="headLine">{headLine}</p>
          <div className="styleAnchorList">
            <a href="#" className="isiHeadline">
              {listHeadline}
            </a>
            <a href="#" className="isiHeadline">
              {listHeadline1}
            </a>
            <a href="#" className="isiHeadline">
              {listHeadline2}
            </a>
          </div>
        </li>
      </div>
    </>
  );
}
