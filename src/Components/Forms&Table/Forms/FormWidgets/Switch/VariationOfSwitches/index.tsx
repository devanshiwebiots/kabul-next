import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { VariationOfSwitch } from "@/Constant";
import VariationOfSwitchOne from "./VariationOfSwitchOne";
import VariationOfSwitchTwo from "./VariationOfSwitchTwo";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { VariationSwitchData } from "@/Data/Forms";

const VariationOfSwitches = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonCardHeader title={VariationOfSwitch} span={VariationSwitchData} />
        <CardBody className="common-flex">
          <ul className="tg-list common-flex">
            <VariationOfSwitchOne />
            <VariationOfSwitchTwo />
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VariationOfSwitches;
