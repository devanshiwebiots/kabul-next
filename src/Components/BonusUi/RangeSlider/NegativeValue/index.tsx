import { Card, CardBody, Col } from "reactstrap";
import { NegativeValues } from "@/Constant";
import NegativeValueForm from "./NegativeValueForm";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DefaultRangeSliderData } from "@/Data/BonusUi/RangeSlider";

const NegativeValue = () => {
  return (
    <Col lg={6}>
      <Card>
        <CommonCardHeader title={NegativeValues} span={DefaultRangeSliderData}/>
        <CardBody>
          <NegativeValueForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default NegativeValue;
