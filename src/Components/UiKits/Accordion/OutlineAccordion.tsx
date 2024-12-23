//@ts-nocheck
import { Card, CardBody, Col, UncontrolledAccordion } from "reactstrap";
import CommonAccordionItem from "./Common/CommonAccordionItem";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { OutlineAccordions } from "@/Constant";
import { OutlineData, OutlineList } from "@/Data/UiKits/Accordion";

const OutlineAccordion = () => {
  return (
    <Col xl={6} sm={12}>
      <Card className="basic-accordion">
        <CommonCardHeader title={OutlineAccordions} span={OutlineData} />
        <CardBody>
          <UncontrolledAccordion stayOpen className="dark-accordion">
            {OutlineList?.map((data, index) => (
              <CommonAccordionItem item={data} key={index} />
            ))}
          </UncontrolledAccordion>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineAccordion;
