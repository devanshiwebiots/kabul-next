import { useEffect } from "react";
import { Card, Col, Row } from "reactstrap";
import { Href, ImagePath } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { BookMarkData } from "@/Types/Bookmark";
import { setBookmark, setBookMarkList } from "@/Redux/Reducer/BookmarkTabSlice";
import FavDescriptionData from "./FavDescriptionData";
import RatioImage from "@/CommonComponents/RatioImage";
import Link from "next/link";

const FavDataLoop = () => {
  const { bookmark, bookMarkList } = useAppSelector((state) => state.bookmarkTab);
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    const updatedList = bookmark.filter((data) => data.fillStar === true);
    dispatch(setBookMarkList(updatedList));
  }, [bookmark, dispatch]);

  const removeFromFavorite = (item: BookMarkData) => {
    const updatedBookMark = bookmark.map((data) => (data.id === item.id ? { ...data, fillStar: false } : data));
    dispatch(setBookmark(updatedBookMark));
  };

  return (
    <Row>
      {bookMarkList?.length > 0 ? (
        bookMarkList?.map((myBookData: BookMarkData) => (
          <Col xxl={3} md={4} className="col-ed-4" key={myBookData.id}>
            <Card className="card-with-border bookmark-card o-hidden">
              <div className="details-website">
                <RatioImage className="img-fluid" src={`${ImagePath}/lightgallry/0${myBookData.id}.jpg`} alt="Image" />
                <div className={`favourite-icon favourite_0 ${myBookData.fillStar ? "favourite" : ""}`}>
                  <Link href={Href}>
                    <i className="fa fa-star" onClick={() => removeFromFavorite(myBookData)}></i>
                  </Link>
                </div>
                <FavDescriptionData myBookData={myBookData} />
              </div>
            </Card>
          </Col>
        ))
      ) : (
        <Col sm={12}>
            <div>
              <div className='search-not-found text-center p-5'>
                <p>Sorry, Not Found Any Bookmark</p>
              </div>
            </div>
          </Col>
      )}
    </Row>
  );
};
export default FavDataLoop;
