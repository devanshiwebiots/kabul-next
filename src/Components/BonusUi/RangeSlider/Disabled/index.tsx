import { Card, CardBody, Col } from "reactstrap";
import { Disable } from "@/Constant";
import DisabledForm from "./DisabledForm";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DefaultRangeSliderData } from "@/Data/BonusUi/RangeSlider";

const Disabled = () => {
  return (
    <Col lg={6}>
      <Card>
        <CommonCardHeader title={Disable} span={DefaultRangeSliderData}/>
        <CardBody>
          <DisabledForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Disabled;
