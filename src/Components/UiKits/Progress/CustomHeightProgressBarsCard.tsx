import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CustomHeightProgressBars } from "@/Constant";
import { HeightProgressData, HeightProgressList } from "@/Data/UiKits/Progress";
import { Row, Col, Card, Progress, CardBody } from "reactstrap";

const CustomHeightProgressBarsCard = () => {
  return (
      <Card>
        <CommonCardHeader title={CustomHeightProgressBars} span={HeightProgressData} />
        <CardBody className="progress-showcase">
          <Row>
            <Col>
              {HeightProgressList?.map(({ color, value, height }, index) => (
                <Progress color={color} value={value} style={{ height: height }} key={index} />
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
  );
};

export default CustomHeightProgressBarsCard