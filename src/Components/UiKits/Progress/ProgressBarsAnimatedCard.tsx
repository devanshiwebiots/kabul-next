import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ProgressBarsAnimated } from "@/Constant";
import { AnimatedData, ProgressStripList } from "@/Data/UiKits/Progress";
import { Row, Col, Card, Progress, CardBody } from "reactstrap";

const ProgressBarsAnimatedCard = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonCardHeader title={ProgressBarsAnimated} span={AnimatedData} />
        <CardBody className="progress-showcase">
          <Row>
            <Col>
              {ProgressStripList?.map(({ color, value }, index) => (
                <Progress color={color} striped animated value={value} key={index} />
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProgressBarsAnimatedCard;