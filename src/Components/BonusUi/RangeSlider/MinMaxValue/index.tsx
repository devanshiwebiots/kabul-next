import { Card, CardBody, Col } from "reactstrap";
import { MinMaxValues } from "@/Constant";
import MinMaxValueForm from "./MinMaxValueForm";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DefaultRangeSliderData } from "@/Data/BonusUi/RangeSlider";

const MinMaxValue = () => {
  return (
    <Col lg={6}>
      <Card>
        <CommonCardHeader title={MinMaxValues} span={DefaultRangeSliderData}/>
        <CardBody>
          <MinMaxValueForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MinMaxValue;
