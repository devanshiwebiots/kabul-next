import React, { useState } from "react";
import { Accordion, Card, CardBody, Col } from "reactstrap";
import CommonAccordionItem from "./Common/CommonAccordionItem";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FlushAccordions } from "@/Constant";
import { FlushData, FlushList } from "@/Data/UiKits/Accordion";

const FlushAccordion = () => {
  const [open, setOpen] = useState("1");
  const toggle = (id:string) => (open === id ? setOpen('') : setOpen(id));

  return (
    <Col sm={12} xl={6}>
      <Card className="basic-accordion">
        <CommonCardHeader title={FlushAccordions} span={FlushData} />
        <CardBody>
          <Accordion flush open={open} toggle={toggle} className="dark-accordion">
            {FlushList?.map((data, index) => (
              <CommonAccordionItem item={data} key={index} />
            ))}
          </Accordion>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FlushAccordion;
