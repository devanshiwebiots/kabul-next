import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Inputs, WithInputTypes } from "@/Constant";
import { WithInputData } from "@/Data/UiKits/Dropdown";
import React, { useState } from "react";
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownMenu, DropdownToggle, Input, InputGroup, InputGroupText } from "reactstrap";

const WithInputType = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <Col xl={4} sm={6}>
      <Card className="height-equal custom-input-type">
        <CommonCardHeader title={WithInputTypes} span={WithInputData} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color="warning" className="text-white">{Inputs}</DropdownToggle>
                <DropdownMenu className="dropdown-block dropdown-wrapper dark-input-type">
                  <li>
                    <InputGroup className="rounded-0 border-0 shadow-none">
                      <InputGroupText className="ps-0">
                        <Input className="mt-0" type="checkbox" value="" />
                        <span className="ms-2">Default checkbox</span>
                      </InputGroupText>
                    </InputGroup>
                    <InputGroup className="input-group rounded-0 border-0 shadow-none">
                      <InputGroupText className="ps-0">
                        <Input className="mt-0" type="radio" value="" />
                        <span className="ms-2">Default radio</span>
                      </InputGroupText>
                    </InputGroup>
                  </li>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithInputType;
