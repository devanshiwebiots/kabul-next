import { useState } from "react";
import { Button, Card, CardBody, Col, Collapse, Input } from "reactstrap";
import { FilterLearning, FindCourseLearning, Search, CategoriesLearning, DurationLearning, PriceLearning, StatusLearning } from "@/Constant";
import CommonLearningHeader from "../Common/CommonLearningHeader";
import { Search as SearchIcon } from "react-feather";
import { DurationData, LearningFilterData, PriceCheckData, StatusCheckData } from "@/Data/Miscellaneous/Learning"
import CommonCheckboxAndRadio from "./Common/CommonCheckboxAndRadio";

const FindCourse = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl={12}>
      <Card>
        <CommonLearningHeader heading={FindCourseLearning} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Collapse isOpen={isOpen}>
          <CardBody className="filter-cards-view animate-chk">
            <div className="job-filter">
              <div className="faq-form">
                <Input type="text" placeholder={Search} />
                <SearchIcon className="search-icon" />
              </div>
            </div>
            <CommonCheckboxAndRadio title={CategoriesLearning} data={LearningFilterData} name="Categories" />
            <CommonCheckboxAndRadio title={DurationLearning} data={DurationData} name="Duration" />
            <CommonCheckboxAndRadio title={PriceLearning} data={PriceCheckData} type="radio" name="Price" className="mt-0" defaultCheckedIndex={2} />
            <CommonCheckboxAndRadio title={StatusLearning} data={StatusCheckData} name="Status" className="mt-0" />
            <Button color="primary" className="text-center">{FilterLearning}</Button>
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};

export default FindCourse;
