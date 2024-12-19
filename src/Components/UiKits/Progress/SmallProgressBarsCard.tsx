import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SmallProgressBars } from "@/Constant";
import { SmallProgressData, SmallProgressList } from "@/Data/UiKits/Progress";
import { Row, Col, Card, Progress, CardBody } from "reactstrap";

const SmallProgressBarsCard = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonCardHeader title={SmallProgressBars} span={SmallProgressData} />
        <CardBody className="progress-showcase progress-b-space">
          <Row>
            <Col>
              {SmallProgressList?.map((item, index) => (
                <Progress color="primary" animated striped bar value={item} className="small-progressbar rounded-pill sm-progress-bar overflow-visible mt-4" key={index}>
                  <span className="txt-primary progress-label">{item} MB Data</span>
                  <span className="animate-circle"></span>
                </Progress>
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SmallProgressBarsCard;