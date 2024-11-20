import SVG from "@/CommonComponents/SVG";
import { MenuList } from "../../../Data/Layout/SidebarMenuList";
import { useAppDispatch ,useAppSelector} from "@/Redux/Hooks";
import { MenuItem, SearchSuggestionItem } from "@/Types/Layout";
import { ChangeEvent, useEffect, useState } from "react";
import { FormGroup, Input } from "reactstrap";
import { setResponsiveSearch } from "@/Redux/Reducer/Layout/LayoutSlice";
import { getLinkItemsArray } from "@/Redux/Reducer/Layout/HeaderBookmarkSlice";
import SearchList from "../LeftHeader/SearchList";

const RightSearch = () => {
  const { responsiveSearch } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const [arr, setArr] = useState<SearchSuggestionItem[]>([]);
  const [searchedWord, setSearchedWord] = useState<string>("");
  const [searchedArray, setSearchedArray] = useState<SearchSuggestionItem[]>([]);

  useEffect(() => {
    const suggesionArray: SearchSuggestionItem[] = [];
    let num = 0;
    const getAllLink = (item: MenuItem, icon: string | undefined) => {
      if (item.menu) {
        item.menu.forEach((ele) => {
          getAllLink(ele, icon);
        });
      } else {
        num = num + 1;
        suggesionArray.push({ icon: icon, title: item.title, url: item.url || "", bookmarked: false, id: num });
      }
    };
    MenuList?.forEach((item) => {
      item.Items?.forEach((child) => {
        getAllLink(child, child.icon);
      });
    });
    setArr(suggesionArray);
    dispatch(getLinkItemsArray(suggesionArray));
  }, [dispatch]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (!searchedWord) setSearchedWord("");
    setSearchedWord(e.target.value);
    let data = [...arr];
    let result = data.filter((item) => item.title?.toLowerCase().includes(e.target.value.toLowerCase()));
    setSearchedArray(result);
  };

  return (
    <li className="serchinput">
      <div className="serchbox" onClick={() => dispatch(setResponsiveSearch())}>
        <SVG iconId="search" />
      </div>
      <FormGroup className={`search-form ${responsiveSearch ? "open" : ""}`}>
        <Input type="text" placeholder="Search here..." value={searchedWord} onChange={(e) => handleSearch(e)} />
        <div className={`Typeahead-menu custom-scrollbar ${searchedWord.length ? "is-open" : ""}`}>
          <SearchList searchedArray={searchedArray} setSearchedWord={setSearchedWord} />
        </div>
      </FormGroup>
    </li>
  );
};
export default RightSearch;
