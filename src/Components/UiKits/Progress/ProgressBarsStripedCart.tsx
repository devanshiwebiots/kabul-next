import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ProgressBarsStriped } from "@/Constant";
import { ProgressStripData, ProgressStripList } from "@/Data/UiKits/Progress";
import { Row, Col, Card, Progress, CardBody } from "reactstrap";

const ProgressBarsStripedCard = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonCardHeader title={ProgressBarsStriped} span={ProgressStripData} />
        <CardBody className="progress-showcase">
          <Row>
            <Col>
              <Progress color="primary" striped value="10" />
              {ProgressStripList.map(({ color, value }, index) => (
                <Progress color={color} striped value={value} key={index} />
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProgressBarsStripedCard;