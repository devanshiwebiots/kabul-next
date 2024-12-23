import { useState } from "react";
import { Accordion, Card, CardBody, Col } from "reactstrap";
import CommonAccordionItem from "./Common/CommonAccordionItem";
import { SimpleAccordions } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AccordionData, AccordionList } from "@/Data/UiKits/Accordion";

const SimpleAccordion = () => {
  const [open, setOpen] = useState("1");
  const toggle = (id: string) => (open === id ? setOpen("") : setOpen(id));

  return (
    <Col sm={12} xl={6}>
      <Card className='basic-accordion'>
        <CommonCardHeader title={SimpleAccordions} span={AccordionData} />
        <CardBody>
          <Accordion open={open} toggle={toggle} className='dark-accordion'>
            {AccordionList?.map((data, index) => (
              <CommonAccordionItem item={data} key={index} />
            ))}
          </Accordion>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SimpleAccordion;
