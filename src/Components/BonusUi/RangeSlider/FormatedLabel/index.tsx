import { Card, CardBody, Col } from "reactstrap";
import { FormattedLabels } from "@/Constant";
import FormatedLabelForm from "./FormatedLabelForm";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DefaultRangeSliderData } from "@/Data/BonusUi/RangeSlider";

const FormatedLabel = () => {
  return (
    <Col lg={6}>
      <Card>
        <CommonCardHeader title={FormattedLabels} span={DefaultRangeSliderData}/>
        <CardBody>
          <FormatedLabelForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default FormatedLabel;
