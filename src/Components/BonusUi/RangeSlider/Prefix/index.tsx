import { Card, CardBody, Col } from "reactstrap";
import { Prefixes } from "@/Constant";
import PrefixForm from "./PrefixForm";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DefaultRangeSliderData } from "@/Data/BonusUi/RangeSlider";

const Prefix = () => {
  return (
    <Col lg={6}>
      <Card>
        <CommonCardHeader title={Prefixes} span={DefaultRangeSliderData} />
        <CardBody className="mt-3 mb-3">
          <PrefixForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Prefix;
