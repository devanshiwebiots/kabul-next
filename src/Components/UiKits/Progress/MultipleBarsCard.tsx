import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MultipleBars } from "@/Constant";
import { MultipleDta, MultipleList } from "@/Data/UiKits/Progress";
import { Row, Col, Card, Progress, CardBody } from "reactstrap";

const MultipleBarsCard = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={MultipleBars} span={MultipleDta} />
        <CardBody className="progress-showcase">
          <Row>
            <Col>
              <Progress multi>
                <Progress color="primary" bar value="30" />
                <Progress color="secondary" bar value="20" />
                <Progress color="success" bar value="15" />
              </Progress>
              <Progress multi>
                {MultipleList.map(({ color, value }, index) => (
                  <Progress color={color} bar value={value} key={index} style={{ width: "10%" }} />
                ))}
              </Progress>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MultipleBarsCard;