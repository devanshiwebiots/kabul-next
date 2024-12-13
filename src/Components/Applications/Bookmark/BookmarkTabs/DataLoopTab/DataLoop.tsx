import { Href, ImagePath } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { BookMarkData } from "@/Types/Bookmark";
import { Card, Col, Row } from "reactstrap";
import SweetAlert from "sweetalert2";
import { setBookmark, setEditModal, setEditRow, setRemoveBookmark } from "@/Redux/Reducer/BookmarkTabSlice";
import DescriptionData from "./DescriptionData";
import Link from "next/link";
import RatioImage from "@/CommonComponents/RatioImage";

const DataLoop = () => {
  const { bookmark } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();

  const addToFavorites = (data: BookMarkData) => {
    const newBookMarkData = bookmark.map((item) => item.id === data.id ? { ...item, fillStar: !data.fillStar } : item);
    dispatch(setBookmark(newBookMarkData));
  };

  const onHandleClick = (data: BookMarkData) => {
    dispatch(setEditModal());
    dispatch(setEditRow(data));
  };

  const removeFromBookmark = (bookmarkId: number) => {
    SweetAlert.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        dispatch(setRemoveBookmark(bookmarkId));
        SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        SweetAlert.fire("Your imaginary file is safe!");
      }
    });
  };

  return (
    <Row id="bookmarkData">
      {bookmark?.length > 0 ? (
        bookmark?.map((data, index) => (
          <Col xxl={3} xl={4} md={4} lg={3} sm={6} key={index} className="box-col-4">
            <Card className="card-with-border bookmark-card o-hidden">
              <div className="details-website">
                <RatioImage className="img-fluid" src={`${ImagePath}/lightgallry/0${index+1}.jpg`} alt="image" />
                <div className={`favourite-icon favourite_0 ${data.fillStar ? "favourite" : ""}`} onClick={() => addToFavorites(data)}>
                  <Link href={Href}><i className="fa fa-star"></i></Link>
                </div>
                <DescriptionData data={data} onHandleClick={onHandleClick} removeFromBookmark={removeFromBookmark} />
              </div>
            </Card>
          </Col>
        ))
      ) : (
        <Col sm={12}>
          <div className='search-not-found text-center p-5'>
            <p>Sorry, Not Found Any Bookmark</p>
          </div>
        </Col>
      )}
    </Row>
  );
};

export default DataLoop;

