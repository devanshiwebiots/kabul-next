import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LargeProgressBars } from "@/Constant";
import { LargeProgressData, LargeProgressList } from "@/Data/UiKits/Progress";
import { Row, Col, Card, Progress, CardBody } from "reactstrap";

const LargeProgressBarsCard = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonCardHeader title={LargeProgressBars} span={LargeProgressData} />
        <CardBody className="progress-showcase mb-3">
          <Row>
            <Col>
              {LargeProgressList?.map(({ color, value }, index) => (
                <Progress color={color} value={value} className="lg-progress-bar" key={index}>
                  {value}%
                </Progress>
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LargeProgressBarsCard