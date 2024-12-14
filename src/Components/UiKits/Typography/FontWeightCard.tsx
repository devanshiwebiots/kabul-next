import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FontWeight, FontWeightTitle } from "@/Constant";
import { FontWeightData } from "@/Data/UiKits/Typography";
import { Card, CardBody, Col } from "reactstrap";

const FontWeightCard = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonCardHeader title={FontWeight} span={FontWeightData} tagClass="mb-0" />
        <CardBody className="d-flex flex-column gap-3">
          <h1 className="f-w-700">{FontWeightTitle} 1 Using<code> f-w-700</code></h1>
          <h2 className="f-w-600">{FontWeightTitle} 2 Using<code> f-w-600</code></h2>
          <h3 className="f-w-500">{FontWeightTitle} 3 Using<code> f-w-500</code></h3>
          <h4 className="f-w-400">{FontWeightTitle} 4 Using<code> f-w-400</code></h4>
          <h5 className="f-w-300">{FontWeightTitle} 5 Using<code> f-w-300</code></h5>
        </CardBody>
      </Card>
    </Col>
  );
}

export default FontWeightCard;