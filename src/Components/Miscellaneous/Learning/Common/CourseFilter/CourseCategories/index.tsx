import { DesignerCategoryData, DevelopmentData } from "@/Data/Miscellaneous/Learning";
import Link from "next/link";
import { useState } from "react";
import { Badge, Card, CardBody, Col, Collapse } from "reactstrap";
import { CategoriesLearning, DesignLearning, DevelopmentTitle } from "../../../../../../Constant";
import CommonLearningHeader from "../Common/CommonLearningHeader";
import CommonCategorySection from "./Common/CommonCategorySection";

const CourseCategories = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Col xl={12}>
      <Card>
        <CommonLearningHeader heading={CategoriesLearning} isOpen={isOpen} setIsOpen={setIsOpen} />
        <CardBody className="px-0">
          <Collapse isOpen={isOpen}>
            <CommonCategorySection title={DesignLearning} data={DesignerCategoryData} className="pt-2" />
            <CommonCategorySection title={DevelopmentTitle} data={DevelopmentData} className="pt-1" />
          </Collapse>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CourseCategories;
