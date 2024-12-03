import { Search } from "@/Constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { filterSearchBy } from "@/Redux/Reducer/FilterSlice";
import { useState } from "react";
import { Col, Form, FormGroup, Input } from "reactstrap";

const SearchBox = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const dispatch = useAppDispatch();

  const handleSearchKeyword = (keyword: string) => {
    setSearchKeyword(keyword);
    dispatch(filterSearchBy(searchKeyword));
  };

  return (
    <Col md={9} sm={12}>
      <Form>
        <FormGroup className="m-0">
          <Input type="search" placeholder={Search} onChange={(e) => handleSearchKeyword(e.target.value)} />
          <i className="fa fa-search"></i>
        </FormGroup>
      </Form>
    </Col>
  );
};

export default SearchBox;
