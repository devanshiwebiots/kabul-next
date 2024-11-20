import { useEffect, useState } from "react";
import { Col, FormGroup, Input } from "reactstrap";
import { MenuList } from "../../../Data/Layout/SidebarMenuList";
import { MenuItem, SearchSuggestionItem } from "../../../Types/Layout";
import SearchList from "./SearchList";
import SVG from "@/CommonComponents/SVG";

const LeftHeader = () => {
  const [arr, setArr] = useState<SearchSuggestionItem[]>([]);
  const [searchedWord, setSearchedWord] = useState<string>("");
  const [searchedArray, setSearchedArray] = useState<SearchSuggestionItem[]>([]);

  useEffect(() => {
    const suggestionArray: SearchSuggestionItem[] = [];
    const getAllLink = (item: MenuItem, icon: string | undefined) => {
      if (item.menu) item.menu.forEach((ele) => getAllLink(ele, icon));
      else suggestionArray.push({ icon: icon, title: item.title, url: item.url || "" });
    };
    MenuList?.forEach((item) => item.Items?.forEach((child) => getAllLink(child, child.icon)));
    setArr(suggestionArray);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!searchedWord) setSearchedWord("");
    const searchKey = e.target.value;
    setSearchedWord(searchKey);
    if (searchKey !== "") {
      const result = arr.filter((item) => item.title?.toLowerCase().includes(e.target.value.toLowerCase()));
      setSearchedArray(result);
    }
  };

  return (
    <Col xxl="5" xl="6" className="left-header col-auto box-col-4 horizontal-wrapper p-0">
      <div className="left-menu-header">
        <ul className="header-left">
          <li>
            <FormGroup className="w-100">
              <div className="Typeahead Typeahead--twitterUsers">
                <div className="u-posRelative d-flex">
                  <SVG className="search-bg svg-color me-2" iconId="fill-search" />
                  <Input className="demo-input Typeahead-input form-control-plaintext w-100 p-0" type="text" placeholder="Type to Search .." onChange={(e) => handleSearch(e)} />
                </div>
                <div className={`Typeahead-menu custom-scrollbar ${searchedWord.length ? "is-open" : ""}`}>
                  <SearchList searchedArray={searchedArray} setSearchedWord={setSearchedWord} />
                </div>
              </div>
            </FormGroup>
          </li>
        </ul>
      </div>
    </Col>
  );
};

export default LeftHeader;
