import { Row, Col, Button } from "reactstrap";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { useRouter } from "next/navigation";
import SVG from "@/CommonComponents/SVG";
import { AddNewBookmark, Bookmark, Href } from "@/Constant";
import { setFlip } from "@/Redux/Reducer/Layout/LayoutSlice";

const BookmarkListData = () => {
  const { bookmarkedData } = useAppSelector((state) => state.headerBookMark)
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <div className="front">
      <h5 className="f-18 mb-0 dropdown-title">{Bookmark}</h5>
      <ul className="bookmark-dropdown">
        <li className="custom-scrollbar">
          <Row>
            {bookmarkedData.map((item, index) => (
              <Col xs={4} className="text-center mb-2" key={index}>
                <div className="bookmark-content" onClick={() => router.push(`${item.url}`)}>
                  <div className='bookmark-icon'><SVG className='stroke-icon' iconId={`stroke-${item.icon}`} /></div>
                  <span>{item.title}</span>
                </div>
              </Col>
            ))}
          </Row>
        </li>
        <li className="text-center" onClick={() => dispatch(setFlip())}>
          <Button color="primary" className="flip-btn w-100" id="flip-btn" href={Href}>{AddNewBookmark}</Button>
        </li>
      </ul>
    </div>
  );
};
export default BookmarkListData;