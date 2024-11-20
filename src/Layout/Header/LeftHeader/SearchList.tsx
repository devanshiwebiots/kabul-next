import Link from "next/link";
import { useAppDispatch } from "@/Redux/Hooks";
import { setResponsiveSearch } from "@/Redux/Reducer/Layout/LayoutSlice";
import { SearchSuggestionListType } from "../../../Types/Layout";
import SVG from "@/CommonComponents/SVG";
import { EmptySearch } from "@/Constant";

const SearchList: React.FC<SearchSuggestionListType> = ({ searchedArray, setSearchedWord }) => {
  const dispatch = useAppDispatch();
  const handleSearch = () => {
    setSearchedWord("");
    dispatch(setResponsiveSearch());
  };

  return (
    <>
      {searchedArray?.map((item, index) => (
        <div className="ProfileCard u-cf" key={index}>
          <Link className="realname w-auto d-flex justify-content-start gap-2" href={item.url || ""} onClick={handleSearch}>
            <div className="ProfileCard-avatar">
              <SVG className="stroke-icon svg-color" iconId={`stroke-${item.icon}`} />
            </div>
            <div className="ProfileCard-details">
              <div className="ProfileCard-realName">{item.title}</div>
            </div>
          </Link>
        </div>
      ))}
     {!searchedArray?.length && <p>{EmptySearch}</p>}
    </>
  );
};

export default SearchList;
