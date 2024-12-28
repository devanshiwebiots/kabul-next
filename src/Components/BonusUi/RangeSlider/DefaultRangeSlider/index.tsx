import { Card, CardBody, Col } from "reactstrap";
import { DefaultRangeSliders } from "@/Constant";
import DefaultRangeSliderForm from "./DefaultRangeSliderForm";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DefaultRangeSliderData } from "@/Data/BonusUi/RangeSlider";

const DefaultRangeSlider = () => {
  return (
    <Col lg={6}>
      <Card>
        <CommonCardHeader title={DefaultRangeSliders} span={DefaultRangeSliderData} />
        <CardBody>
          <DefaultRangeSliderForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultRangeSlider;
