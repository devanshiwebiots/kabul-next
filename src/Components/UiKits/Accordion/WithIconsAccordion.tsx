//@ts-nocheck
import { Card, CardBody, Col, UncontrolledAccordion } from "reactstrap";
import { StaticAccordion } from "./StaticAccordion";
import CommonAccordionItem from "./Common/CommonAccordionItem";
import { AccordionIconData, AccordionIconList } from "@/Data/UiKits/Accordion";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { WithIconsAccordions } from "@/Constant";

const WithIconsAccordion = () => {
  return (
    <Col xl={6} sm={12}>
      <Card className="basic-accordion">
        <CommonCardHeader title={WithIconsAccordions} span={AccordionIconData} />
        <CardBody className="accordion-border icons-accordion">
          <UncontrolledAccordion stayOpen className="dark-accordion">
            {AccordionIconList?.map((data, index) => (
              <CommonAccordionItem key={index} item={data} />
            ))}
          </UncontrolledAccordion>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithIconsAccordion;
