import { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { NetBanking, SelectYourBank } from "@/Constant";
import { NetBankingList } from "@/Data/Forms";
import { NetBankingAccordionProp } from "@/Types/Forms";
import { ChevronDown, ChevronUp } from "react-feather";

const NetBankingAccordion: React.FC<NetBankingAccordionProp> = ({ netBankingFormValues, getUserData }) => {
  const [open, setOpen] = useState("");
  const toggle = (id: string) => (open === id ? setOpen("") : setOpen(id));
  const { bankName } = netBankingFormValues;

  return (
    <Accordion open={open} toggle={toggle} className="dark-accordion">
      <AccordionItem>
        <AccordionHeader targetId="1">{NetBanking}
          {open === "1" ? <ChevronUp className="svg-color" /> : <ChevronDown className="svg-color" />}
        </AccordionHeader>
        <AccordionBody accordionId="1" className="weight-title card-wrapper">
          <h6 className="sub-title f-14">{SelectYourBank}</h6>
          <Row className="choose-bank">
            {NetBankingList?.map((data, index) => (
              <Col sm={6} key={index}>
                {data?.bankList?.map((bankNames, number) => (
                  <FormGroup check key={number} className="radio radio-primary p-0">
                    <Input id={bankNames} type="radio" name="bankName" onChange={getUserData} checked={bankNames === bankName} value={bankNames} />
                    <Label htmlFor={bankNames} check>{bankNames} {number}</Label>
                  </FormGroup>
                ))}
              </Col>
            ))}
          </Row>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
};

export default NetBankingAccordion