import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicProgressBars } from "@/Constant";
import { BasicProgressData, BasicProgressList } from "@/Data/UiKits/Progress";
import { Row, Col, Card, Progress, CardBody } from "reactstrap";

const BasicProgressBarsCard = () => {
  return (
    <Card>
      <CommonCardHeader title={BasicProgressBars} span={BasicProgressData} />
      <CardBody className="progress-showcase">
        <Row>
          <Col>
            <Progress value="0" />
            {BasicProgressList?.map(({ color, value }, index) => (
              <Progress color={color} value={value} key={index}>
                {value}%
              </Progress>
            ))}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default BasicProgressBarsCard;