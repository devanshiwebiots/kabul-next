import SVG from "@/CommonComponents/SVG";
import { Back, EmptyResult, Href } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { handleBookmarkChange } from "@/Redux/Reducer/Layout/HeaderBookmarkSlice";
import { setFlip } from "@/Redux/Reducer/Layout/LayoutSlice";
import { BookmarkedDataType } from "@/Types/Layout";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { Button, Input } from "reactstrap";

const BookmarkBack = () => {
  const dispatch = useAppDispatch();
  const { linkItemsArray } = useAppSelector((store) => store.headerBookMark);
  const [searchedItems, setSearchedItems] = useState<BookmarkedDataType[]>([]);
  const [searchWord, setSearchWord] = useState("");

  const searchItems = (e: string) => {
    let copyArray = [...linkItemsArray];
    let result = copyArray.filter((item, i) => item?.title?.toLowerCase().includes(e.toLowerCase()));
    setSearchedItems(result);
  };

  const handleBackButton = () => {
    dispatch(setFlip())
    setSearchWord("");
  };
  const bookMarkInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
    searchItems(e.target.value);
  }

  return (
    <div className="back">
      <ul>
        <li>
          <div className="bookmark-dropdown flip-back-content">
            <Input type="text" placeholder="search..." onChange={(e) => bookMarkInputChange(e)} value={searchWord} />
          </div>
          <div className={`filled-bookmark Typeahead-menu py-0  ${searchWord ? "is-open" : ""} custom-scrollbar`}>
            {searchedItems?.map((item: any, i: number) => (
              <div key={i} className="ProfileCard u-cf">
                <div className="ProfileCard-avatar"><SVG className="fill-icon" iconId={`fill-${item.icon}`} /></div>
                <div className="ProfileCard-details">
                  <div className="ProfileCard-realName">
                    <Link className="realname" href={Href}>{item.title}</Link>
                    <span className="pull-right">
                      <Link href={Href}>
                        <i onClick={() => dispatch(handleBookmarkChange(linkItemsArray[item.id - 1]))} className={`fa fa-star-o mt-1 icon-star ${linkItemsArray[item.id - 1].bookmarked ? "starred" : ""}`}></i>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {!searchedItems.length && <p>{EmptyResult}</p>}
          </div>
        </li>
        <li onClick={handleBackButton}>
          <Button color="primary" className="flip-back w-100" id="flip-back" href={Href}>{Back}</Button>
        </li>
      </ul>
    </div>
  );
};
export default BookmarkBack;