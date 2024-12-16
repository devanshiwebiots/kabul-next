import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { NumberOfBadge } from "@/Constant";
import React from "react";
import { Card, Col } from "reactstrap";
import CommonTagAndPillsCardBody from "./Common/CommonTagAndPillsCardBody";
import { NumberContext, NumberData } from "@/Data/UiKits/TagAndPills";

const NumberofBadgeCard = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonCardHeader title={NumberOfBadge} span={NumberData} />
        <CommonTagAndPillsCardBody number={NumberContext} />
      </Card>
    </Col>
  );
};

export default NumberofBadgeCard;
